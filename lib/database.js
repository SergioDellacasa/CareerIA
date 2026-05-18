// ============================================================
//  CAREER FLOW — Base de datos completa
//  Carreras, preguntas y motor de matching
// ============================================================

// ── TAGS usados para matching ──────────────────────────────
// creativo, analítico, social, técnico, manual, naturaleza,
// emprendedor, lider, detallista, independiente, ayudar,
// digital, arte, ciencia, numeros, escritura, deporte,
// rapido, largo, remoto, presencial, estabilidad, variedad

// ── BASE DE CARRERAS ───────────────────────────────────────
export const CAREERS = [
  // TECNOLOGÍA
  { id: 'programacion', nombre: 'Programación / Desarrollo de Software', emoji: '💻', area: 'Tecnología', duracion: '3-4 años (o 1 año con cursos intensivos)', modalidad: 'Remoto / Híbrido', demanda: 'Muy alta', tags: ['técnico','analítico','digital','independiente','remoto','largo'] },
  { id: 'diseno_ux', nombre: 'Diseño UX/UI', emoji: '🎨', area: 'Tecnología', duracion: '1-2 años', modalidad: 'Remoto / Freelance', demanda: 'Alta', tags: ['creativo','técnico','digital','arte','independiente','remoto'] },
  { id: 'ciberseguridad', nombre: 'Ciberseguridad', emoji: '🔒', area: 'Tecnología', duracion: '2-3 años', modalidad: 'Remoto / Híbrido', demanda: 'Muy alta', tags: ['técnico','analítico','digital','detallista','remoto'] },
  { id: 'data', nombre: 'Análisis de Datos / Data Science', emoji: '📊', area: 'Tecnología', duracion: '2-3 años', modalidad: 'Remoto / Híbrido', demanda: 'Muy alta', tags: ['analítico','técnico','numeros','digital','remoto','detallista'] },
  { id: 'redes', nombre: 'Redes y Telecomunicaciones', emoji: '🌐', area: 'Tecnología', duracion: '2-3 años', modalidad: 'Presencial / Híbrido', demanda: 'Alta', tags: ['técnico','analítico','manual','presencial','estabilidad'] },
  { id: 'soporte_ti', nombre: 'Soporte Técnico / Help Desk', emoji: '🖥️', area: 'Tecnología', duracion: '6 meses - 1 año', modalidad: 'Presencial / Híbrido', demanda: 'Alta', tags: ['técnico','social','ayudar','rapido','presencial'] },
  { id: 'marketing_digital', nombre: 'Marketing Digital', emoji: '📱', area: 'Tecnología / Comunicación', duracion: '1-2 años', modalidad: 'Remoto / Freelance', demanda: 'Alta', tags: ['creativo','digital','social','escritura','remoto','emprendedor'] },
  { id: 'community', nombre: 'Community Manager', emoji: '📣', area: 'Comunicación Digital', duracion: '6 meses - 1 año', modalidad: 'Remoto', demanda: 'Alta', tags: ['social','creativo','escritura','digital','remoto','rapido'] },
  { id: 'ecommerce', nombre: 'Comercio Electrónico / E-commerce', emoji: '🛒', area: 'Tecnología / Negocios', duracion: '6 meses - 1 año', modalidad: 'Remoto', demanda: 'Alta', tags: ['emprendedor','digital','analítico','remoto','numeros'] },
  { id: 'edicion_video', nombre: 'Edición de Video / Producción Audiovisual', emoji: '🎬', area: 'Arte / Digital', duracion: '1-2 años', modalidad: 'Freelance / Remoto', demanda: 'Alta', tags: ['creativo','arte','digital','independiente','remoto','variedad'] },

  // DISEÑO Y ARTE
  { id: 'diseno_grafico', nombre: 'Diseño Gráfico', emoji: '🖌️', area: 'Arte / Diseño', duracion: '3 años (o 1 año técnico)', modalidad: 'Freelance / Híbrido', demanda: 'Alta', tags: ['creativo','arte','visual','independiente','digital','variedad'] },
  { id: 'ilustracion', nombre: 'Ilustración / Arte Digital', emoji: '✏️', area: 'Arte', duracion: '1-2 años', modalidad: 'Freelance', demanda: 'Media', tags: ['creativo','arte','independiente','digital','variedad'] },
  { id: 'fotografia', nombre: 'Fotografía Profesional', emoji: '📷', area: 'Arte', duracion: '1-2 años', modalidad: 'Freelance / Presencial', demanda: 'Media', tags: ['creativo','arte','independiente','variedad','emprendedor'] },
  { id: 'arquitectura', nombre: 'Arquitectura', emoji: '🏛️', area: 'Arte / Construcción', duracion: '5-6 años', modalidad: 'Presencial / Híbrido', demanda: 'Media', tags: ['creativo','técnico','arte','analítico','largo','presencial','detallista'] },
  { id: 'moda', nombre: 'Diseño de Indumentaria / Moda', emoji: '👗', area: 'Arte / Diseño', duracion: '3-4 años', modalidad: 'Presencial / Freelance', demanda: 'Media', tags: ['creativo','arte','manual','emprendedor','variedad'] },
  { id: 'musica', nombre: 'Música (Intérprete / Productor)', emoji: '🎵', area: 'Arte', duracion: '4 años (o autodidacta)', modalidad: 'Freelance / Presencial', demanda: 'Media', tags: ['creativo','arte','independiente','variedad','emprendedor'] },
  { id: 'actuacion', nombre: 'Actuación / Teatro', emoji: '🎭', area: 'Arte', duracion: '3-4 años', modalidad: 'Presencial', demanda: 'Media', tags: ['creativo','social','arte','variedad','presencial'] },
  { id: 'animacion', nombre: 'Animación y Multimedia', emoji: '🎮', area: 'Arte / Digital', duracion: '2-3 años', modalidad: 'Remoto / Freelance', demanda: 'Alta', tags: ['creativo','técnico','arte','digital','remoto'] },

  // SALUD
  { id: 'medicina', nombre: 'Medicina', emoji: '🩺', area: 'Salud', duracion: '6-7 años', modalidad: 'Presencial', demanda: 'Muy alta', tags: ['ciencia','ayudar','social','analítico','largo','presencial','estabilidad'] },
  { id: 'enfermeria', nombre: 'Enfermería', emoji: '💉', area: 'Salud', duracion: '3 años', modalidad: 'Presencial', demanda: 'Muy alta', tags: ['ayudar','social','ciencia','presencial','estabilidad','detallista'] },
  { id: 'psicologia', nombre: 'Psicología', emoji: '🧠', area: 'Salud / Social', duracion: '5 años', modalidad: 'Presencial / Híbrido', demanda: 'Alta', tags: ['ayudar','social','analítico','escritura','largo','estabilidad'] },
  { id: 'odontologia', nombre: 'Odontología', emoji: '🦷', area: 'Salud', duracion: '5-6 años', modalidad: 'Presencial', demanda: 'Alta', tags: ['ciencia','ayudar','manual','técnico','largo','presencial','estabilidad'] },
  { id: 'kinesiologia', nombre: 'Kinesiología / Fisioterapia', emoji: '💪', area: 'Salud', duracion: '4 años', modalidad: 'Presencial', demanda: 'Alta', tags: ['ayudar','deporte','ciencia','manual','presencial','social'] },
  { id: 'nutricion', nombre: 'Nutrición y Dietética', emoji: '🥗', area: 'Salud', duracion: '4 años', modalidad: 'Presencial / Híbrido', demanda: 'Alta', tags: ['ayudar','ciencia','social','naturaleza','presencial','analítico'] },
  { id: 'farmacia', nombre: 'Farmacia', emoji: '💊', area: 'Salud', duracion: '5 años', modalidad: 'Presencial', demanda: 'Alta', tags: ['ciencia','analítico','detallista','presencial','estabilidad','numeros'] },
  { id: 'optometria', nombre: 'Optometría', emoji: '👁️', area: 'Salud', duracion: '4 años', modalidad: 'Presencial', demanda: 'Media', tags: ['ciencia','ayudar','técnico','presencial','estabilidad'] },
  { id: 'veterinaria', nombre: 'Veterinaria', emoji: '🐾', area: 'Salud Animal', duracion: '5-6 años', modalidad: 'Presencial', demanda: 'Alta', tags: ['naturaleza','ayudar','ciencia','animales','largo','presencial'] },
  { id: 'bioanalisis', nombre: 'Bioanálisis / Laboratorio Clínico', emoji: '🔬', area: 'Salud', duracion: '4-5 años', modalidad: 'Presencial', demanda: 'Alta', tags: ['ciencia','analítico','detallista','técnico','presencial','estabilidad'] },
  { id: 'terapia_ocupacional', nombre: 'Terapia Ocupacional', emoji: '🤝', area: 'Salud', duracion: '4 años', modalidad: 'Presencial', demanda: 'Alta', tags: ['ayudar','social','creativo','presencial','variedad'] },
  { id: 'fonoaudiologia', nombre: 'Fonoaudiología', emoji: '🗣️', area: 'Salud', duracion: '4 años', modalidad: 'Presencial', demanda: 'Alta', tags: ['ayudar','social','ciencia','presencial','detallista'] },

  // EDUCACIÓN
  { id: 'docencia_primaria', nombre: 'Docencia (Primaria / Inicial)', emoji: '📚', area: 'Educación', duracion: '3-4 años', modalidad: 'Presencial', demanda: 'Muy alta', tags: ['ayudar','social','lider','presencial','estabilidad','variedad'] },
  { id: 'docencia_secundaria', nombre: 'Docencia (Secundaria)', emoji: '🏫', area: 'Educación', duracion: '4-5 años', modalidad: 'Presencial', demanda: 'Alta', tags: ['ayudar','social','lider','presencial','estabilidad','escritura'] },
  { id: 'educacion_fisica', nombre: 'Educación Física / Entrenamiento Personal', emoji: '⚽', area: 'Educación / Deporte', duracion: '3-4 años', modalidad: 'Presencial', demanda: 'Alta', tags: ['deporte','ayudar','social','presencial','variedad','lider'] },
  { id: 'capacitacion', nombre: 'Capacitación y Desarrollo Laboral', emoji: '🎓', area: 'Educación / RRHH', duracion: '2-3 años', modalidad: 'Híbrido', demanda: 'Media', tags: ['social','ayudar','lider','escritura','variedad','digital'] },

  // NEGOCIOS Y ADMINISTRACIÓN
  { id: 'administracion', nombre: 'Administración de Empresas', emoji: '🏢', area: 'Negocios', duracion: '4-5 años', modalidad: 'Presencial / Híbrido', demanda: 'Alta', tags: ['analítico','lider','numeros','estabilidad','variedad','largo'] },
  { id: 'contabilidad', nombre: 'Contabilidad / Contador Público', emoji: '🧾', area: 'Negocios / Finanzas', duracion: '4-5 años', modalidad: 'Presencial / Híbrido', demanda: 'Muy alta', tags: ['analítico','numeros','detallista','estabilidad','largo','presencial'] },
  { id: 'finanzas', nombre: 'Finanzas / Economía', emoji: '💰', area: 'Negocios', duracion: '4-5 años', modalidad: 'Presencial / Híbrido', demanda: 'Alta', tags: ['analítico','numeros','lider','estabilidad','largo'] },
  { id: 'recursos_humanos', nombre: 'Recursos Humanos', emoji: '👥', area: 'Negocios', duracion: '3-4 años', modalidad: 'Presencial / Híbrido', demanda: 'Alta', tags: ['social','ayudar','lider','analítico','presencial','estabilidad'] },
  { id: 'marketing', nombre: 'Marketing y Publicidad', emoji: '📢', area: 'Negocios / Comunicación', duracion: '4 años', modalidad: 'Híbrido', demanda: 'Alta', tags: ['creativo','social','analítico','digital','variedad','lider'] },
  { id: 'comercio_exterior', nombre: 'Comercio Exterior / Negocios Internacionales', emoji: '✈️', area: 'Negocios', duracion: '3-4 años', modalidad: 'Presencial / Híbrido', demanda: 'Alta', tags: ['analítico','social','numeros','variedad','largo'] },
  { id: 'emprendimiento', nombre: 'Gestión de Emprendimientos / Startups', emoji: '🚀', area: 'Negocios', duracion: '1-2 años', modalidad: 'Flexible', demanda: 'Alta', tags: ['emprendedor','lider','creativo','variedad','digital','analítico'] },
  { id: 'logistica', nombre: 'Logística y Cadena de Suministro', emoji: '📦', area: 'Negocios', duracion: '2-3 años', modalidad: 'Presencial / Híbrido', demanda: 'Alta', tags: ['analítico','técnico','detallista','presencial','estabilidad','numeros'] },

  // DERECHO Y CIENCIAS SOCIALES
  { id: 'derecho', nombre: 'Derecho / Abogacía', emoji: '⚖️', area: 'Derecho', duracion: '5-6 años', modalidad: 'Presencial', demanda: 'Alta', tags: ['analítico','social','escritura','lider','largo','estabilidad'] },
  { id: 'trabajo_social', nombre: 'Trabajo Social', emoji: '🤲', area: 'Ciencias Sociales', duracion: '4 años', modalidad: 'Presencial', demanda: 'Alta', tags: ['ayudar','social','lider','presencial','variedad','emprendedor'] },
  { id: 'sociologia', nombre: 'Sociología / Ciencias Políticas', emoji: '🌍', area: 'Ciencias Sociales', duracion: '4-5 años', modalidad: 'Presencial / Híbrido', demanda: 'Media', tags: ['analítico','escritura','social','largo','variedad'] },
  { id: 'comunicacion', nombre: 'Comunicación Social / Periodismo', emoji: '📰', area: 'Comunicación', duracion: '4-5 años', modalidad: 'Presencial / Híbrido', demanda: 'Media', tags: ['social','escritura','creativo','variedad','digital','lider'] },
  { id: 'relaciones_internacionales', nombre: 'Relaciones Internacionales', emoji: '🌐', area: 'Ciencias Sociales', duracion: '4-5 años', modalidad: 'Presencial', demanda: 'Media', tags: ['social','analítico','escritura','largo','variedad'] },

  // INGENIERÍA Y CIENCIAS
  { id: 'ingenieria_civil', nombre: 'Ingeniería Civil', emoji: '🏗️', area: 'Ingeniería', duracion: '5-6 años', modalidad: 'Presencial', demanda: 'Alta', tags: ['técnico','analítico','numeros','lider','largo','presencial','ciencia'] },
  { id: 'ingenieria_mecanica', nombre: 'Ingeniería Mecánica', emoji: '⚙️', area: 'Ingeniería', duracion: '5-6 años', modalidad: 'Presencial', demanda: 'Alta', tags: ['técnico','manual','analítico','ciencia','largo','presencial'] },
  { id: 'ingenieria_electrica', nombre: 'Ingeniería Eléctrica / Electrónica', emoji: '⚡', area: 'Ingeniería', duracion: '5-6 años', modalidad: 'Presencial / Híbrido', demanda: 'Alta', tags: ['técnico','analítico','ciencia','numeros','largo','estabilidad'] },
  { id: 'ingenieria_industrial', nombre: 'Ingeniería Industrial', emoji: '🏭', area: 'Ingeniería', duracion: '5-6 años', modalidad: 'Presencial / Híbrido', demanda: 'Alta', tags: ['analítico','técnico','numeros','lider','largo','estabilidad'] },
  { id: 'ingenieria_quimica', nombre: 'Ingeniería Química / Química Industrial', emoji: '🧪', area: 'Ingeniería / Ciencia', duracion: '5-6 años', modalidad: 'Presencial', demanda: 'Alta', tags: ['ciencia','analítico','técnico','numeros','largo','detallista'] },
  { id: 'biologia', nombre: 'Biología / Ciencias Naturales', emoji: '🌿', area: 'Ciencia', duracion: '5 años', modalidad: 'Presencial', demanda: 'Media', tags: ['ciencia','naturaleza','analítico','largo','detallista'] },
  { id: 'quimica', nombre: 'Química / Bioquímica', emoji: '🔬', area: 'Ciencia', duracion: '5 años', modalidad: 'Presencial', demanda: 'Media', tags: ['ciencia','analítico','detallista','numeros','largo'] },
  { id: 'matematica', nombre: 'Matemática / Estadística', emoji: '🔢', area: 'Ciencia', duracion: '4-5 años', modalidad: 'Presencial / Remoto', demanda: 'Alta', tags: ['analítico','numeros','técnico','largo','detallista'] },
  { id: 'geologia', nombre: 'Geología', emoji: '🪨', area: 'Ciencia', duracion: '5 años', modalidad: 'Presencial', demanda: 'Media', tags: ['ciencia','naturaleza','analítico','largo','variedad'] },

  // OFICIOS Y TÉCNICOS
  { id: 'electricidad', nombre: 'Electricista / Técnico Eléctrico', emoji: '⚡', area: 'Oficio', duracion: '1-2 años', modalidad: 'Presencial', demanda: 'Muy alta', tags: ['manual','técnico','presencial','rapido','estabilidad','emprendedor'] },
  { id: 'plomeria', nombre: 'Plomería / Gasista', emoji: '🔧', area: 'Oficio', duracion: '1-2 años', modalidad: 'Presencial', demanda: 'Muy alta', tags: ['manual','técnico','presencial','rapido','estabilidad','emprendedor'] },
  { id: 'albanileria', nombre: 'Albañilería / Construcción', emoji: '🧱', area: 'Oficio', duracion: '1-2 años', modalidad: 'Presencial', demanda: 'Muy alta', tags: ['manual','técnico','presencial','rapido','estabilidad'] },
  { id: 'mecanica_automotriz', nombre: 'Mecánica Automotriz', emoji: '🔩', area: 'Oficio', duracion: '1-2 años', modalidad: 'Presencial', demanda: 'Muy alta', tags: ['manual','técnico','presencial','rapido','estabilidad','emprendedor'] },
  { id: 'soldadura', nombre: 'Soldadura / Herrería', emoji: '🔥', area: 'Oficio', duracion: '6 meses - 1 año', modalidad: 'Presencial', demanda: 'Alta', tags: ['manual','técnico','presencial','rapido','estabilidad'] },
  { id: 'carpinteria', nombre: 'Carpintería / Ebanistería', emoji: '🪵', area: 'Oficio', duracion: '1-2 años', modalidad: 'Presencial / Freelance', demanda: 'Alta', tags: ['manual','creativo','presencial','emprendedor','variedad'] },
  { id: 'pintura', nombre: 'Pintura de Obra / Decoración', emoji: '🖌️', area: 'Oficio', duracion: '6 meses - 1 año', modalidad: 'Presencial / Freelance', demanda: 'Alta', tags: ['manual','creativo','presencial','rapido','emprendedor'] },
  { id: 'refrigeracion', nombre: 'Refrigeración y Climatización', emoji: '❄️', area: 'Oficio', duracion: '1 año', modalidad: 'Presencial', demanda: 'Alta', tags: ['manual','técnico','presencial','rapido','estabilidad'] },
  { id: 'electrodomesticos', nombre: 'Reparación de Electrodomésticos', emoji: '🔌', area: 'Oficio', duracion: '6 meses - 1 año', modalidad: 'Presencial / Freelance', demanda: 'Alta', tags: ['manual','técnico','presencial','rapido','emprendedor'] },
  { id: 'tapiceria', nombre: 'Tapicería / Restauración de Muebles', emoji: '🛋️', area: 'Oficio', duracion: '6 meses - 1 año', modalidad: 'Freelance / Presencial', demanda: 'Media', tags: ['manual','creativo','presencial','emprendedor','variedad'] },
  { id: 'costura', nombre: 'Costura / Confección Textil', emoji: '🧵', area: 'Oficio', duracion: '6 meses - 1 año', modalidad: 'Freelance / Presencial', demanda: 'Media', tags: ['manual','creativo','detallista','emprendedor','variedad'] },
  { id: 'joyeria', nombre: 'Joyería / Orfebrería', emoji: '💍', area: 'Oficio / Arte', duracion: '1-2 años', modalidad: 'Freelance / Presencial', demanda: 'Media', tags: ['manual','creativo','arte','detallista','emprendedor'] },
  { id: 'jardineria', nombre: 'Jardinería / Paisajismo', emoji: '🌳', area: 'Oficio / Naturaleza', duracion: '6 meses - 1 año', modalidad: 'Presencial', demanda: 'Alta', tags: ['naturaleza','manual','presencial','emprendedor','variedad'] },

  // GASTRONOMÍA Y HOTELERÍA
  { id: 'gastronomia', nombre: 'Gastronomía / Cocina Profesional', emoji: '🍳', area: 'Gastronomía', duracion: '1-3 años', modalidad: 'Presencial', demanda: 'Alta', tags: ['creativo','manual','presencial','variedad','emprendedor','arte'] },
  { id: 'pasteleria', nombre: 'Pastelería / Panadería', emoji: '🎂', area: 'Gastronomía', duracion: '6 meses - 1 año', modalidad: 'Presencial / Freelance', demanda: 'Alta', tags: ['creativo','manual','presencial','emprendedor','detallista','arte'] },
  { id: 'barismo', nombre: 'Barismo / Café de Especialidad', emoji: '☕', area: 'Gastronomía', duracion: '3-6 meses', modalidad: 'Presencial', demanda: 'Alta', tags: ['social','manual','presencial','rapido','emprendedor','variedad'] },
  { id: 'bartender', nombre: 'Bartender / Coctelería', emoji: '🍹', area: 'Gastronomía', duracion: '3-6 meses', modalidad: 'Presencial', demanda: 'Media', tags: ['social','manual','presencial','creativo','variedad','rapido'] },
  { id: 'hoteleria', nombre: 'Hotelería y Turismo', emoji: '🏨', area: 'Turismo', duracion: '2-3 años', modalidad: 'Presencial', demanda: 'Alta', tags: ['social','lider','variedad','presencial','ayudar'] },
  { id: 'guia_turismo', nombre: 'Guía de Turismo', emoji: '🗺️', area: 'Turismo', duracion: '1-2 años', modalidad: 'Presencial', demanda: 'Media', tags: ['social','variedad','presencial','naturaleza','ayudar','lider'] },

  // AGRO Y NATURALEZA
  { id: 'agronomia', nombre: 'Agronomía / Ingeniería Agronómica', emoji: '🌾', area: 'Agro', duracion: '5 años', modalidad: 'Presencial / Campo', demanda: 'Alta', tags: ['naturaleza','ciencia','analítico','largo','presencial','estabilidad'] },
  { id: 'zootecnia', nombre: 'Zootecnia / Producción Animal', emoji: '🐄', area: 'Agro', duracion: '4-5 años', modalidad: 'Presencial / Campo', demanda: 'Media', tags: ['naturaleza','ciencia','animales','presencial','largo'] },
  { id: 'produccion_apicola', nombre: 'Apicultura / Producción Apícola', emoji: '🐝', area: 'Agro', duracion: '6 meses - 1 año', modalidad: 'Campo', demanda: 'Media', tags: ['naturaleza','manual','emprendedor','rapido','variedad'] },
  { id: 'ecologia', nombre: 'Ecología / Gestión Ambiental', emoji: '🌱', area: 'Ciencia / Naturaleza', duracion: '4-5 años', modalidad: 'Presencial / Campo', demanda: 'Media', tags: ['naturaleza','ciencia','analítico','largo','variedad'] },

  // SEGURIDAD Y EMERGENCIAS
  { id: 'seguridad_privada', nombre: 'Seguridad Privada', emoji: '🛡️', area: 'Seguridad', duracion: '6 meses', modalidad: 'Presencial', demanda: 'Alta', tags: ['presencial','estabilidad','rapido','lider','social'] },
  { id: 'bombero', nombre: 'Bombero / Defensa Civil', emoji: '🚒', area: 'Seguridad', duracion: '1 año', modalidad: 'Presencial', demanda: 'Alta', tags: ['presencial','ayudar','deporte','lider','social','variedad'] },
  { id: 'policia', nombre: 'Fuerzas de Seguridad / Policía', emoji: '👮', area: 'Seguridad', duracion: '2-3 años', modalidad: 'Presencial', demanda: 'Alta', tags: ['presencial','lider','social','estabilidad','deporte'] },

  // TRANSPORTE Y LOGÍSTICA
  { id: 'conduccion', nombre: 'Conductor Profesional / Transporte', emoji: '🚛', area: 'Transporte', duracion: '3-6 meses', modalidad: 'Presencial', demanda: 'Muy alta', tags: ['independiente','manual','presencial','rapido','estabilidad'] },
  { id: 'aeronautica', nombre: 'Aeronáutica / Piloto Comercial', emoji: '✈️', area: 'Transporte', duracion: '3-4 años', modalidad: 'Presencial', demanda: 'Media', tags: ['técnico','analítico','largo','variedad','lider','estabilidad'] },

  // BELLEZA Y BIENESTAR
  { id: 'peluqueria', nombre: 'Peluquería / Estilismo', emoji: '💇', area: 'Belleza', duracion: '1-2 años', modalidad: 'Presencial / Freelance', demanda: 'Alta', tags: ['creativo','social','manual','presencial','emprendedor','rapido'] },
  { id: 'estetica', nombre: 'Estética / Cosmetología', emoji: '💅', area: 'Belleza', duracion: '1-2 años', modalidad: 'Presencial / Freelance', demanda: 'Alta', tags: ['creativo','social','manual','presencial','emprendedor','ayudar'] },
  { id: 'masajes', nombre: 'Masoterapia / Masajes Terapéuticos', emoji: '🧘', area: 'Bienestar', duracion: '6 meses - 1 año', modalidad: 'Presencial / Freelance', demanda: 'Alta', tags: ['ayudar','manual','presencial','emprendedor','social','rapido'] },
  { id: 'yoga', nombre: 'Instructor de Yoga / Pilates / Meditación', emoji: '🧘', area: 'Bienestar', duracion: '6 meses - 1 año', modalidad: 'Presencial / Online', demanda: 'Media', tags: ['ayudar','deporte','social','emprendedor','variedad','lider'] },

  // IDIOMAS Y LETRAS
  { id: 'traduccion', nombre: 'Traducción e Interpretación', emoji: '🌍', area: 'Idiomas', duracion: '4 años', modalidad: 'Remoto / Freelance', demanda: 'Alta', tags: ['escritura','analítico','independiente','remoto','detallista','variedad'] },
  { id: 'letras', nombre: 'Letras / Literatura', emoji: '📖', area: 'Letras', duracion: '4-5 años', modalidad: 'Presencial / Remoto', demanda: 'Media', tags: ['escritura','creativo','analítico','independiente','largo'] },
  { id: 'profesor_idiomas', nombre: 'Profesor de Idiomas (inglés, etc.)', emoji: '🗣️', area: 'Educación / Idiomas', duracion: '2-4 años', modalidad: 'Presencial / Online', demanda: 'Muy alta', tags: ['social','ayudar','lider','presencial','variedad','estabilidad'] },

  // DEPORTE
  { id: 'entrenador', nombre: 'Entrenador Personal / Preparador Físico', emoji: '🏋️', area: 'Deporte', duracion: '1-2 años', modalidad: 'Presencial / Online', demanda: 'Alta', tags: ['deporte','ayudar','social','presencial','emprendedor','lider'] },
  { id: 'nutricion_deportiva', nombre: 'Nutrición Deportiva', emoji: '🥤', area: 'Salud / Deporte', duracion: '3-4 años', modalidad: 'Presencial / Híbrido', demanda: 'Alta', tags: ['deporte','ciencia','ayudar','analítico','presencial'] },

  // SOCIAL MEDIA Y CONTENIDO
  { id: 'content_creator', nombre: 'Creador de Contenido / Influencer', emoji: '🎥', area: 'Digital / Comunicación', duracion: 'Autodidacta (6 meses)', modalidad: 'Remoto', demanda: 'Alta', tags: ['creativo','digital','social','emprendedor','arte','remoto','variedad'] },
  { id: 'copywriting', nombre: 'Copywriting / Redacción Publicitaria', emoji: '✍️', area: 'Comunicación / Digital', duracion: '6 meses - 1 año', modalidad: 'Remoto', demanda: 'Alta', tags: ['escritura','creativo','digital','remoto','independiente','variedad'] },

  // CIENCIAS EXACTAS
  { id: 'fisica', nombre: 'Física / Astrofísica', emoji: '🔭', area: 'Ciencia', duracion: '5 años', modalidad: 'Presencial', demanda: 'Media', tags: ['ciencia','analítico','numeros','largo','detallista'] },
];

