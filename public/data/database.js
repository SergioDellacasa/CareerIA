/**
 * CAREER FLOW — Base de datos completa
 * Carreras, preguntas, opciones y sistema de matching
 */

// ─────────────────────────────────────────────
// BASE DE DATOS DE CARRERAS (todos los rubros)
// ─────────────────────────────────────────────
const CAREERS = [

  // TECNOLOGÍA
  { id: "programacion", nombre: "Programación / Desarrollo de Software", emoji: "💻", rubro: "Tecnología", duracion: "2–4 años", modalidad: "Remoto / Híbrido", demanda: "Muy alta", descripcion: "Creás aplicaciones, páginas web y sistemas que usan millones de personas.", queHace: "Escribís código, resolvés problemas y construís cosas digitales desde tu computadora.", tags: ["tecnologia","logica","crear","solo","remoto","largo"] },
  { id: "diseño_ux", nombre: "Diseño UX/UI", emoji: "🎨", rubro: "Tecnología / Diseño", duracion: "1–2 años", modalidad: "Remoto / Híbrido", demanda: "Alta", descripcion: "Diseñás cómo se ven y se sienten las apps y páginas web para que sean fáciles de usar.", queHace: "Hacés bocetos, prototipos y te preguntás constantemente: ¿esto es fácil de entender para el usuario?", tags: ["tecnologia","creatividad","diseño","remoto","largo","crear"] },
  { id: "ciberseguridad", nombre: "Ciberseguridad", emoji: "🔒", rubro: "Tecnología", duracion: "2–3 años", modalidad: "Remoto / Híbrido", demanda: "Muy alta", descripcion: "Protegés empresas y personas de hackers y ataques digitales.", queHace: "Buscás vulnerabilidades en sistemas antes de que alguien malo las encuentre.", tags: ["tecnologia","logica","solo","remoto","largo","analisis"] },
  { id: "data_analytics", nombre: "Análisis de Datos", emoji: "📊", rubro: "Tecnología / Negocios", duracion: "1–2 años", modalidad: "Remoto / Híbrido", demanda: "Alta", descripcion: "Analizás números y datos para ayudar a las empresas a tomar mejores decisiones.", queHace: "Hacés gráficos, sacás conclusiones de tablas enormes y explicás qué significan los números.", tags: ["tecnologia","logica","analisis","solo","remoto","largo"] },
  { id: "soporte_it", nombre: "Soporte Técnico / IT", emoji: "🖥️", rubro: "Tecnología", duracion: "6 meses–1 año", modalidad: "Presencial / Híbrido", demanda: "Alta", descripcion: "Ayudás a personas y empresas cuando algo falla en su computadora o red.", queHace: "Resolvés problemas técnicos, configurás equipos y enseñás a usar tecnología.", tags: ["tecnologia","ayudar","equipo","presencial","corto","logica"] },
  { id: "marketing_digital", nombre: "Marketing Digital", emoji: "📱", rubro: "Comunicación / Negocios", duracion: "6 meses–1 año", modalidad: "Remoto / Híbrido", demanda: "Alta", descripcion: "Hacés que las marcas lleguen a más gente usando redes sociales, publicidad online y contenido.", queHace: "Creás campañas, escribís posts, analizás qué funciona y qué no en internet.", tags: ["comunicacion","creatividad","crear","equipo","remoto","corto","negocio"] },
  { id: "community_manager", nombre: "Community Manager", emoji: "🌐", rubro: "Comunicación", duracion: "6 meses", modalidad: "Remoto", demanda: "Alta", descripcion: "Gestionás las redes sociales de marcas o personas famosas.", queHace: "Respondés comentarios, creás contenido, programás publicaciones y hacés crecer comunidades.", tags: ["comunicacion","creatividad","crear","equipo","remoto","corto"] },

  // DISEÑO Y ARTE
  { id: "diseño_grafico", nombre: "Diseño Gráfico", emoji: "🖌️", rubro: "Diseño / Arte", duracion: "2–3 años", modalidad: "Remoto / Freelance", demanda: "Media", descripcion: "Creás logos, afiches, packaging y todo lo visual que ves en marcas y productos.", queHace: "Usás programas de diseño para dar vida a ideas visuales de clientes.", tags: ["creatividad","diseño","crear","solo","remoto","largo","arte"] },
  { id: "fotografia", nombre: "Fotografía Profesional", emoji: "📷", rubro: "Arte / Comunicación", duracion: "1–2 años", modalidad: "Freelance / Presencial", demanda: "Media", descripcion: "Capturás momentos, contás historias y creás imágenes que impactan.", queHace: "Fotografiás eventos, productos, personas o paisajes y editás las fotos después.", tags: ["creatividad","arte","crear","solo","freelance","corto"] },
  { id: "produccion_audiovisual", nombre: "Producción Audiovisual / Video", emoji: "🎬", rubro: "Arte / Comunicación", duracion: "2–3 años", modalidad: "Freelance / Presencial", demanda: "Alta", descripcion: "Grabás y editás videos para empresas, artistas, YouTube, publicidad y más.", queHace: "Manejás cámara, editás en la computadora y contás historias con imágenes en movimiento.", tags: ["creatividad","arte","crear","equipo","freelance","largo"] },
  { id: "animacion", nombre: "Animación / Motion Graphics", emoji: "🎞️", rubro: "Arte / Tecnología", duracion: "2–3 años", modalidad: "Remoto / Freelance", demanda: "Alta", descripcion: "Creás animaciones para publicidades, videojuegos, series o redes sociales.", queHace: "Hacés que los personajes y objetos se muevan en pantalla de forma creativa.", tags: ["creatividad","arte","crear","solo","remoto","largo","tecnologia"] },
  { id: "musica", nombre: "Música / Producción Musical", emoji: "🎵", rubro: "Arte", duracion: "2–4 años", modalidad: "Freelance / Presencial", demanda: "Media", descripcion: "Tocás, componés o producís música para artistas, cine, publicidades o tu propio proyecto.", queHace: "Ensayás, grabás en estudio, componés canciones o manejás la parte técnica del sonido.", tags: ["creatividad","arte","crear","pasion","freelance","largo"] },
  { id: "escritura", nombre: "Escritura / Redacción Creativa", emoji: "✍️", rubro: "Comunicación / Arte", duracion: "1–2 años", modalidad: "Remoto / Freelance", demanda: "Media", descripcion: "Escribís contenido para marcas, medios, libros, guiones o blogs.", queHace: "Redactás artículos, historias, copys publicitarios o guiones según el proyecto.", tags: ["comunicacion","creatividad","crear","solo","remoto","corto","arte"] },

  // SALUD
  { id: "enfermeria", nombre: "Enfermería", emoji: "💉", rubro: "Salud", duracion: "3 años", modalidad: "Presencial", demanda: "Muy alta", descripcion: "Cuidás pacientes en hospitales, clínicas o domicilios y sos esencial en cualquier sistema de salud.", queHace: "Aplicás medicamentos, hacés controles, acompañás a pacientes y trabajás junto a médicos.", tags: ["salud","ayudar","equipo","presencial","largo","empatia"] },
  { id: "medicina", nombre: "Medicina", emoji: "🩺", rubro: "Salud", duracion: "6+ años", modalidad: "Presencial", demanda: "Muy alta", descripcion: "Diagnosticás y tratás enfermedades. Es una carrera larga pero de las más respetadas.", queHace: "Atendés pacientes, hacés diagnósticos, recetás tratamientos y seguís estudiando toda la vida.", tags: ["salud","ayudar","equipo","presencial","muylargo","logica","analisis"] },
  { id: "odontologia", nombre: "Odontología", emoji: "🦷", rubro: "Salud", duracion: "5 años", modalidad: "Presencial", demanda: "Alta", descripcion: "Cuidás la salud bucal de las personas. Podés tener tu propio consultorio.", queHace: "Hacés limpiezas, empastes, extracciones y orientás a los pacientes sobre su salud dental.", tags: ["salud","ayudar","solo","presencial","muylargo","manual"] },
  { id: "psicologia", nombre: "Psicología", emoji: "🧠", rubro: "Salud / Ciencias Sociales", duracion: "5 años", modalidad: "Presencial / Remoto", demanda: "Alta", descripcion: "Acompañás a personas en sus emociones, pensamientos y conductas para que vivan mejor.", queHace: "Hacés sesiones individuales o grupales, escuchás, analizás y proponés estrategias de bienestar.", tags: ["salud","ayudar","solo","largo","empatia","analisis","comunicacion"] },
  { id: "nutricion", nombre: "Nutrición y Dietética", emoji: "🥗", rubro: "Salud", duracion: "4 años", modalidad: "Presencial / Híbrido", demanda: "Alta", descripcion: "Ayudás a las personas a mejorar su alimentación para estar más sanas.", queHace: "Hacés planes de alimentación personalizados según las necesidades de cada paciente.", tags: ["salud","ayudar","solo","largo","empatia","ciencia"] },
  { id: "fisioterapia", nombre: "Kinesiología / Fisioterapia", emoji: "🦴", rubro: "Salud", duracion: "4 años", modalidad: "Presencial", demanda: "Alta", descripcion: "Ayudás a personas a recuperarse de lesiones o mejorar su movilidad.", queHace: "Hacés ejercicios terapéuticos, masajes y tratamientos físicos con los pacientes.", tags: ["salud","ayudar","equipo","presencial","largo","manual","empatia"] },
  { id: "farmacia", nombre: "Farmacia", emoji: "💊", rubro: "Salud / Ciencias", duracion: "5 años", modalidad: "Presencial", demanda: "Alta", descripcion: "Trabajás con medicamentos, asesorás a pacientes y podés tener tu propia farmacia.", queHace: "Dispensás medicamentos, respondés consultas sobre dosis e interacciones y gestionás stocks.", tags: ["salud","ayudar","ciencia","logica","presencial","muylargo"] },
  { id: "veterinaria", nombre: "Veterinaria", emoji: "🐾", rubro: "Salud Animal", duracion: "5–6 años", modalidad: "Presencial", demanda: "Alta", descripcion: "Cuidás la salud de animales domésticos, de granja o silvestres.", queHace: "Hacés consultas, operaciones, vacunas y asesorás a los dueños sobre el cuidado de sus mascotas.", tags: ["salud","animales","ayudar","presencial","muylargo","empatia","ciencia"] },

  // EDUCACIÓN
  { id: "docencia_inicial", nombre: "Docencia Inicial / Jardín", emoji: "🎒", rubro: "Educación", duracion: "3 años", modalidad: "Presencial", demanda: "Alta", descripcion: "Enseñás y acompañás el desarrollo de niños pequeños en sus primeros años de vida.", queHace: "Planificás actividades, jugás, enseñás y contenés a los niños en el jardín.", tags: ["educacion","ayudar","equipo","presencial","largo","empatia","niños"] },
  { id: "docencia_primaria", nombre: "Docencia Primaria", emoji: "📚", rubro: "Educación", duracion: "3–4 años", modalidad: "Presencial", demanda: "Alta", descripcion: "Enseñás a niños de 6 a 12 años las bases de todas las materias.", queHace: "Planificás clases, enseñás, evaluás y acompañás el crecimiento de tus alumnos.", tags: ["educacion","ayudar","equipo","presencial","largo","empatia","niños"] },
  { id: "docencia_secundaria", nombre: "Docencia Secundaria", emoji: "🏫", rubro: "Educación", duracion: "4 años", modalidad: "Presencial", demanda: "Media", descripcion: "Enseñás tu materia favorita a adolescentes en la escuela secundaria.", queHace: "Dás clases, armás evaluaciones y ayudás a los jóvenes a entender conceptos complejos.", tags: ["educacion","ayudar","equipo","presencial","largo","empatia","adolescentes"] },
  { id: "educacion_especial", nombre: "Educación Especial", emoji: "🌈", rubro: "Educación / Salud", duracion: "4 años", modalidad: "Presencial", demanda: "Alta", descripcion: "Trabajás con personas que tienen necesidades educativas especiales y les abrís puertas.", queHace: "Adaptás materiales, acompañás procesos de aprendizaje y coordinás con familias y equipos.", tags: ["educacion","salud","ayudar","empatia","presencial","largo","niños"] },

  // CIENCIAS SOCIALES Y DERECHO
  { id: "abogacia", nombre: "Abogacía / Derecho", emoji: "⚖️", rubro: "Derecho", duracion: "5–6 años", modalidad: "Presencial / Híbrido", demanda: "Media", descripcion: "Defendés derechos, asesorás legalmente y podés especializarte en muchas áreas.", queHace: "Estudiás casos, escribís documentos legales, negociás y representás personas o empresas.", tags: ["derecho","analisis","comunicacion","solo","largo","muylargo","negocio"] },
  { id: "trabajo_social", nombre: "Trabajo Social", emoji: "🤝", rubro: "Ciencias Sociales", duracion: "4 años", modalidad: "Presencial", demanda: "Media", descripcion: "Acompañás a personas y comunidades vulnerables para mejorar su situación.", queHace: "Gestionás recursos, hacés entrevistas y trabajás con familias, instituciones y el Estado.", tags: ["social","ayudar","equipo","presencial","largo","empatia","comunicacion"] },
  { id: "comunicacion_social", nombre: "Comunicación Social / Periodismo", emoji: "📰", rubro: "Comunicación", duracion: "4–5 años", modalidad: "Híbrido", demanda: "Media", descripcion: "Contás historias, investigás y hacés que la información llegue a la gente.", queHace: "Escribís notas, hacés entrevistas, editás contenido para medios digitales, radio o TV.", tags: ["comunicacion","creatividad","crear","equipo","largo","arte"] },
  { id: "sociologia", nombre: "Sociología", emoji: "🌍", rubro: "Ciencias Sociales", duracion: "5 años", modalidad: "Presencial / Híbrido", demanda: "Baja", descripcion: "Estudiás cómo funciona la sociedad, los grupos humanos y los cambios sociales.", queHace: "Hacés investigaciones, analizás datos sociales y trabajás en políticas públicas u ONGs.", tags: ["social","analisis","logica","solo","largo","investigacion"] },

  // NEGOCIOS Y ADMINISTRACIÓN
  { id: "administracion", nombre: "Administración de Empresas", emoji: "🏢", rubro: "Negocios", duracion: "4–5 años", modalidad: "Híbrido", demanda: "Alta", descripcion: "Aprendés a gestionar organizaciones, recursos y personas para que todo funcione bien.", queHace: "Planificás, organizás equipos, analizás números y tomás decisiones estratégicas.", tags: ["negocio","logica","equipo","largo","analisis","liderazgo"] },
  { id: "contabilidad", nombre: "Contabilidad / Contador Público", emoji: "📋", rubro: "Negocios / Finanzas", duracion: "4–5 años", modalidad: "Presencial / Híbrido", demanda: "Alta", descripcion: "Llevás las cuentas de empresas y personas para que no tengan problemas legales ni financieros.", queHace: "Hacés balances, declaraciones impositivas y asesorás sobre cómo manejar el dinero.", tags: ["negocio","logica","analisis","solo","largo","numeros"] },
  { id: "comercio_exterior", nombre: "Comercio Exterior / Aduanas", emoji: "🚢", rubro: "Negocios / Internacional", duracion: "3–4 años", modalidad: "Presencial / Híbrido", demanda: "Media", descripcion: "Trabajás en el comercio entre países, importaciones, exportaciones y trámites aduaneros.", queHace: "Gestionás documentos, negociás con proveedores internacionales y conocés leyes de comercio.", tags: ["negocio","logica","equipo","largo","internacional","analisis"] },
  { id: "rrhh", nombre: "Recursos Humanos", emoji: "👥", rubro: "Negocios", duracion: "3–4 años", modalidad: "Presencial / Híbrido", demanda: "Media", descripcion: "Trabajás con las personas dentro de una empresa: los contratás, capacitás y acompañás.", queHace: "Hacés entrevistas, gestionás sueldos, resolvés conflictos y creás un buen ambiente laboral.", tags: ["negocio","ayudar","equipo","largo","empatia","comunicacion","liderazgo"] },
  { id: "turismo", nombre: "Turismo y Hotelería", emoji: "✈️", rubro: "Turismo / Servicios", duracion: "3–4 años", modalidad: "Presencial", demanda: "Media", descripcion: "Trabajás en hoteles, agencias de viajes o en la organización de experiencias turísticas.", queHace: "Atendés turistas, organizás paquetes de viaje, gestionás reservas y liderás equipos de servicio.", tags: ["servicios","equipo","presencial","largo","comunicacion","viajes","ayudar"] },

  // INGENIERÍA Y ARQUITECTURA
  { id: "arquitectura", nombre: "Arquitectura", emoji: "🏗️", rubro: "Ingeniería / Arte", duracion: "5–6 años", modalidad: "Presencial / Híbrido", demanda: "Media", descripcion: "Diseñás edificios, casas y espacios que la gente va a habitar.", queHace: "Hacés planos, te reunís con clientes, supervisás obras y combinás creatividad con técnica.", tags: ["diseño","creatividad","arte","crear","largo","muylargo","manual","logica"] },
  { id: "ing_civil", nombre: "Ingeniería Civil", emoji: "🌉", rubro: "Ingeniería", duracion: "5 años", modalidad: "Presencial", demanda: "Alta", descripcion: "Diseñás y construís puentes, rutas, edificios y la infraestructura que sostiene todo.", queHace: "Calculás estructuras, supervisás obras y resolvés problemas técnicos de construcción.", tags: ["logica","manual","crear","equipo","presencial","muylargo","numeros","ciencia"] },
  { id: "ing_electronica", nombre: "Ingeniería Electrónica", emoji: "⚡", rubro: "Ingeniería / Tecnología", duracion: "5 años", modalidad: "Presencial / Híbrido", demanda: "Alta", descripcion: "Diseñás y reparás circuitos, dispositivos electrónicos y sistemas automatizados.", queHace: "Trabajás con hardware, diseñás placas, programás microcontroladores y resolvés fallas.", tags: ["tecnologia","logica","manual","crear","largo","numeros","ciencia"] },
  { id: "ing_mecanica", nombre: "Ingeniería Mecánica", emoji: "⚙️", rubro: "Ingeniería", duracion: "5 años", modalidad: "Presencial", demanda: "Alta", descripcion: "Diseñás máquinas, motores y sistemas mecánicos para la industria.", queHace: "Hacés planos de piezas, supervisás su fabricación y mejorás procesos productivos.", tags: ["logica","manual","crear","equipo","presencial","muylargo","numeros","ciencia"] },
  { id: "ing_industrial", nombre: "Ingeniería Industrial", emoji: "🏭", rubro: "Ingeniería / Negocios", duracion: "5 años", modalidad: "Presencial / Híbrido", demanda: "Alta", descripcion: "Optimizás procesos en fábricas y empresas para que sean más eficientes.", queHace: "Analizás cómo se producen las cosas y buscás cómo hacerlo mejor, más rápido y más barato.", tags: ["logica","equipo","negocio","analisis","largo","muylargo","numeros","liderazgo"] },
  { id: "ing_agronomo", nombre: "Ingeniería Agronómica", emoji: "🌾", rubro: "Ciencias Agrarias", duracion: "5 años", modalidad: "Presencial", demanda: "Alta", descripcion: "Trabajás en el campo aplicando ciencia para mejorar los cultivos y la producción agropecuaria.", queHace: "Asesorás productores, analizás suelos, diseñás planes de siembra y gestionás explotaciones.", tags: ["naturaleza","ciencia","analisis","logica","presencial","muylargo","campo"] },

  // OFICIOS Y TÉCNICAS
  { id: "electricidad", nombre: "Electricidad / Instalaciones Eléctricas", emoji: "🔌", rubro: "Oficios", duracion: "1–2 años", modalidad: "Presencial", demanda: "Muy alta", descripcion: "Instalás, reparás y mantenés todo lo eléctrico en casas, negocios e industrias.", queHace: "Hacés instalaciones, resolvés fallas eléctricas y trabajás con las manos todos los días.", tags: ["manual","logica","solo","presencial","corto","tecnico","independiente"] },
  { id: "plomeria", nombre: "Plomería / Gas", emoji: "🔧", rubro: "Oficios", duracion: "1 año", modalidad: "Presencial", demanda: "Muy alta", descripcion: "Instalás y reparás cañerías de agua, gas y calefacción.", queHace: "Resolvés pérdidas, instalás calefones, ponés cañerías nuevas y hacés mantenimiento.", tags: ["manual","solo","presencial","corto","tecnico","independiente"] },
  { id: "construccion", nombre: "Construcción / Albañilería", emoji: "🧱", rubro: "Oficios / Construcción", duracion: "6 meses–1 año", modalidad: "Presencial", demanda: "Muy alta", descripcion: "Construís casas, locales y edificios. Siempre hay obra en todos lados.", queHace: "Levantás paredes, colocás pisos, revoques y trabajás en equipo en distintas obras.", tags: ["manual","equipo","presencial","corto","tecnico","campo"] },
  { id: "mecanica", nombre: "Mecánica de Autos / Motos", emoji: "🚗", rubro: "Oficios / Automotriz", duracion: "1–2 años", modalidad: "Presencial", demanda: "Alta", descripcion: "Reparás y mantenés vehículos. Siempre hay autos para arreglar.", queHace: "Diagnosticás fallas, cambiás piezas, hacés service y dejás los autos funcionando.", tags: ["manual","logica","solo","presencial","corto","tecnico","independiente"] },
  { id: "carpinteria", nombre: "Carpintería / Mueblería", emoji: "🪵", rubro: "Oficios", duracion: "1–2 años", modalidad: "Presencial / Freelance", demanda: "Alta", descripcion: "Trabajás la madera para hacer muebles, aberturas, decks y objetos únicos.", queHace: "Usás herramientas para cortar, ensamblar y terminar piezas de madera a medida.", tags: ["manual","crear","solo","presencial","corto","arte","independiente"] },
  { id: "soldadura", nombre: "Soldadura Industrial", emoji: "🔥", rubro: "Oficios / Industria", duracion: "6 meses–1 año", modalidad: "Presencial", demanda: "Muy alta", descripcion: "Unís metales para construir estructuras, maquinaria y piezas industriales.", queHace: "Trabajás con equipos de soldar, cortás y unís metales según planos técnicos.", tags: ["manual","solo","presencial","corto","tecnico","industria"] },
  { id: "jardineria", nombre: "Jardinería / Paisajismo", emoji: "🌿", rubro: "Oficios / Naturaleza", duracion: "6 meses–1 año", modalidad: "Presencial / Freelance", demanda: "Media", descripcion: "Diseñás y cuidás jardines, parques y espacios verdes.", queHace: "Plantás, podás, regás y creás diseños de jardines para casas y empresas.", tags: ["naturaleza","manual","crear","solo","presencial","corto","independiente"] },
  { id: "estetica", nombre: "Estética / Cosmetología", emoji: "💅", rubro: "Belleza / Servicios", duracion: "1–2 años", modalidad: "Presencial / Freelance", demanda: "Alta", descripcion: "Trabajás en tratamientos de belleza, piel, uñas y bienestar personal.", queHace: "Hacés tratamientos faciales, manicura, depilación y asesorás sobre cuidado de la piel.", tags: ["ayudar","manual","presencial","corto","independiente","empatia","servicios"] },
  { id: "peluqueria", nombre: "Peluquería / Barbería", emoji: "💇", rubro: "Belleza / Oficios", duracion: "6 meses–1 año", modalidad: "Presencial / Freelance", demanda: "Alta", descripcion: "Cortás, teñís y estilizás el cabello. Siempre hay clientes nuevos.", queHace: "Atendés clientes, hacés cortes, peinados y tratamientos de cabello.", tags: ["manual","crear","presencial","corto","independiente","servicios","empatia"] },

  // GASTRONOMÍA
  { id: "gastronomia", nombre: "Gastronomía / Chef", emoji: "🍳", rubro: "Gastronomía", duracion: "2–3 años", modalidad: "Presencial", demanda: "Alta", descripcion: "Creás platos, menúes y experiencias culinarias en restaurantes, hoteles o tu propio negocio.", queHace: "Cocinás, creás recetas, organizás la cocina y aprendés técnicas de todo el mundo.", tags: ["creatividad","manual","crear","equipo","presencial","largo","pasion","independiente"] },
  { id: "pasteleria", nombre: "Pastelería y Panadería", emoji: "🎂", rubro: "Gastronomía / Oficios", duracion: "1–2 años", modalidad: "Presencial / Freelance", demanda: "Alta", descripcion: "Hacés tortas, panes, dulces y postres que hacen feliz a la gente.", queHace: "Preparás masas, decorás tortas, creás recetas propias y podés emprender desde casa.", tags: ["creatividad","manual","crear","solo","presencial","corto","independiente","pasion"] },
  { id: "bartender", nombre: "Bartender / Mixología", emoji: "🍹", rubro: "Gastronomía / Servicios", duracion: "6 meses", modalidad: "Presencial", demanda: "Media", descripcion: "Creás tragos y coctelería para bares, hoteles y eventos.", queHace: "Preparás bebidas, atendés clientes, creás nuevas recetas y trabajás en ambientes sociales.", tags: ["creatividad","manual","crear","equipo","presencial","corto","servicios"] },

  // CIENCIAS EXACTAS Y NATURALES
  { id: "biologia", nombre: "Biología / Ciencias Naturales", emoji: "🔬", rubro: "Ciencias", duracion: "5 años", modalidad: "Presencial", demanda: "Media", descripcion: "Estudiás los seres vivos, el medio ambiente y podés trabajar en investigación, educación o industria.", queHace: "Hacés experimentos, investigás, enseñás o trabajás en laboratorios y empresas.", tags: ["ciencia","analisis","investigacion","naturaleza","largo","solo"] },
  { id: "quimica", nombre: "Química / Bioquímica", emoji: "⚗️", rubro: "Ciencias", duracion: "5 años", modalidad: "Presencial", demanda: "Media", descripcion: "Trabajás con sustancias, reacciones y procesos químicos en laboratorios o industrias.", queHace: "Hacés análisis, desarrollás productos, controlás calidad y hacés investigación.", tags: ["ciencia","analisis","logica","investigacion","presencial","muylargo","numeros"] },
  { id: "matematica", nombre: "Matemática / Estadística", emoji: "🔢", rubro: "Ciencias Exactas", duracion: "4–5 años", modalidad: "Presencial / Híbrido", demanda: "Alta", descripcion: "Aplicás la matemática para resolver problemas reales en finanzas, tecnología y ciencias.", queHace: "Modelás situaciones, hacés cálculos complejos y enseñás o asesorás en distintos sectores.", tags: ["ciencia","logica","analisis","solo","largo","numeros","investigacion"] },

  // DEPORTE Y ACTIVIDAD FÍSICA
  { id: "educacion_fisica", nombre: "Educación Física / Profesorado", emoji: "🏃", rubro: "Deporte / Educación", duracion: "3–4 años", modalidad: "Presencial", demanda: "Media", descripcion: "Enseñás movimiento, deportes y hábitos saludables en escuelas, clubes o de forma independiente.", queHace: "Dás clases, entrenás grupos, diseñás rutinas y promovés la actividad física.", tags: ["deporte","ayudar","equipo","presencial","largo","empatia","educacion"] },
  { id: "entrenador", nombre: "Entrenador Personal / Fitness", emoji: "💪", rubro: "Deporte / Bienestar", duracion: "6 meses–1 año", modalidad: "Presencial / Freelance", demanda: "Alta", descripcion: "Entrenás personas individualmente para que alcancen sus metas físicas.", queHace: "Diseñás rutinas personalizadas, motivás, controlás el progreso y enseñás técnicas.", tags: ["deporte","ayudar","solo","presencial","corto","empatia","independiente"] },

  // MODA Y TEXTIL
  { id: "diseño_moda", nombre: "Diseño de Modas / Indumentaria", emoji: "👗", rubro: "Moda / Diseño", duracion: "3–4 años", modalidad: "Presencial / Freelance", demanda: "Media", descripcion: "Creás ropa, accesorios y colecciones que la gente usa y ama.", queHace: "Diseñás prendas, hacés patrones, supervisás confección y armás colecciones.", tags: ["creatividad","diseño","arte","crear","largo","independiente","pasion"] },
  { id: "costura", nombre: "Costura / Sastrería", emoji: "🧵", rubro: "Moda / Oficios", duracion: "6 meses–1 año", modalidad: "Presencial / Freelance", demanda: "Media", descripcion: "Confeccionás y reparás ropa a medida para clientes particulares o empresas.", queHace: "Tomás medidas, cortás tela, cosés y entregás prendas perfectas para cada persona.", tags: ["manual","crear","solo","presencial","corto","independiente","arte"] },

  // IDIOMAS Y CULTURA
  { id: "traduccion", nombre: "Traducción / Interpretación", emoji: "🌐", rubro: "Idiomas / Comunicación", duracion: "4 años", modalidad: "Remoto / Freelance", demanda: "Media", descripcion: "Traducís documentos, libros, páginas web o interpretás en reuniones internacionales.", queHace: "Trabajás con idiomas en proyectos de todo tipo desde cualquier lugar del mundo.", tags: ["comunicacion","idiomas","solo","remoto","largo","arte"] },

  // AGROPECUARIO
  { id: "veterinaria_campo", nombre: "Veterinaria Rural / Producción Animal", emoji: "🐄", rubro: "Agropecuario / Salud Animal", duracion: "5–6 años", modalidad: "Presencial / Campo", demanda: "Alta", descripcion: "Trabajás con animales de granja y producción, en el campo o en feedlots.", queHace: "Sanitizás animales, asesorás productores y gestionás la salud de haciendas enteras.", tags: ["salud","animales","naturaleza","campo","presencial","muylargo","ciencia"] },
  { id: "tecnico_agropecuario", nombre: "Técnico Agropecuario", emoji: "🌱", rubro: "Agropecuario", duracion: "3 años", modalidad: "Presencial / Campo", demanda: "Alta", descripcion: "Gestionás establecimientos agropecuarios, cultivos y producción en el campo.", queHace: "Manejás maquinaria, asesorás en cultivos, llevás registros y coordinás tareas rurales.", tags: ["naturaleza","campo","manual","logica","presencial","largo","ciencia"] },

  // TRANSPORTE Y LOGÍSTICA
  { id: "logistica", nombre: "Logística y Distribución", emoji: "📦", rubro: "Transporte / Negocios", duracion: "1–2 años", modalidad: "Presencial / Híbrido", demanda: "Alta", descripcion: "Organizás cómo los productos llegan desde las fábricas hasta los clientes.", queHace: "Coordinás rutas, gestionás depósitos, hacés seguimiento de envíos y optimizás tiempos.", tags: ["negocio","logica","equipo","presencial","corto","analisis","liderazgo"] },

  // SEGURIDAD
  { id: "seguridad_privada", nombre: "Seguridad Privada", emoji: "🛡️", rubro: "Seguridad", duracion: "6 meses", modalidad: "Presencial", demanda: "Alta", descripcion: "Protegés personas, instalaciones y bienes en empresas, eventos y propiedades privadas.", queHace: "Vigilás, controlás accesos, respondés ante incidentes y generás reportes.", tags: ["presencial","equipo","corto","independiente","fisico"] },

  // ECOLOGÍA Y MEDIO AMBIENTE
  { id: "medio_ambiente", nombre: "Gestión Ambiental / Ecología", emoji: "♻️", rubro: "Ciencias / Medio Ambiente", duracion: "4–5 años", modalidad: "Presencial / Campo", demanda: "Media", descripcion: "Trabajás para proteger el medio ambiente y gestionar los recursos naturales de forma responsable.", queHace: "Hacés estudios de impacto ambiental, asesorás empresas y trabajás con organismos públicos.", tags: ["naturaleza","ciencia","analisis","investigacion","largo","campo"] },
];

