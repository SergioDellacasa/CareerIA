(function(){
'use strict';
const state={questionIndex:0,selectedTags:[],answers:[],openerChoice:null,isWaiting:false,phase:'opener'};

function goTo(n){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));const t=document.getElementById('screen-'+n);if(t)t.classList.add('active');window.scrollTo({top:0,behavior:'instant'});}
function scrollTo(id){const el=document.getElementById(id);if(el)el.scrollIntoView({behavior:'smooth',block:'start'});}

function startChat(){
  state.questionIndex=0;state.selectedTags=[];state.answers=[];state.openerChoice=null;state.isWaiting=false;state.phase='opener';
  const msgs=document.getElementById('chat-messages');if(msgs)msgs.innerHTML='';
  setProgress(0);goTo('chat');setTimeout(loadOpener,300);
}

async function loadOpener(){
  setWaiting(true);const typId=showTyping();
  try{
    const res=await fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({action:'opener'})});
    const data=await res.json();removeTyping(typId);
    const{opener}=data;
    appendBubble(opener.mensaje,'ai',opener.opciones,(choiceText,choiceIndex)=>{
      state.openerChoice=choiceIndex;appendBubble(choiceText,'user');
      state.phase='questions';setWaiting(false);setTimeout(loadNextQuestion,700);
    });
    setWaiting(false);
  }catch(e){removeTyping(typId);setWaiting(false);showError('No se pudo conectar.');}
}

async function loadNextQuestion(){
  const pct=Math.round(10+(state.questionIndex/10)*85);setProgress(pct);
  setWaiting(true);const typId=showTyping();
  try{
    const res=await fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({action:'question',data:{questionIndex:state.questionIndex}})});
    const data=await res.json();removeTyping(typId);setWaiting(false);
    if(data.done){loadResult();return;}
    const{question,transition}=data;
    const txt=(transition?transition+' ':'')+question.texto;
    appendBubble(txt,'ai',question.opciones.map(o=>o.texto),(choiceText,choiceIndex)=>{
      const chosen=question.opciones[choiceIndex];
      appendBubble(choiceText,'user');
      state.selectedTags.push(...chosen.tags);
      state.answers.push({question:question.id,choice:choiceIndex,tags:chosen.tags});
      state.questionIndex++;setTimeout(loadNextQuestion,700);
    });
  }catch(e){removeTyping(typId);setWaiting(false);showError('Error cargando pregunta.');}
}

async function loadResult(){
  setProgress(95);setWaiting(true);const typId=showTyping();
  appendBubble('¡Listo! Ya tengo todo para armar tu perfil. Dame un segundo... 🔍','ai');
  try{
    const res=await fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({action:'result',data:{selectedTags:state.selectedTags,answers:state.answers}})});
    const data=await res.json();removeTyping(typId);setWaiting(false);
    if(!res.ok||!data.careers){showError('Problema calculando el resultado.');return;}
    setProgress(100);
    setTimeout(()=>{goTo('result');renderResult(data);},800);
  }catch(e){removeTyping(typId);setWaiting(false);showError('Error calculando resultado.');}
}

function renderResult(d){
  const container=document.getElementById('result-content');if(!container)return;
  const perfil=d.perfil||{nombre:'Perfil único',desc:''};
  const skillsHTML=Object.entries(d.habilidades||{}).map(([k,v])=>
    `<div class="skill-item"><div class="skill-top"><span>${esc(k)}</span><span class="skill-val">${v}%</span></div><div class="skill-track"><div class="skill-fill" data-val="${v}"></div></div></div>`
  ).join('');
  const careersHTML=(d.careers||[]).map((c,i)=>
    `<div class="career-result ${i===0?'is-top':''}">
      <div class="cr-emoji">${esc(c.emoji)}</div>
      <div class="cr-body">
        <div class="cr-header">
          <div class="cr-name">${esc(c.nombre)}</div>
          <div class="cr-match">${c.match}% compatible</div>
          ${i===0?'<span class="cr-top-badge">⭐ Mejor opción</span>':''}
        </div>
        <div class="cr-meta">
          <div class="cr-meta-item">🏛️ <strong>${esc(c.area)}</strong></div>
          <div class="cr-meta-item">⏱ <strong>${esc(c.duracion)}</strong></div>
          <div class="cr-meta-item">📈 <strong>${esc(c.demanda)}</strong></div>
          <div class="cr-meta-item">🏠 <strong>${esc(c.modalidad)}</strong></div>
        </div>
      </div>
    </div>`
  ).join('');
  container.innerHTML=`
    <div class="result-header">
      <div class="profile-badge"><span class="profile-emoji">🌟</span><span class="profile-type gradient-text">${esc(perfil.nombre)}</span></div>
      <p class="profile-desc">${esc(perfil.desc)}</p>
    </div>
    <div class="two-col">
      <div class="res-card">
        <div class="res-card-title">💪 Tus fortalezas clave</div>
        ${Object.entries(d.habilidades||{}).sort((a,b)=>b[1]-a[1]).slice(0,4).map(([k])=>`<div class="fortaleza-item"><span class="fort-icon">✦</span><span>${esc(k)}</span></div>`).join('')}
      </div>
      <div class="res-card">
        <div class="res-card-title">📊 Mapa de habilidades</div>
        <div class="skills-grid">${skillsHTML}</div>
      </div>
    </div>
    <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:1.2rem;margin:24px 0 4px">🎯 Carreras que más te van</div>
    <p style="color:var(--txt2);font-size:0.9rem;margin-bottom:14px">Calculadas a partir de tus respuestas. Cuanto más alto el %, mejor te calza.</p>
    <div class="career-result-list">${careersHTML}</div>
    <div class="share-row">
      <button class="share-btn" onclick="CF.startChat()">🔄 Hacer de nuevo</button>
      <button class="share-btn" onclick="CF.copyResult()">📋 Copiar resultado</button>
      <button class="share-btn" onclick="CF.goTo('landing')">🏠 Inicio</button>
    </div>`;
  window._cfResult=d;
  requestAnimationFrame(()=>{setTimeout(()=>{container.querySelectorAll('.skill-fill').forEach(el=>{el.style.width=(el.dataset.val||0)+'%';});},200);});
}