// ── 7 APERTURAS DE CONVERSACIÓN ────────────────────────────
export const OPENERS = [
  {
    id: 'a',
    mensaje: '¡Hola! Soy Flow 👋 Tu asesor vocacional. Estoy acá para ayudarte a descubrir qué camino te queda mejor. No te voy a dar un formulario aburrido — vamos a charlar un rato y juntos lo encontramos. Para arrancar... ¿cuál es tu situación ahora mismo?',
    opciones: [
      'Estoy terminando el secundario y no sé qué seguir',
      'Ya terminé pero no arranqué nada todavía',
      'Empecé algo pero no me convence',
    ],
  },
  {
    id: 'b',
    mensaje: '¡Buenas! Soy Flow 😊 Elegir qué estudiar o en qué trabajar puede parecer enorme, pero tranqui — lo vamos a ir achicando juntos con unas preguntas simples. Primero lo más básico: ¿cómo te encontrás en este momento?',
    opciones: [
      'Perdido/a, no tengo ni idea de qué quiero',
      'Tengo algunas ideas pero no sé cuál elegir',
      'Quiero cambiar de carrera o trabajo',
    ],
  },
  {
    id: 'c',
    mensaje: '¡Hola, hola! Soy Flow 🙌 Acá estamos para ayudarte a descubrir tu camino, sin presiones y sin tecnicismos raros. Primero quiero entender desde dónde partís. ¿Qué te trajo por acá hoy?',
    opciones: [
      'No sé qué estudiar y me agobia un poco',
      'Quiero explorar opciones antes de decidir',
      'Alguien me recomendó esto y quise probar',
    ],
  },
  {
    id: 'd',
    mensaje: 'Hey, ¡bienvenido/a! Soy Flow 👋 Mi trabajo es ayudarte a descubrir qué carrera, curso u oficio se adapta mejor a cómo sos vos. No hay respuestas buenas ni malas acá. ¿Con qué frase te identificás más ahora mismo?',
    opciones: [
      'Me cuesta decidir porque me gustan muchas cosas',
      'No me apasiona nada en especial y eso me preocupa',
      'Sé más o menos qué quiero pero necesito confirmarlo',
    ],
  },
  {
    id: 'e',
    mensaje: '¡Qué bueno que estás acá! Soy Flow 😄 Juntos vamos a encontrar opciones que tengan sentido para vos — no para tu familia, no para tus amigos, para VOS. Para arrancar bien, contame: ¿ya tuviste alguna experiencia laboral o de estudio?',
    opciones: [
      'No, todavía no trabajé ni estudié nada',
      'Trabajé en algunas cosas pero nada relacionado a lo que quiero',
      'Estudié algo pero lo dejé o no me gustó',
    ],
  },
  {
    id: 'f',
    mensaje: '¡Hola! Soy Flow 🤙 Tu brújula vocacional. En un rato vamos a tener mucho más claro por dónde ir. Todo arranca con una pregunta simple: cuando pensás en tu futuro trabajo ideal, ¿qué es lo primero que se te viene a la mente?',
    opciones: [
      'Ganar bien y tener estabilidad',
      'Hacer algo que me guste aunque gane menos',
      'No tengo ni imagen de cómo sería',
    ],
  },
  {
    id: 'g',
    mensaje: '¡Buenas! Soy Flow 👋 Sé que elegir puede dar un poco de vértigo, pero estoy acá para que sea más fácil. Te voy a hacer unas preguntas cortas sobre vos — tus gustos, tu forma de ser — y al final te doy opciones concretas. ¿Empezamos? Primero: ¿cuánto tiempo estás dispuesto/a a estudiar?',
    opciones: [
      'Poco — quiero arrancar a trabajar rápido (menos de 1 año)',
      'Algo razonable (1 a 3 años)',
      'Lo que haga falta si es lo correcto (más de 3 años)',
    ],
  },
];