// ─────────────────────────────────────────────
// 7 INICIOS DE CHARLA DISTINTOS
// ─────────────────────────────────────────────
const CHAT_OPENERS = [
  {
    id: "opener_1",
    mensaje: "¡Hola! 👋 Soy Flow, tu guía vocacional. Antes de arrancar con las preguntas, quiero que sepas algo: no hay respuestas buenas ni malas acá, solo tuyas. Así que tranqui, respirá y respondé lo que te salga. ¿Listo para descubrir tu camino?",
    opciones: ["¡Sí, arrancamos!", "Un poco nervioso, pero dale", "No sé si esto me va a servir"]
  },
  {
    id: "opener_2",
    mensaje: "¡Buenas! 🙌 Me alegra que estés acá. Sé que elegir qué estudiar puede ser una presión enorme, pero tranqui — a la mayoría le pasa. Voy a hacerte unas preguntas para conocerte mejor y ayudarte a encontrar algo que te haga sentido. ¿Empezamos?",
    opciones: ["¡Dale, empecemos!", "Sí, aunque no sé por dónde empezar", "Tengo algunas ideas pero quiero confirmarlas"]
  },
  {
    id: "opener_3",
    mensaje: "¡Hey! 👋 ¿Sabés qué es lo más difícil de elegir una carrera? Que nadie te enseña cómo hacerlo. Pero por eso estoy acá. Vamos a charlar un rato, te hago algunas preguntas, y juntos encontramos opciones que encajen con vos. ¿Cómo estás llegando a esta decisión?",
    opciones: ["Con mucha presión, la verdad", "Bastante tranquilo/a", "Confundido/a, no sé ni por dónde empezar"]
  },
  {
    id: "opener_4",
    mensaje: "¡Hola! Soy Flow 🌟 y mi trabajo es ayudarte a encontrar tu camino — sin presiones, sin respuestas correctas e incorrectas. Solo vamos a charlar para conocerte mejor. ¿Cuánto tiempo llevas pensando en esto de qué estudiar?",
    opciones: ["Hace mucho tiempo, ya me cansa", "Recién estoy empezando a pensarlo", "Me lo preguntan tanto que ya no sé"]
  },
  {
    id: "opener_5",
    mensaje: "¡Buenas! 😊 Antes de empezar con las preguntas, quiero preguntarte algo simple: cuando imaginás tu vida en unos años, ¿qué es lo primero que aparece? No tiene que ser una carrera ni un trabajo puntual, cualquier imagen vale.",
    opciones: ["Me veo viajando o con libertad", "Me veo con estabilidad y plata", "Me veo haciendo algo que me apasione", "Honestamente no tengo idea"]
  },
  {
    id: "opener_6",
    mensaje: "¡Hola! Qué bueno que estés acá 🙂 Elegir una carrera es una de esas decisiones que parece gigante, pero te prometo que es más manejable de lo que parece. Vamos paso a paso. ¿Hay algo que ya descartaste, algo que sabés que definitivamente NO querés hacer?",
    opciones: ["Sí, varias cosas", "No descarto nada todavía", "Más o menos, algunas cosas"]
  },
  {
    id: "opener_7",
    mensaje: "¡Hola! 👋 Soy Flow. Vamos directo al grano: ¿cómo describirías tu relación con el estudio? Esto no es para juzgarte, es para entender cómo aprendés mejor.",
    opciones: ["Me cuesta pero cuando me interesa algo lo banco", "Me va bastante bien si me gusta el tema", "Prefiero aprender haciendo, no leyendo", "El estudio no es lo mío, prefiero lo práctico"]
  },
];