function appendBubble(text,role,options,onChoice){
  const container=document.getElementById('chat-messages');if(!container)return;
  container.querySelectorAll('.quick-replies').forEach(el=>el.remove());
  const row=document.createElement('div');row.className='msg-row'+(role==='user'?' user':'');
  const av=document.createElement('div');av.className='msg-avatar '+(role==='user'?'user-av':'ai-av-sm');av.setAttribute('aria-hidden','true');av.textContent=role==='user'?'👤':'🤖';
  const bubble=document.createElement('div');bubble.className='msg-bubble '+role;
  bubble.innerHTML=text.split('\n').map(l=>esc(l)).join('<br>');
  if(role==='user'){row.appendChild(bubble);row.appendChild(av);}else{row.appendChild(av);row.appendChild(bubble);}
  container.appendChild(row);
  if(options&&options.length>0&&onChoice){
    const qrDiv=document.createElement('div');qrDiv.className='quick-replies';
    options.forEach((txt,idx)=>{
      const btn=document.createElement('button');btn.className='quick-reply-btn';btn.textContent=txt;
      btn.onclick=()=>{
        if(state.isWaiting)return;
        qrDiv.querySelectorAll('button').forEach(b=>{b.disabled=true;b.style.opacity='0.45';});
        btn.style.opacity='1';btn.style.background='var(--c1)';btn.style.color='#fff';
        onChoice(txt,idx);
      };
      qrDiv.appendChild(btn);
    });
    container.appendChild(qrDiv);
  }
  // FOCO: siempre scrollear al fondo después de pintar
  requestAnimationFrame(()=>{container.scrollTo({top:container.scrollHeight,behavior:'smooth'});});
}

function showTyping(){
  const container=document.getElementById('chat-messages');if(!container)return null;
  const id='typ-'+Date.now();
  const row=document.createElement('div');row.className='msg-row';row.id=id;
  const av=document.createElement('div');av.className='msg-avatar ai-av-sm';av.textContent='🤖';
  const bubble=document.createElement('div');bubble.className='msg-bubble ai';
  bubble.innerHTML='<div class="typing-bubble"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>';
  row.appendChild(av);row.appendChild(bubble);container.appendChild(row);
  requestAnimationFrame(()=>{container.scrollTo({top:container.scrollHeight,behavior:'smooth'});});
  return id;
}
function removeTyping(id){const el=document.getElementById(id);if(el)el.remove();}
function setWaiting(val){state.isWaiting=val;}
function setProgress(pct){
  const fill=document.getElementById('prog-fill');const label=document.getElementById('prog-label');
  if(fill)fill.style.width=Math.round(pct)+'%';if(label)label.textContent=Math.round(pct)+'%';
}
function showError(msg){
  const el=document.getElementById('chat-error');if(!el)return;
  el.textContent='⚠️ '+msg;el.classList.add('visible');
  setTimeout(()=>{el.classList.remove('visible');setTimeout(()=>{el.textContent='';},300);},7000);
}
function copyResult(){
  const d=window._cfResult;if(!d)return;
  const lines=[`Mi perfil: ${d.perfil?.nombre||''}`,d.perfil?.desc||'','Carreras recomendadas:',...(d.careers||[]).map(c=>`• ${c.nombre} (${c.match}%)`),'','Career Flow by NM dev'];
  navigator.clipboard.writeText(lines.join('\n')).then(()=>alert('¡Copiado!')).catch(()=>alert('No se pudo copiar.'));
}
function esc(str){if(typeof str!=='string')return '';return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');}

window.CF={startChat,goTo,scrollTo,copyResult};
})();