// ── 10 PREGUNTAS CON OPCIONES ──────────────────────────────
export const QUESTIONS = [
  {
    id: 'q1',
    texto: 'Cuando tenés un día libre sin obligaciones, ¿qué terminás haciendo?',
    opciones: [
      { texto: 'Algo creativo: dibujar, cocinar, música, armar cosas', tags: ['creativo','arte','manual'] },
      { texto: 'Ver series, leer, aprender algo nuevo por mi cuenta', tags: ['analítico','escritura','digital'] },
      { texto: 'Salir, estar con gente, hacer deporte o actividades al aire libre', tags: ['social','deporte','naturaleza'] },
      { texto: 'Jugar a algo, ver videos, descansar tranquilo/a', tags: ['independiente','digital'] },
    ],
  },
  {
    id: 'q2',
    texto: '¿Con cuál de estas frases te identificás más a la hora de trabajar o estudiar?',
    opciones: [
      { texto: 'Me gusta crear cosas desde cero y que queden con mi sello', tags: ['creativo','independiente','emprendedor','arte'] },
      { texto: 'Prefiero entender cómo funcionan las cosas y resolver problemas', tags: ['analítico','técnico','ciencia'] },
      { texto: 'Lo mío es ayudar a otros, que me necesiten y poder acompañarlos', tags: ['ayudar','social','lider'] },
      { texto: 'Me copa organizar, planificar y que todo salga según lo planeado', tags: ['analítico','detallista','lider','numeros'] },
    ],
  },
  {
    id: 'q3',
    texto: 'Si tuvieras que elegir, ¿dónde te imaginarías trabajando?',
    opciones: [
      { texto: 'Desde casa o donde quiera, con mi computadora', tags: ['remoto','digital','independiente'] },
      { texto: 'En una oficina o lugar fijo con un equipo', tags: ['presencial','social','estabilidad'] },
      { texto: 'En la calle, en movimiento, nunca en el mismo lugar', tags: ['variedad','presencial','naturaleza'] },
      { texto: 'Con mis propias manos, en un taller, campo o en obra', tags: ['manual','presencial','naturaleza'] },
    ],
  },
  {
    id: 'q4',
    texto: 'Cuando algo te sale bien, ¿qué fue lo que pasó casi siempre?',
    opciones: [
      { texto: 'Lo hice solo/a, a mi manera y sin que me dijeran cómo', tags: ['independiente','emprendedor','creativo'] },
      { texto: 'Trabajé con otros y entre todos lo sacamos', tags: ['social','lider','ayudar'] },
      { texto: 'Me concentré mucho en los detalles y no dejé nada al azar', tags: ['detallista','analítico','técnico'] },
      { texto: 'Me apasionaba el tema y eso solo fue suficiente', tags: ['creativo','variedad','arte'] },
    ],
  },
  {
    id: 'q5',
    texto: '¿Qué tipo de actividades hacías en el colegio que te resultaban más llevaderas?',
    opciones: [
      { texto: 'Materias como matemática, física o química — los números y fórmulas', tags: ['numeros','analítico','ciencia','técnico'] },
      { texto: 'Lengua, historia, geografía, ciencias sociales', tags: ['escritura','social','analítico'] },
      { texto: 'Educación física, deportes, cualquier cosa activa', tags: ['deporte','manual','presencial'] },
      { texto: 'Arte, música, plástica, talleres creativos', tags: ['creativo','arte','manual'] },
    ],
  },
  {
    id: 'q6',
    texto: 'Si mañana empezaras a trabajar, ¿qué sería lo más importante para vos?',
    opciones: [
      { texto: 'Que me pague bien y sea estable, aunque no me apasione', tags: ['estabilidad','numeros','largo'] },
      { texto: 'Que me guste lo que hago, aunque al principio gane menos', tags: ['creativo','variedad','arte'] },
      { texto: 'Que pueda crecer y aprender cosas nuevas todo el tiempo', tags: ['analítico','variedad','digital','lider'] },
      { texto: 'Que pueda ser mi propio jefe y manejar mis tiempos', tags: ['emprendedor','independiente','remoto'] },
    ],
  },
  {
    id: 'q7',
    texto: '¿Cómo te llevás con la tecnología y las pantallas?',
    opciones: [
      { texto: 'Muy bien, paso horas con la computadora y me resulta natural', tags: ['digital','técnico','remoto'] },
      { texto: 'Las uso para lo básico pero no me apasionan', tags: ['manual','presencial','naturaleza'] },
      { texto: 'Me gustan para redes, videos, diseño — lo visual', tags: ['creativo','digital','arte'] },
      { texto: 'Aprendo rápido pero prefiero el trabajo físico o con personas', tags: ['manual','social','presencial'] },
    ],
  },
  {
    id: 'q8',
    texto: 'Cuando tenés que resolver algo difícil, ¿cómo lo encarás?',
    opciones: [
      { texto: 'Analizo todo, busco información, pienso antes de actuar', tags: ['analítico','detallista','ciencia'] },
      { texto: 'Lo hago sobre la marcha, aprendo haciendo', tags: ['manual','variedad','emprendedor'] },
      { texto: 'Pido ayuda o busco alguien que sepa más que yo', tags: ['social','ayudar','lider'] },
      { texto: 'Busco una forma creativa o diferente de encararlo', tags: ['creativo','independiente','emprendedor'] },
    ],
  },
  {
    id: 'q9',
    texto: '¿Qué tan importante es para vos el contacto con otras personas en el trabajo?',
    opciones: [
      { texto: 'Fundamental — me encanta trabajar con gente y para la gente', tags: ['social','ayudar','lider','presencial'] },
      { texto: 'Me gusta en dosis — trabajo mejor con algo de autonomía', tags: ['independiente','analítico','digital'] },
      { texto: 'Prefiero trabajar solo/a, me concentro mejor', tags: ['independiente','remoto','detallista'] },
      { texto: 'Depende del día, me adapto a cualquier cosa', tags: ['variedad','social','emprendedor'] },
    ],
  },
  {
    id: 'q10',
    texto: 'Por último — ¿cuál de estos escenarios te imaginarías disfrutando dentro de 5 años?',
    opciones: [
      { texto: 'Siendo especialista en algo, reconocido/a en mi área', tags: ['analítico','largo','detallista','estabilidad','lider'] },
      { texto: 'Con mi propio negocio o proyecto, siendo independiente', tags: ['emprendedor','independiente','lider','variedad'] },
      { texto: 'Haciendo algo que me llene aunque no sea lo más rentable', tags: ['creativo','arte','variedad','social'] },
      { texto: 'Con trabajo estable, buen sueldo y tranquilidad', tags: ['estabilidad','numeros','presencial','estabilidad'] },
    ],
  },
];