// ─────────────────────────────────────────────
// 10 PREGUNTAS CON OPCIONES
// ─────────────────────────────────────────────
const QUESTIONS = [
  {
    id: "q1",
    texto: "Cuando tenés tiempo libre y podés hacer lo que quieras, ¿qué termina pasando normalmente?",
    opciones: [
      { texto: "Creo algo: dibujo, escribo, edito videos, hago música...", tags: ["creatividad","arte","crear"] },
      { texto: "Juego, veo series o me entretengo con tecnología", tags: ["tecnologia","ocio"] },
      { texto: "Salgo, me junto con gente, socializo", tags: ["equipo","comunicacion","servicios"] },
      { texto: "Me quedo tranquilo/a, leo o pienso solo/a", tags: ["solo","analisis","investigacion"] },
      { texto: "Hago algo físico: deporte, manualidades, cocino", tags: ["manual","deporte","crear","pasion"] },
    ]
  },
  {
    id: "q2",
    texto: "¿Cómo te llevas con la tecnología y las computadoras?",
    opciones: [
      { texto: "Me encanta, paso horas en la compu y me resulta fácil", tags: ["tecnologia","logica"] },
      { texto: "La uso bastante, no me complica", tags: ["tecnologia"] },
      { texto: "Lo justo y necesario, no es mi fuerte", tags: [] },
      { texto: "Prefiero el trabajo físico o con personas", tags: ["manual","equipo","presencial"] },
    ]
  },
  {
    id: "q3",
    texto: "Cuando tenés un problema complicado delante tuyo, ¿qué hacés?",
    opciones: [
      { texto: "Me pongo a analizarlo hasta encontrar la solución", tags: ["logica","analisis","investigacion"] },
      { texto: "Busco ayuda o lo hablo con alguien", tags: ["equipo","comunicacion"] },
      { texto: "Lo intuyo, confío en mi instinto", tags: ["creatividad","pasion"] },
      { texto: "Aprendo haciéndolo, prueba y error", tags: ["manual","tecnico"] },
    ]
  },
  {
    id: "q4",
    texto: "¿Cómo preferís trabajar en el día a día?",
    opciones: [
      { texto: "Solo/a, a mi ritmo y sin interrupciones", tags: ["solo","remoto","independiente"] },
      { texto: "En equipo, me gusta coordinar y colaborar", tags: ["equipo","liderazgo","comunicacion"] },
      { texto: "Con poca gente, relaciones cercanas", tags: ["equipo","empatia"] },
      { texto: "Depende del proyecto, me adapto", tags: ["equipo","solo"] },
    ]
  },
  {
    id: "q5",
    texto: "Si tuvieras que elegir, ¿qué te genera más satisfacción?",
    opciones: [
      { texto: "Ayudar a alguien que lo necesita", tags: ["ayudar","empatia","salud","educacion","social"] },
      { texto: "Crear algo de la nada: un producto, una idea, un proyecto", tags: ["creatividad","crear","arte","diseño"] },
      { texto: "Resolver un problema técnico o lógico", tags: ["logica","analisis","tecnologia","ciencia"] },
      { texto: "Ganar plata o lograr resultados concretos", tags: ["negocio","independiente","liderazgo"] },
      { texto: "Aprender algo nuevo o investigar", tags: ["investigacion","ciencia","analisis"] },
    ]
  },
  {
    id: "q6",
    texto: "¿Cómo te imaginás trabajando dentro de unos años? Pensá en el ambiente, no en la carrera.",
    opciones: [
      { texto: "Desde casa o donde quiera, con libertad", tags: ["remoto","independiente","freelance"] },
      { texto: "En una oficina o empresa, con estructura", tags: ["presencial","negocio","equipo"] },
      { texto: "En contacto con la gente todo el día: clientes, pacientes, alumnos", tags: ["presencial","equipo","ayudar","servicios"] },
      { texto: "En exteriores, en el campo o en movimiento", tags: ["campo","naturaleza","manual","presencial"] },
      { texto: "En un taller, laboratorio o espacio técnico", tags: ["manual","tecnico","ciencia","presencial"] },
    ]
  },
  {
    id: "q7",
    texto: "¿Cuántos años estás dispuesto/a a estudiar antes de trabajar?",
    opciones: [
      { texto: "Lo antes posible, quiero trabajar pronto (menos de 1 año)", tags: ["corto"] },
      { texto: "Hasta 2 años, algo rápido pero con salida", tags: ["corto"] },
      { texto: "Entre 3 y 4 años, una carrera normal", tags: ["largo"] },
      { texto: "Lo que haga falta si es algo que me apasiona", tags: ["largo","muylargo","pasion"] },
    ]
  },
  {
    id: "q8",
    texto: "¿Qué pensás sobre emprender y tener tu propio negocio algún día?",
    opciones: [
      { texto: "Es mi sueño, quiero trabajar para mí", tags: ["independiente","negocio","liderazgo","emprendimiento"] },
      { texto: "Me gustaría, pero más adelante con experiencia", tags: ["negocio","liderazgo"] },
      { texto: "Prefiero tener un trabajo estable y en relación de dependencia", tags: ["equipo","negocio"] },
      { texto: "No me llama la atención, prefiero ser experto en algo", tags: ["solo","analisis","tecnico"] },
    ]
  },
  {
    id: "q9",
    texto: "De las siguientes, ¿qué tipo de actividades te resultan más naturales o disfrutás más?",
    opciones: [
      { texto: "Hablar, convencer, presentar ideas a otros", tags: ["comunicacion","liderazgo","negocio"] },
      { texto: "Trabajar con mis manos, construir o reparar", tags: ["manual","tecnico","oficios"] },
      { texto: "Cuidar o acompañar a otras personas", tags: ["ayudar","empatia","salud","educacion"] },
      { texto: "Leer, escribir, investigar", tags: ["investigacion","analisis","comunicacion","arte"] },
      { texto: "Organizar, planificar y que todo funcione bien", tags: ["logica","negocio","liderazgo","analisis"] },
    ]
  },
  {
    id: "q10",
    texto: "Por último: si no hubiera limitaciones de ningún tipo — ni plata, ni presión familiar, ni nada — ¿con qué te animarías a probar?",
    opciones: [
      { texto: "Algo artístico o creativo", tags: ["creatividad","arte","crear","diseño","pasion"] },
      { texto: "Algo que tenga impacto en la sociedad o en las personas", tags: ["ayudar","social","educacion","salud","empatia"] },
      { texto: "Algo tecnológico o científico", tags: ["tecnologia","ciencia","logica","investigacion"] },
      { texto: "Montar mi propio negocio o proyecto", tags: ["negocio","independiente","liderazgo","emprendimiento"] },
      { texto: "Un oficio o trabajo práctico donde ver resultados rápido", tags: ["manual","tecnico","corto","independiente"] },
    ]
  },
];

