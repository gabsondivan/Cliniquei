export const DEFAULT_GAME_CONFIG = {
  timezone: 'America/Sao_Paulo',
  rotationStartDay: Math.floor(Date.UTC(2026, 4, 2) / 86400000),
  pointsByHint: [100, 80, 60, 40, 20],
  firstHintBonus: 20,
  storagePrefix: 'cliniquei'
};

export const DAY_MS = 86400000;

export const HINT_PT_BR_REPLACEMENTS = {
  "abdomen": "abdômen",
  "abdomens": "abdômens",
  "acido": "ácido",
  "acidos": "ácidos",
  "alteracoes": "alterações",
  "ambulatorio": "ambulatório",
  "anexial": "anexial",
  "apos": "após",
  "aereas": "aéreas",
  "atencao": "atenção",
  "avaliacao": "avaliação",
  "bilaterais": "bilaterais",
  "cardiaca": "cardíaca",
  "cardiaco": "cardíaco",
  "cardiacos": "cardíacos",
  "cefaleia": "cefaleia",
  "cirurgico": "cirúrgico",
  "cirurgica": "cirúrgica",
  "cirurgicas": "cirúrgicas",
  "clinica": "clínica",
  "clinicas": "clínicas",
  "clinico": "clínico",
  "clinicos": "clínicos",
  "colica": "cólica",
  "compativel": "compatível",
  "compativeis": "compatíveis",
  "complicacao": "complicação",
  "compressao": "compressão",
  "comecou": "começou",
  "consciencia": "consciência",
  "consolidacao": "consolidação",
  "continua": "contínua",
  "continuas": "contínuas",
  "coriza": "coriza",
  "cansaco": "cansaço",
  "crepitacao": "crepitação",
  "crepitacoes": "crepitações",
  "cronica": "crônica",
  "cronicas": "crônicas",
  "cronico": "crônico",
  "cronicos": "crônicos",
  "crianca": "criança",
  "criancas": "crianças",
  "descompressao": "descompressão",
  "desidratacao": "desidratação",
  "diagnostico": "diagnóstico",
  "diagnosticos": "diagnósticos",
  "diarreia": "diarreia",
  "diabetico": "diabético",
  "diabetica": "diabética",
  "disuria": "disúria",
  "distensao": "distensão",
  "doenca": "doença",
  "doencas": "doenças",
  "eletrocardiografico": "eletrocardiográfico",
  "elevacao": "elevação",
  "entao": "então",
  "episodio": "episódio",
  "episodios": "episódios",
  "estavel": "estável",
  "estaveis": "estáveis",
  "esofago": "esôfago",
  "esofagica": "esofágica",
  "especifica": "específica",
  "especifico": "específico",
  "esforco": "esforço",
  "esforcos": "esforços",
  "estao": "estão",
  "evidencia": "evidência",
  "evolucao": "evolução",
  "expectoracao": "expectoração",
  "falencia": "falência",
  "ficara": "ficará",
  "flutuacao": "flutuação",
  "fratura": "fratura",
  "frequencia": "frequência",
  "funcao": "função",
  "gasometria": "gasometria",
  "gestacao": "gestação",
  "ginecologico": "ginecológico",
  "ginecologica": "ginecológica",
  "ha": "há",
  "hemodinamica": "hemodinâmica",
  "hemodinamicamente": "hemodinamicamente",
  "hemorragia": "hemorragia",
  "higido": "hígido",
  "higida": "hígida",
  "hipertensao": "hipertensão",
  "hipotensao": "hipotensão",
  "hidroaereos": "hidroaéreos",
  "ictericia": "icterícia",
  "iliaca": "ilíaca",
  "iliacas": "ilíacas",
  "inapetencia": "inapetência",
  "inducao": "indução",
  "infeccao": "infecção",
  "infeccoes": "infecções",
  "infeccioso": "infeccioso",
  "inflamacao": "inflamação",
  "inflamatoria": "inflamatória",
  "inflamatorio": "inflamatório",
  "inflamatorios": "inflamatórios",
  "insuficiencia": "insuficiência",
  "internacoes": "internações",
  "intoxicacao": "intoxicação",
  "irritacao": "irritação",
  "ja": "já",
  "lamina": "lâmina",
  "lesao": "lesão",
  "lesoes": "lesões",
  "lentificacao": "lentificação",
  "limitrofe": "limítrofe",
  "lombar": "lombar",
  "mae": "mãe",
  "mecanica": "mecânica",
  "masseterica": "massetérica",
  "metalico": "metálico",
  "miocardica": "miocárdica",
  "mobilizacao": "mobilização",
  "murmurio": "murmúrio",
  "nao": "não",
  "nausea": "náusea",
  "nauseas": "náuseas",
  "neurologico": "neurológico",
  "obstetrica": "obstétrica",
  "obstrucao": "obstrução",
  "obvia": "óbvia",
  "obvio": "óbvio",
  "palpitacoes": "palpitações",
  "palpacao": "palpação",
  "padrao": "padrão",
  "pelvica": "pélvica",
  "pelvicas": "pélvicas",
  "pelve": "pelve",
  "perioperatorio": "perioperatório",
  "perfusao": "perfusão",
  "pos-operatorio": "pós-operatório",
  "posoperatorio": "pós-operatório",
  "pressao": "pressão",
  "preocupacao": "preocupação",
  "porem": "porém",
  "punho-percussao": "punho-percussão",
  "puncao": "punção",
  "quadro tipico": "quadro típico",
  "radiografia": "radiografia",
  "reacao": "reação",
  "reducao": "redução",
  "regiao": "região",
  "relacao": "relação",
  "respiracao": "respiração",
  "rapida": "rápida",
  "rapido": "rápido",
  "rabdomiolise": "rabdomiólise",
  "saturacao": "saturação",
  "secrecao": "secreção",
  "sensacao": "sensação",
  "sequencia": "sequência",
  "situacao": "situação",
  "sonolencia": "sonolência",
  "subita": "súbita",
  "subito": "súbito",
  "substancias": "substâncias",
  "sudoretico": "sudorético",
  "sudoretica": "sudorética",
  "sibilancia": "sibilância",
  "taquicardico": "taquicárdico",
  "taquicardica": "taquicárdica",
  "televisao": "televisão",
  "tipica": "típica",
  "tipico": "típico",
  "toracica": "torácica",
  "toracico": "torácico",
  "torax": "tórax",
  "urinaria": "urinária",
  "urinarias": "urinárias",
  "vesicular": "vesicular",
  "ventilacao": "ventilação",
  "vomito": "vômito",
  "vomitos": "vômitos"
};