// ── MENSAJES DE TRANSICIÓN ENTRE PREGUNTAS ─────────────────
// Comentarios humanos que conectan cada respuesta con la siguiente pregunta
export const TRANSITIONS = [
  'Bueno, ya voy entendiendo cómo sos. Seguimos —',
  'Me va quedando más claro. La siguiente —',
  'Interesante eso que elegiste. Dale, otra —',
  'Perfecto, eso me ayuda un montón. Continuamos —',
  'Tiene sentido. Un poco más y ya casi lo tenemos —',
  'Ahí vamos bien. Otra pregunta —',
  'Eso me sirve para ajustar las opciones para vos. Seguimos —',
  'Ya casi terminamos, aguantá un poco más —',
  'Muy bien, ya tengo bastante info. Una más —',
];

// ── MOTOR DE MATCHING ──────────────────────────────────────
export function matchCareers(selectedTags) {
  // Contar frecuencia de cada tag elegido
  const tagCount = {};
  selectedTags.forEach(tag => {
    tagCount[tag] = (tagCount[tag] || 0) + 1;
  });

  // Puntuar cada carrera
  const scored = CAREERS.map(career => {
    let score = 0;
    const totalTags = career.tags.length;

    career.tags.forEach(tag => {
      if (tagCount[tag]) {
        // Más peso si el tag fue elegido muchas veces
        score += tagCount[tag] * 2;
      }
    });

    // Normalizar sobre 100
    const maxPossible = totalTags * 2 * Math.max(...Object.values(tagCount), 1);
    const normalized = maxPossible > 0 ? Math.round((score / maxPossible) * 100) : 0;

    return { ...career, score: normalized };
  });

  // Ordenar por score y tomar top 3 con scores distintos
  const sorted = scored
    .filter(c => c.score > 0)
    .sort((a, b) => b.score - a.score);

  // Top 3 con ajuste para que los scores se vean naturales (no todos 100)
  const top3 = sorted.slice(0, 3);

  if (top3.length === 0) return sorted.slice(0, 3);

  // Ajustar scores para que sean distintos y realistas
  const base = Math.min(94, Math.max(70, top3[0]?.score || 80));
  return top3.map((c, i) => ({
    ...c,
    match: Math.max(60, base - i * Math.floor(Math.random() * 5 + 6)),
  }));
}
