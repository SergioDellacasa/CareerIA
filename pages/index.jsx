export default function Home() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="/css/main.css" />

      {/* NAV */}
      <nav id="main-nav">
        <div className="nav-inner">
          <div className="logo">Career<span className="accent">Flow</span><span className="by"> by NM dev</span></div>
          <ul className="nav-links">
            <li><a href="#como-funciona">Cómo funciona</a></li>
            <li><a href="#carreras">Carreras</a></li>
          </ul>
          <button className="btn-nav" onClick={() => window.CF && window.CF.startChat()}>Empezar gratis →</button>
        </div>
      </nav>

      {/* LANDING */}
      <section id="screen-landing" className="screen active">
        <div className="hero-wrap">
          <div className="orbs" aria-hidden="true">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
          </div>
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              IA conversacional · Orientación vocacional real
            </div>
            <h1 className="hero-title">
              No todos saben qué estudiar.<br />
              <span className="gradient-text">Y eso está bien.</span>
            </h1>
            <p className="hero-sub">
              Career Flow conversa con vos, analiza tu personalidad, intereses y estilo de vida,
              y te muestra caminos reales adaptados a quién sos.
            </p>
            <div className="hero-btns">
              <button className="btn-primary" onClick={() => window.CF && window.CF.startChat()}>Descubrir mi camino →</button>
              <button className="btn-secondary" onClick={() => window.CF && window.CF.scrollTo('como-funciona')}>Cómo funciona</button>
            </div>
            <div className="hero-stats">
              <div className="stat"><span className="stat-num">10k+</span><span className="stat-lbl">Jóvenes orientados</span></div>
              <div className="stat"><span className="stat-num">100+</span><span className="stat-lbl">Carreras analizadas</span></div>
              <div className="stat"><span className="stat-num">95%</span><span className="stat-lbl">Satisfacción</span></div>
            </div>
          </div>
        </div>

        <div className="section-divider"></div>
        <div className="section" id="como-funciona">
          <p className="sec-label">Proceso</p>
          <h2 className="sec-title">Simple, profundo y personalizado</h2>
          <p className="sec-desc">Una experiencia que combina IA avanzada con psicología vocacional real. No hay preguntas predefinidas — la IA se adapta a vos.</p>
          <div className="steps-grid">
            <div className="step-card"><div className="step-icon">💬</div><div className="step-num">01</div><h3>Conversás con la IA</h3><p>Respondés preguntas naturales sobre tu vida, intereses y sueños. La IA recuerda todo y adapta cada pregunta.</p></div>
            <div className="step-card"><div className="step-icon">🧠</div><div className="step-num">02</div><h3>La IA te analiza</h3><p>Detecta tu personalidad, fortalezas, estilo de trabajo y potencial. Considera aspectos que quizás no habías pensado.</p></div>
            <div className="step-card"><div className="step-icon">✨</div><div className="step-num">03</div><h3>Recibís tu perfil real</h3><p>Un perfil completamente personalizado con carreras afines, salidas laborales y un mapa claro de tu camino.</p></div>
          </div>
        </div>

        <div className="section-divider"></div>
        <div className="section" id="carreras">
          <p className="sec-label">Explorar</p>
          <h2 className="sec-title">Un mundo de posibilidades</h2>
          <p className="sec-desc">Desde oficios hasta carreras del futuro. La IA considera todas las opciones según tu perfil único.</p>
          <div className="careers-grid">
            {[
              {e:'🎨',n:'UX/UI Design',d:'Diseñás experiencias digitales',t1:'Remoto',t2:'Alta demanda',s:'$800–$2.500 USD/mes',c1:'p',c2:'b'},
              {e:'💻',n:'Programación',d:'Creás software y sistemas',t1:'Remoto',t2:'Muy alta demanda',s:'$1.000–$5.000 USD/mes',c1:'p',c2:'g'},
              {e:'📊',n:'Data Analytics',d:'Analizás datos para decisiones',t1:'Híbrido',t2:'Alta demanda',s:'$900–$3.000 USD/mes',c1:'b',c2:'g'},
              {e:'🔒',n:'Ciberseguridad',d:'Protegés sistemas digitales',t1:'Remoto',t2:'Muy alta demanda',s:'$1.200–$4.000 USD/mes',c1:'p',c2:'g'},
              {e:'🧠',n:'Psicología',d:'Acompañás el bienestar mental',t1:'Presencial',t2:'Media demanda',s:'$400–$1.500 USD/mes',c1:'p',c2:'b'},
              {e:'🎬',n:'Producción Audiovisual',d:'Creás contenido visual',t1:'Freelance',t2:'Alta demanda',s:'$600–$2.000 USD/mes',c1:'b',c2:'b'},
              {e:'⚡',n:'Electricidad',d:'Instalás sistemas eléctricos',t1:'Presencial',t2:'Muy demandado',s:'$500–$1.800 USD/mes',c1:'g',c2:'g'},
              {e:'🍳',n:'Gastronomía',d:'Creás experiencias culinarias',t1:'Presencial',t2:'Media demanda',s:'$400–$1.500 USD/mes',c1:'b',c2:'b'},
              {e:'📱',n:'Marketing Digital',d:'Gestionás marcas online',t1:'Remoto',t2:'Alta demanda',s:'$500–$2.000 USD/mes',c1:'p',c2:'b'},
              {e:'🏗️',n:'Arquitectura',d:'Diseñás espacios y edificios',t1:'Híbrido',t2:'Media demanda',s:'$600–$2.500 USD/mes',c1:'b',c2:'b'},
              {e:'🐾',n:'Veterinaria',d:'Cuidás la salud animal',t1:'Presencial',t2:'Media demanda',s:'$500–$1.800 USD/mes',c1:'b',c2:'b'},
              {e:'🔧',n:'Mecánica',d:'Reparás vehículos y maquinaria',t1:'Presencial',t2:'Muy demandado',s:'$500–$1.600 USD/mes',c1:'g',c2:'g'},
            ].map((c,i) => (
              <div key={i} className="career-card" onClick={() => window.CF && window.CF.startChat()}>
                <span className="ce">{c.e}</span>
                <strong>{c.n}</strong>
                <p>{c.d}</p>
                <div className="ctags">
                  <span className={`tag tag-${c.c1}`}>{c.t1}</span>
                  <span className={`tag tag-${c.c2}`}>{c.t2}</span>
                </div>
                <div className="salary">{c.s}</div>
              </div>
            ))}
          </div>
          <div style={{textAlign:'center',marginTop:'28px'}}>
            <button className="btn-secondary" onClick={() => window.CF && window.CF.startChat()}>Ver mi carrera ideal personalizada →</button>
          </div>
        </div>

        <div className="section-divider"></div>
        <div className="section">
          <p className="sec-label">Historias reales</p>
          <h2 className="sec-title">Jóvenes que encontraron su camino</h2>
          <div className="tests-grid">
            <div className="test-card"><div className="quote-mark">"</div><p>Estaba perdida entre Psicología y Diseño. La IA fue haciendo preguntas hasta que entendí sola que lo mío era UX. Hoy diseño apps desde mi casa.</p><div className="test-author"><div className="tav" style={{background:'linear-gradient(135deg,#6C63FF,#A855F7)'}}>VL</div><div><div className="stars">★★★★★</div><strong>Valentina López</strong><span>UX Designer · 22 años</span></div></div></div>
            <div className="test-card"><div className="quote-mark">"</div><p>Pensé que la tecnología no era para mí. La IA me explicó que programar es creatividad y lógica, no solo matemática. Hoy soy desarrollador.</p><div className="test-author"><div className="tav" style={{background:'linear-gradient(135deg,#00D4FF,#10B981)'}}>MR</div><div><div className="stars">★★★★★</div><strong>Matías Rodríguez</strong><span>Dev Backend · 24 años</span></div></div></div>
            <div className="test-card"><div className="quote-mark">"</div><p>Mi familia quería que estudiara abogacía. Career Flow me ayudó a elegir Gastronomía. Hoy tengo mi propio catering y soy feliz.</p><div className="test-author"><div className="tav" style={{background:'linear-gradient(135deg,#F59E0B,#EF4444)'}}>LG</div><div><div className="stars">★★★★★</div><strong>Lucía García</strong><span>Chef & Emprendedora · 26 años</span></div></div></div>
          </div>
        </div>

        <div className="section-divider"></div>
        <div className="section">
          <p className="sec-label">FAQ</p>
          <h2 className="sec-title">Lo que todos preguntan</h2>
          <div className="faq-list" id="faq-list">
            {[
              {q:'¿Cuánto tiempo lleva?',a:'Entre 8 y 15 minutos. La IA adapta la cantidad de preguntas según lo que contás.'},
              {q:'¿Es gratis?',a:'Sí, completamente gratuito. No necesitás crear una cuenta ni dejar datos personales.'},
              {q:'¿La IA siempre hace las mismas preguntas?',a:'No. La IA es conversacional y se adapta a lo que vos respondés. Cada experiencia es única.'},
              {q:'¿Qué pasa si no me gusta el resultado?',a:'Podés repetirlo cuantas veces quieras. El resultado incluye varias opciones ordenadas por afinidad.'},
              {q:'¿Mis datos son seguros?',a:'Sí. La conversación se procesa de forma anónima y no almacenamos información personal.'},
            ].map((f,i) => (
              <div key={i} className="faq-item">
                <button className="faq-q" aria-expanded="false" onClick={e => {
                  const btn = e.currentTarget;
                  const ans = btn.nextElementSibling;
                  const open = btn.getAttribute('aria-expanded') === 'true';
                  document.querySelectorAll('.faq-q').forEach(b => { b.setAttribute('aria-expanded','false'); if(b.nextElementSibling) b.nextElementSibling.hidden = true; });
                  if(!open){ btn.setAttribute('aria-expanded','true'); ans.hidden = false; }
                }}>
                  {f.q} <span className="faq-arrow">↓</span>
                </button>
                <div className="faq-a" hidden><p>{f.a}</p></div>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <div className="cta-box">
            <h2>Tu futuro empieza con una conversación</h2>
            <p>Miles de jóvenes ya encontraron su camino. ¿Cuándo empezás vos?</p>
            <button className="btn-primary btn-lg" onClick={() => window.CF && window.CF.startChat()}>Empezar ahora, es gratis →</button>
          </div>
        </div>

        <footer>
          <div className="footer-logo">Career<span className="accent">Flow</span></div>
          <p>by NM dev · Orientación vocacional con IA · 2025</p>
        </footer>
      </section>

      {/* CHAT */}
      <section id="screen-chat" className="screen">
        <div className="chat-header">
          <button className="back-btn" onClick={() => window.CF && window.CF.goTo('landing')}>← Volver</button>
          <div className="chat-header-center">
            <div className="ai-avatar">🤖</div>
            <div className="ai-info">
              <div className="ai-name">Flow · IA Vocacional</div>
              <div className="ai-status"><span className="status-dot"></span> En línea</div>
            </div>
          </div>
          <div className="progress-info">Progreso: <span id="prog-label">0%</span></div>
        </div>
        <div className="progress-track"><div className="progress-fill" id="prog-fill"></div></div>
        <div className="chat-messages" id="chat-messages" role="log" aria-live="polite"></div>
        <div className="chat-input-zone">
          <div className="chat-input-inner">
            <textarea id="chat-input" className="chat-textarea" placeholder="Escribí tu respuesta..." rows="1"
              onKeyDown={e => window.CF && window.CF.onKey(e)}
              onInput={e => window.CF && window.CF.resizeTA(e.target)}
            ></textarea>
            <button className="send-btn" id="send-btn" onClick={() => window.CF && window.CF.sendUserMsg()}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div id="chat-error" className="chat-error" role="alert"></div>
        </div>
      </section>

      {/* RESULTADO */}
      <section id="screen-result" className="screen">
        <div className="result-wrap">
          <button className="back-btn" onClick={() => window.CF && window.CF.goTo('landing')} style={{marginBottom:'24px'}}>← Volver al inicio</button>
          <div id="result-content"></div>
        </div>
      </section>

      <script src="/js/app.js" defer></script>
    </>
  );
}
