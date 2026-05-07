import { getSupabaseClient, getCurrentSession } from './supabaseClient.js';

function safeDate(value){
  return String(value || '').slice(0, 10);
}

function emptyStats(){
  return {
    userAverageHints: '0.0',
    globalAverageHints: '0.0',
    userPoints: 0,
    completedCases: 0,
    globalCompletedCases: 0
  };
}

export async function getCurrentUser(){
  const session = await getCurrentSession();
  return session?.user || null;
}

export async function startAttempt({ userId, caseId, caseDayKey }){
  const supabase = await getSupabaseClient();
  if(!supabase || !userId) return null;

  const { data: existing, error: selectError } = await supabase
    .from('case_attempts')
    .select('id,finished_at')
    .eq('user_id', userId)
    .eq('case_day_key', safeDate(caseDayKey))
    .maybeSingle();

  if(selectError) {
    console.warn('Nao foi possivel carregar a tentativa atual.', selectError);
    return null;
  }

  if(existing) return existing;

  const { data, error } = await supabase
    .from('case_attempts')
    .insert({
      user_id: userId,
      case_id: caseId,
      case_day_key: safeDate(caseDayKey),
      solved: false,
      attempts: 0,
      hints_used: 1,
      points: 0
    })
    .select('id')
    .single();

  if(error) {
    console.warn('Nao foi possivel iniciar a tentativa.', error);
    return null;
  }

  await logActivity({
    userId,
    caseAttemptId: data?.id,
    eventType: 'case_started',
    caseId,
    caseDayKey,
    hintNumber: 1
  });
  return data;
}

export async function logActivity({ userId, caseAttemptId, eventType, caseId, caseDayKey, hintNumber, metadata = {} }){
  const supabase = await getSupabaseClient();
  if(!supabase || !userId) return;

  const { error } = await supabase.from('activity_logs').insert({
    user_id: userId,
    case_attempt_id: caseAttemptId || null,
    event_type: eventType,
    case_id: caseId || null,
    case_day_key: caseDayKey ? safeDate(caseDayKey) : null,
    hint_number: hintNumber || null,
    metadata
  });

  if(error) console.warn('Nao foi possivel registrar atividade.', error);
}

export async function logHintRevealed(context){
  return logActivity({ ...context, eventType: 'hint_revealed' });
}

export async function logAnswerSubmitted(context){
  return logActivity({ ...context, eventType: 'answer_submitted' });
}

export async function finishAttempt(result){
  const supabase = await getSupabaseClient();
  if(!supabase || !result?.userId) return null;

  const { error } = await supabase.rpc('finish_case_attempt', {
    p_user_id: result.userId,
    p_case_id: result.caseId,
    p_case_day_key: safeDate(result.caseDayKey),
    p_solved: Boolean(result.solved),
    p_attempts: Number(result.attempts) || 0,
    p_hints_used: Number(result.hintsUsed) || 1,
    p_points: Number(result.points) || 0,
    p_final_answer: result.finalAnswer || null
  });

  if(error) {
    console.warn('Nao foi possivel finalizar a tentativa.', error);
    return null;
  }

  return true;
}

export async function getStatsComparison(userId){
  const supabase = await getSupabaseClient();
  if(!supabase || !userId) return emptyStats();

  const [{ data: userStats, error: userError }, { data: globalStats, error: globalError }] = await Promise.all([
    supabase
      .from('user_stats')
      .select('avg_hints_used,total_points,completed_cases')
      .eq('user_id', userId)
      .maybeSingle(),
    supabase
      .from('global_stats')
      .select('avg_hints_used,total_points,completed_cases')
      .eq('id', true)
      .maybeSingle()
  ]);

  if(userError) console.warn('Nao foi possivel carregar estatisticas do usuario.', userError);
  if(globalError) console.warn('Nao foi possivel carregar estatisticas globais.', globalError);

  return {
    userAverageHints: Number(userStats?.avg_hints_used || 0).toFixed(1),
    globalAverageHints: Number(globalStats?.avg_hints_used || 0).toFixed(1),
    userPoints: userStats?.total_points || 0,
    completedCases: userStats?.completed_cases || 0,
    globalCompletedCases: globalStats?.completed_cases || 0
  };
}
