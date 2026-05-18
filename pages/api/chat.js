import { OPENERS, QUESTIONS, TRANSITIONS, matchCareers } from '../../lib/database';

export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { action, data } = req.body;

  if (action === 'opener') {
    const opener = OPENERS[Math.floor(Math.random() * OPENERS.length)];
    return res.status(200).json({ opener });
  }

  if (action === 'question') {
    const { questionIndex } = data;
    if (questionIndex >= QUESTIONS.length) return res.status(200).json({ done: true });
    const question = QUESTIONS[questionIndex];
    const transition = questionIndex > 0 ? TRANSITIONS[Math.floor(Math.random() * TRANSITIONS.length)] : null;
    return res.status(200).json({ question, transition, total: QUESTIONS.length });
  }

  if (action === 'result') {
    const { selectedTags, answers } = data;
    if (!selectedTags || selectedTags.length === 0) return res.status(400).json({ error: 'Sin datos' });
    const careers = matchCareers(selectedTags);
    const tagCount = {};
    selectedTags.forEach(tag => { tagCount[tag] = (tagCount[tag] || 0) + 1; });
    const dominantTags = Object.entries(tagCount).sort((a,b)=>b[1]-a[1]).slice(0,3).map(([t])=>t);
    const perfil = buildPerfil(dominantTags);
    const habilidades = buildHabilidades(tagCount);
    return res.status(200).json({ careers, perfil, habilidades });
  }

  return res.status(400).json({ error: 'Acción no reconocida' });
}

function buildPerfil(dominantTags) {
  const perfiles = {
    creativo:    { nombre: 'Creativo/a con visión propia', desc: 'Tenés una forma única de ver las cosas y te expresás mejor cuando podés crear. Las tareas repetitivas te agotan, pero cuando un proyecto es tuyo de verdad, le ponés todo.' },
    analítico:   { nombre: 'Pensador/a analítico/a', desc: 'Sos de los que antes de actuar entienden. Te gustan los desafíos que tienen solución lógica y te sentís cómodo/a cuando tenés información para trabajar.' },
    social:      { nombre: 'Conector/a de personas', desc: 'Tu energía está en el vínculo con otros. Te cargás de energía rodeándote de gente y sos de los que hacen que los equipos funcionen.' },
    técnico:     { nombre: 'Resolvedor/a técnico/a', desc: 'Entendés cómo funcionan las cosas y eso te da ventaja. Te atraen los sistemas, los procesos y encontrar la causa exacta de los problemas.' },
    manual:      { nombre: 'Hacedor/a práctico/a', desc: 'Aprendés haciendo y disfrutás del resultado tangible de tu trabajo. Ver algo terminado con tus propias manos te genera una satisfacción difícil de igualar.' },
    ayudar:      { nombre: 'Vocación de servicio', desc: 'Tu motivación más profunda es que los demás estén mejor gracias a vos. Eso es lo que mueve a los mejores en salud, educación y trabajo social.' },
    emprendedor: { nombre: 'Emprendedor/a nato/a', desc: 'No te imaginás trabajando siempre para otros. Tenés iniciativa, tolerás la incertidumbre mejor que la mayoría y siempre estás pensando en cómo mejorar algo.' },
    digital:     { nombre: 'Nativo/a digital', desc: 'El mundo online es tu territorio natural. Aprendés rápido con tecnología y ves oportunidades donde otros ven solo pantallas.' },
    naturaleza:  { nombre: 'Persona de campo y aire libre', desc: 'Te sentís más vos cuando estás en movimiento o en contacto con el entorno. Los lugares cerrados y la rutina de escritorio no son para vos.' },
    lider:       { nombre: 'Liderazgo natural', desc: 'Tenés facilidad para que otros confíen en vos. No necesitás imponerte — simplemente tomás la delantera cuando hace falta.' },
  };
  for (const tag of dominantTags) { if (perfiles[tag]) return perfiles[tag]; }
  return { nombre: 'Perfil versátil', desc: 'Tenés un perfil muy adaptable — te movés bien en distintos contextos y eso es una ventaja real en el mercado laboral actual.' };
}

function buildHabilidades(tagCount) {
  const map = {
    'Creatividad':       ['creativo','arte','emprendedor','variedad'],
    'Análisis':          ['analítico','numeros','detallista','ciencia'],
    'Trabajo en equipo': ['social','lider','ayudar'],
    'Habilidad técnica': ['técnico','digital','manual'],
    'Autonomía':         ['independiente','emprendedor','remoto'],
    'Vocación de ayuda': ['ayudar','social','naturaleza'],
  };
  const result = {};
  for (const [skill, tags] of Object.entries(map)) {
    let score = 30;
    tags.forEach(tag => { if (tagCount[tag]) score += tagCount[tag] * 12; });
    result[skill] = Math.min(98, score);
  }
  return result;
}
