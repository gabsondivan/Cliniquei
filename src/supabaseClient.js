const CONFIG_STORAGE_KEY = 'cliniquei:supabase:config';

function readStoredConfig(){
  try {
    const raw = localStorage.getItem(CONFIG_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

export function getSupabaseConfig(){
  const runtime = window.CLINIQUEI_SUPABASE_CONFIG || {};
  const stored = readStoredConfig();
  return {
    url: runtime.url || stored.url || '',
    anonKey: runtime.anonKey || stored.anonKey || ''
  };
}

export function isSupabaseConfigured(){
  const config = getSupabaseConfig();
  return Boolean(config.url && config.anonKey);
}

let client = null;
let createClientLoader = null;

async function loadCreateClient(){
  if(!createClientLoader) {
    createClientLoader = import('https://esm.sh/@supabase/supabase-js@2')
      .then(module => module.createClient);
  }
  return createClientLoader;
}

export async function getSupabaseClient(){
  if(client) return client;
  if(!isSupabaseConfigured()) return null;

  const config = getSupabaseConfig();
  let createClient;
  try {
    createClient = await loadCreateClient();
  } catch (e) {
    console.warn('Nao foi possivel carregar o cliente Supabase.', e);
    return null;
  }
  client = createClient(config.url, config.anonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  });
  return client;
}

export async function getCurrentSession(){
  const supabase = await getSupabaseClient();
  if(!supabase) return null;
  const { data } = await supabase.auth.getSession();
  return data.session || null;
}

export async function signInWithGoogle(){
  const supabase = await getSupabaseClient();
  if(!supabase) return { error: new Error('Supabase nao configurado.') };

  return supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: window.location.origin + window.location.pathname
    }
  });
}

export async function signInWithEmail(email, password){
  const supabase = await getSupabaseClient();
  if(!supabase) return { error: new Error('Supabase nao configurado.') };

  return supabase.auth.signInWithPassword({
    email: String(email || '').trim(),
    password: String(password || '')
  });
}

export async function signUpWithEmail(email, password){
  const supabase = await getSupabaseClient();
  if(!supabase) return { error: new Error('Supabase nao configurado.') };

  return supabase.auth.signUp({
    email: String(email || '').trim(),
    password: String(password || ''),
    options: {
      emailRedirectTo: window.location.origin + window.location.pathname
    }
  });
}

export async function resendSignupEmail(email){
  const supabase = await getSupabaseClient();
  if(!supabase) return { error: new Error('Supabase nao configurado.') };

  return supabase.auth.resend({
    type: 'signup',
    email: String(email || '').trim(),
    options: {
      emailRedirectTo: window.location.origin + window.location.pathname
    }
  });
}

export async function signOut(){
  const supabase = await getSupabaseClient();
  if(!supabase) return { error: null };
  return supabase.auth.signOut();
}

export async function upsertProfile(user){
  const supabase = await getSupabaseClient();
  if(!supabase || !user) return null;

  const metadata = user.user_metadata || {};
  const profile = {
    id: user.id,
    email: user.email || null,
    full_name: metadata.full_name || metadata.name || null,
    avatar_url: metadata.avatar_url || metadata.picture || null,
    last_login_at: new Date().toISOString()
  };

  const { error } = await supabase
    .from('profiles')
    .upsert(profile, { onConflict: 'id' });

  if(error) console.warn('Nao foi possivel atualizar o perfil.', error);
  return error ? null : profile;
}