// ─────────────────────────────────────────────
// MOTOR DE MATCHING
// ─────────────────────────────────────────────

/**
 * Calcula el score de cada carrera en base a los tags acumulados del usuario.
 * @param {string[]} userTags - Tags acumulados de las respuestas del usuario
 * @returns {Array} - Carreras ordenadas por score descendente
 */
function calcularMatching(userTags) {
  const tagCount = {};
  userTags.forEach(tag => { tagCount[tag] = (tagCount[tag] || 0) + 1; });

  const scored = CAREERS.map(career => {
    let score = 0;
    let matches = 0;
    career.tags.forEach(tag => {
      if (tagCount[tag]) {
        score += tagCount[tag];
        matches++;
      }
    });
    // Porcentaje de afinidad: matches sobre total de tags de la carrera
    const affinity = career.tags.length > 0
      ? Math.round((matches / career.tags.length) * 100)
      : 0;
    // Score ponderado
    const weightedScore = score * 2 + affinity;
    return { ...career, score: weightedScore, affinity };
  });

  // Ordenar por score y filtrar las que tengan al menos alguna coincidencia
  return scored
    .filter(c => c.score > 0)
    .sort((a, b) => b.score - a.score);
}

/**
 * Genera los 3 mejores resultados con porcentajes de match
 * @param {string[]} userTags
 * @returns {Array}
 */
function getTopCareers(userTags) {
  const sorted = calcularMatching(userTags);
  const top = sorted.slice(0, 3);

  // Calcular porcentajes relativos (top 1 = entre 85-95, top 2 = 10 menos, top 3 = 10 menos)
  if (top.length === 0) return [];

  const maxScore = top[0].score;
  return top.map((c, i) => {
    const base = 90 - (i * 8);
    const variation = Math.round((c.score / maxScore) * 5);
    const match = Math.min(97, Math.max(65, base + variation - i));
    return { ...c, match };
  });
}

module.exports = { CAREERS, QUESTIONS, CHAT_OPENERS, calcularMatching, getTopCareers };