export function normalizeAnswer(s){
  return String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export function capitalize(s){
  const value = String(s || '');
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function preserveCase(source, replacement){
  if(source === source.toUpperCase()) return replacement.toUpperCase();
  if(source[0] === source[0].toUpperCase()) return replacement.charAt(0).toUpperCase() + replacement.slice(1);
  return replacement;
}

export function normalizeHintPortuguese(text){
  let output = String(text || '');
  output = output.replace(/\b[\w-]+\b/gu, word => {
    const replacement = HINT_PT_BR_REPLACEMENTS[word.toLowerCase()];
    return replacement ? preserveCase(word, replacement) : word;
  });
  output = output.replace(/\ba direita\b/gi, match => preserveCase(match, 'à direita'));
  output = output.replace(/\ba esquerda\b/gi, match => preserveCase(match, 'à esquerda'));
  output = output.replace(/\bagora e o\b/gi, match => preserveCase(match, 'agora é o'));
  output = output.replace(/(^|[.!?]\s+)e tabagista\b/gi, (_, prefix) => `${prefix}É tabagista`);
  output = output.replace(/(^|[.!?]\s+)e o primeiro\b/gi, (_, prefix) => `${prefix}É o primeiro`);
  output = output.replace(/\bcomeca\b/gi, match => preserveCase(match, 'começa'));
  output = output.replace(/quadro tipico/gi, match => preserveCase(match, 'quadro típico'));
  output = output.replace(/mais compativel/gi, match => preserveCase(match, 'mais compatível'));
  return output;
}

export function getHintTier(hint){
  const text = String(hint || '').toLowerCase();
  if(/\b(compativel|quadro tipico|trata-se de|favorecendo o diagnostico|mais compativel com|classicamente|exigindo abordagem|diagnostico)\b/.test(text)) return 4;
  if(/\b(hemograma|leucocitose|neutrofilia|pcr|gasometria|potassio|ck|beta-hcg|troponina|biomarcadores|marcadores inflamatorios|urina tipo i|eletrocardiograma|ecg|radiografia|rx|tomografia|tc\b|ressonancia|ultrassonografia|usg|doppler)\b/.test(text)) return 3;
  if(/\b(ao exame|exame fisico|ausculta|palpacao|punho-percussao|saturacao|taquicard|taquipnei|febril|afebril|hemodinamic|descompressao dolorosa|tiragem|batimento de asa nasal)\b/.test(text)) return 2;
  if(/\b(homem|mulher|paciente|lactente|crianca|adolescente|idoso|anos|meses)\b/.test(text)) return 0;
  return 1;
}

export function scoreHintSpecificity(hint){
  const text = String(hint || '').toLowerCase();
  let score = Math.min(text.length / 12, 18);

  if(/\b(ao exame|exame fisico|ausculta|palpacao|punho-percussao|saturacao|taquicard|taquipnei|febril|afebril|hemodinamic|descompressao dolorosa|tiragem|batimento de asa nasal)\b/.test(text)) score += 20;
  if(/\b(hemograma|leucocitose|neutrofilia|pcr|gasometria|potassio|ck|beta-hcg|troponina|biomarcadores|marcadores inflamatorios|urina tipo i|eletrocardiograma|ecg|radiografia|rx|tomografia|tc\b|ressonancia|ultrassonografia|usg|doppler)\b/.test(text)) score += 35;
  if(/\b(compativel|quadro tipico|trata-se de|favorecendo o diagnostico|mais compativel com|classicamente|exigindo abordagem|diagnostico)\b/.test(text)) score += 45;
  if(/\b(antecedente|tabagista|diabetic|hipertens|pos-operatorio|fatores precipitantes|risco)\b/.test(text)) score += 10;
  if(/\b(homem|mulher|paciente|lactente|crianca|adolescente|idoso|anos|meses|dor|tosse|febre|dispneia|falta de ar|vomito|nausea)\b/.test(text)) score -= 6;

  return score;
}

export function shortenOpeningHintClinical(hint){
  let text = String(hint || '').replace(/\s+/g, ' ').trim();
  if(!text) return text;

  const sentence = text
    .split(/[.!?]/)
    .map(part => part.trim())
    .find(part => part.trim()) || text;
  const coreSentence = sentence
    .split(/\b(?:diz que|conta que|ela comenta que|ele comenta que|nega|mas|porem|por[ée]m)\b/i)[0]
    .trim();

  const subjectMatch = coreSentence.match(/^((?:homem|mulher|paciente|lactente|crianca|adolescente|idoso|recem-nascido|rn|bebe)[^,.;]*?)(?=(?:\s+(?:chega|procura|comparece|deu entrada|e trazido|foi trazido|e levado|foi levado|relata|refere|apresenta)\b|,))/i);
  const subject = subjectMatch ? subjectMatch[1].trim() : '';
  let complaint = subject ? coreSentence.slice(subjectMatch[0].length).trim() : coreSentence;

  complaint = complaint
    .replace(/^(?:,|\s)+/, '')
    .replace(/^(?:(?:chega(?: ao ps| ao pronto atendimento)?|procura atendimento|procura o pronto atendimento|comparece(?: ao ps| ao pronto atendimento)?|deu entrada(?: no ps| no pronto atendimento)?|e trazido(?: pela mae| pelos pais)?|foi trazido(?: pela mae| pelos pais)?|e levado|foi levado|relatando|referindo|refere|relata|apresentando|apresenta|com|por)\b[\s,]*)+/gi, '')
    .replace(/\s+,/g, ',')
    .replace(/\s{2,}/g, ' ')
    .trim();

  if(complaint.length > 110){
    const chunks = complaint.split(/,\s+/).map(part => part.trim()).filter(Boolean);
    if(chunks.length > 1) complaint = chunks[0];
  }

  if(complaint.length > 95){
    const match = complaint.match(/^(.{50,95}?)\b(?:,|\s(?:ha|h[aá]|desde|apos|ap[oó]s|quando)\b)/i);
    if(match) complaint = match[1].trim();
  }

  complaint = complaint.replace(/\s{2,}/g, ' ').replace(/\s+([,.;:])/g, '$1').trim();
  const isPediatric = /^(lactente|crianca|recem-nascido|rn|bebe)/i.test(subject);
  let compact = '';
  const proceduralOpening = /^(previamente\b|em procedimento\b|sob\b|durante\b)/i.test(complaint);

  if(subject && complaint){
    if(proceduralOpening){
      compact = `${subject}, ${complaint}`;
    } else {
      compact = isPediatric
        ? `${subject} foi trazido ao PS com ${complaint}`
        : `${subject} deu entrada no PS relatando ${complaint}`;
    }
  } else if(complaint){
    compact = `Paciente deu entrada no PS relatando ${complaint}`;
  } else {
    compact = sentence;
  }

  compact = compact.replace(/\s{2,}/g, ' ').replace(/\s+([,.;:])/g, '$1').trim();
  if(!/[.!?]$/.test(compact)) compact += '.';
  if(compact.length > 120) compact = `${compact.slice(0, 117).trimEnd()}...`;
  return compact;
}

export function buildProgressiveHints(hints){
  if(!Array.isArray(hints) || hints.length <= 1) return Array.isArray(hints) ? hints.slice() : [];

  const ordered = hints
    .map((hint, index) => ({ hint, index, tier: getHintTier(hint), score: scoreHintSpecificity(hint) }))
    .sort((a, b) => a.tier - b.tier || a.score - b.score || a.index - b.index)
    .map(item => item.hint);

  ordered[0] = shortenOpeningHintClinical(ordered[0]);
  return ordered.map(normalizeHintPortuguese);
}

export function getCaseDateParts(date = new Date(), config = DEFAULT_GAME_CONFIG){
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: config.timezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).formatToParts(date);
  const map = {};
  parts.forEach(part => {
    if(part.type !== 'literal') map[part.type] = part.value;
  });
  return {
    year: Number(map.year),
    month: Number(map.month),
    day: Number(map.day)
  };
}

export function getTimeZoneOffsetMs(date = new Date(), config = DEFAULT_GAME_CONFIG){
  const value = new Intl.DateTimeFormat('en-US', {
    timeZone: config.timezone,
    timeZoneName: 'shortOffset',
    hour: '2-digit'
  }).formatToParts(date).find(part => part.type === 'timeZoneName')?.value || 'GMT-3';
  const match = value.match(/GMT([+-]\d{1,2})(?::(\d{2}))?/);
  if(!match) return -3 * 60 * 60 * 1000;
  const hours = Number(match[1]);
  const minutes = Number(match[2] || 0);
  return ((hours * 60) + Math.sign(hours || 1) * minutes) * 60 * 1000;
}

export function getCaseDayNumber(date = new Date(), config = DEFAULT_GAME_CONFIG){
  const parts = getCaseDateParts(date, config);
  return Math.floor(Date.UTC(parts.year, parts.month - 1, parts.day) / DAY_MS);
}

export function getCaseDayKey(date = new Date(), config = DEFAULT_GAME_CONFIG){
  const parts = getCaseDateParts(date, config);
  return `${parts.year}-${String(parts.month).padStart(2, '0')}-${String(parts.day).padStart(2, '0')}`;
}

export function getCaseIndexForDate(cases, date = new Date(), config = DEFAULT_GAME_CONFIG){
  if(!Array.isArray(cases) || cases.length === 0) return 0;
  const diffDays = getCaseDayNumber(date, config) - config.rotationStartDay;
  return ((diffDays % cases.length) + cases.length) % cases.length;
}

export function getCaseDateWithOffset(offset, date = new Date(), config = DEFAULT_GAME_CONFIG){
  return new Date((getCaseDayNumber(date, config) + offset) * DAY_MS);
}

export function isSameCaseDay(a, b, config = DEFAULT_GAME_CONFIG){
  return getCaseDayNumber(a, config) === getCaseDayNumber(b, config);
}

export function getCaseDayStartTimestamp(dayNumber, config = DEFAULT_GAME_CONFIG){
  const dayDate = new Date(dayNumber * DAY_MS);
  let ts = Date.UTC(dayDate.getUTCFullYear(), dayDate.getUTCMonth(), dayDate.getUTCDate(), 0, 0, 0);
  for(let i = 0; i < 3; i++){
    ts = Date.UTC(dayDate.getUTCFullYear(), dayDate.getUTCMonth(), dayDate.getUTCDate(), 0, 0, 0) - getTimeZoneOffsetMs(new Date(ts), config);
  }
  return ts;
}

export function getCurrentCase(cases, date = new Date(), config = DEFAULT_GAME_CONFIG){
  const index = getCaseIndexForDate(cases, date, config);
  const selected = cases[index] || {};
  return {
    ...selected,
    hints: buildProgressiveHints(selected.hints)
  };
}

export function getGameStorageKey(dayKey, config = DEFAULT_GAME_CONFIG){
  return `${config.storagePrefix}:${dayKey}`;
}

export function isCorrectAnswer(answer, caseData){
  const value = normalizeAnswer(String(answer || '').trim());
  if(!value || !caseData || !Array.isArray(caseData.diagnosis)) return false;
  return caseData.diagnosis
    .map(normalizeAnswer)
    .some(diagnosis => value === diagnosis || value.includes(diagnosis) || diagnosis.includes(value));
}

export function calculatePoints(revealedHints, config = DEFAULT_GAME_CONFIG){
  const base = config.pointsByHint[Math.max(0, revealedHints - 1)] || 0;
  return base + (revealedHints === 1 ? config.firstHintBonus : 0);
}

export function createInitialGameState(){
  return {
    rev: 1,
    att: 0,
    over: false,
    results: [],
    wrongAnswers: [],
    solved: false,
    finalPoints: 0
  };
}

export function validateCases(cases){
  if(!Array.isArray(cases)) throw new Error('cases.json precisa conter um array.');
  cases.forEach((item, index) => {
    if(!Array.isArray(item.diagnosis) || item.diagnosis.length === 0) throw new Error(`Caso ${index + 1} não tem diagnosis válido.`);
    if(typeof item.specialty !== 'string' || !item.specialty.trim()) throw new Error(`Caso ${index + 1} não tem specialty válido.`);
    if(!Array.isArray(item.hints) || item.hints.length === 0) throw new Error(`Caso ${index + 1} não tem hints válidos.`);
  });
}
