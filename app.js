'use strict';
const $ = id => document.getElementById(id);
const KEY = 'vocalflow-v1';
const copy = {
es: {home:'Entrenamiento',history:'Mi actividad',settings:'Ajustes',tag:'UN MOMENTO PARA TI. UN ESPACIO PARA TU VOZ.',hello:'Conecta con<br><em>tu voz.</em>',intro:'Respira con calma. Despierta tu cuerpo. Encuentra una voz más libre, un día a la vez.',daily:'Tu práctica diaria',five:'5 bloques',full:'Rutina completa',quick:'Rutina rápida',start:'Comenzar entrenamiento',resume:'Continuar sesión',note:'Sin prisas. Sin presión. Solo tú y tu voz.',journey:'El recorrido',activity:'Tu constancia',sessions:'sesiones completas',streak:'días de racha',total:'Tiempo de práctica',completedDay:'Día con práctica completa',quote:'«La constancia empieza con un pequeño momento para ti.»',footer:'Tu voz, a tu ritmo.',language:'Idioma',sound:'Sonidos de transición',auto:'Avance automático',storage:'Tu actividad se guarda solo en este navegador.',clear:'Borrar historial',confirmClear:'¿Borrar todo el historial? Esta acción no se puede deshacer.',pause:'Pausar',previous:'Anterior',next:'Siguiente',finish:'Finalizar entrenamiento',confirmFinish:'¿Terminar ahora? Se guardará como sesión incompleta si quedan ejercicios pendientes.',reset:'Reiniciar sesión',confirmReset:'¿Reiniciar desde el principio? La práctica actual se guardará como incompleta.',block:'Bloque',of:'de',remaining:'Tiempo restante',progress:'Progreso de sesión',upNext:'A continuación',last:'Último ejercicio',inhale:'INHALA',exhale:'EXHALA',ready:'Ejercicio terminado',paused:'EN PAUSA',guide:'Tu guía',complete:'Sesión completa',incomplete:'Sesión incompleta',congrats:'Tu voz te lo agradece.',partial:'Cada momento cuenta.',summary:'Has dedicado tiempo a respirar, moverte y conectar con tu voz.',back:'Volver al inicio',empty:'Tu primera práctica empieza hoy.',minutes:'min',long:'Sonido largo',pulsed:'Cuatro pulsos',rest:'Descansa e inhala',transition:'Prepara la siguiente pareja',voiced:'Sonora',unvoiced:'Sorda',repetition:'Repetición',gentle:'Relaja los hombros. Deja fluir la respiración. Mantén la voz libre.',storageError:'No se puede guardar en este navegador. La sesión sigue funcionando.',monthPrev:'Mes anterior',monthNext:'Mes siguiente',blockProgress:'Progreso del bloque',saved:'Historial borrado',waiting:'Pulsa Siguiente para continuar',routine:'Rutina',practice:'Tiempo practicado'},
en: {home:'Training',history:'My activity',settings:'Settings',tag:'A MOMENT FOR YOU. A SPACE FOR YOUR VOICE.',hello:'Connect with<br><em>your voice.</em>',intro:'Breathe deeply. Wake up your body. Find a freer voice, one day at a time.',daily:'Your daily practice',five:'5 blocks',full:'Full routine',quick:'Quick routine',start:'Start Training',resume:'Resume session',note:'No rush. No pressure. Just you and your voice.',journey:'The journey',activity:'Your consistency',sessions:'completed sessions',streak:'day streak',total:'Practice time',completedDay:'Day with completed practice',quote:'“Consistency begins with a little moment for yourself.”',footer:'Your voice, at your own pace.',language:'Language',sound:'Transition sounds',auto:'Auto advance',storage:'Your activity is stored only in this browser.',clear:'Clear history',confirmClear:'Delete all history? This cannot be undone.',pause:'Pause',previous:'Previous',next:'Next',finish:'Finish Training',confirmFinish:'Finish now? This will be saved as incomplete if any exercises remain.',reset:'Restart session',confirmReset:'Restart from the beginning? Current practice will be saved as incomplete.',block:'Block',of:'of',remaining:'Time remaining',progress:'Session progress',upNext:'Up next',last:'Last exercise',inhale:'INHALE',exhale:'EXHALE',ready:'Exercise finished',paused:'PAUSED',guide:'Your guide',complete:'Session complete',incomplete:'Incomplete session',congrats:'Your voice thanks you.',partial:'Every moment counts.',summary:'You made time to breathe, move, and connect with your voice.',back:'Back to home',empty:'Your first practice starts today.',minutes:'min',long:'Long sound',pulsed:'Four pulses',rest:'Rest and inhale',transition:'Prepare the next pair',voiced:'Voiced',unvoiced:'Unvoiced',repetition:'Repetition',gentle:'Relax your shoulders. Let your breath flow. Keep your voice free.',storageError:'Storage is unavailable. Your session will keep working.',monthPrev:'Previous month',monthNext:'Next month',blockProgress:'Block progress',saved:'History cleared',waiting:'Press Next to continue',routine:'Routine',practice:'Time practiced'}
};
const bi = (es,en) => ({es,en});
const blocks = [
{title:bi('Respiración y expansión costal','Breathing & Rib Expansion'),goal:bi('Despierta tu respiración y crea espacio.','Wake up your breath and create space.'),icon:'◌',seconds:180,steps:[bi('Ponte de pie con las rodillas ligeramente flexionadas.','Stand with your knees slightly bent.'),bi('Relaja los hombros, el cuello y la mandíbula.','Relax your shoulders, neck, and jaw.'),bi('Coloca las manos a los lados de las costillas.','Place your hands on the sides of your ribs.'),bi('Inhala durante 4 segundos y siente la expansión lateral y posterior de las costillas.','Inhale for 4 seconds, feeling your ribs expand sideways and backwards.'),bi('Exhala con una S suave durante 8 segundos y repite.','Exhale on a soft S for 8 seconds and repeat.')]},
{title:bi('Despertar corporal y movilidad','Body Awakening & Hip Mobility'),goal:bi('Libera tensión. Encuentra un movimiento suave.','Release tension. Find an easy movement.'),icon:'∞',seconds:240,steps:[bi('Mantén las rodillas suaves y los pies al ancho de las caderas.','Keep your knees soft and your feet hip-width apart.'),bi('Mueve la pelvis suavemente, sin tensar hombros ni abdomen.','Move your pelvis gently without tightening your shoulders or abdomen.'),bi('Haz movimientos pequeños y cómodos. Respira con naturalidad.','Keep movements small and comfortable. Breathe naturally.')]},
{title:bi('Consonantes y conexión muscular','Consonants & Muscle Connection'),goal:bi('Conecta el aire, el sonido y el movimiento.','Connect your airflow, sound, and movement.'),icon:'≋',seconds:420,steps:[bi('Inhala de forma natural. Sostén la consonante durante 4–6 segundos cuando sea posible.','Inhale naturally. Sustain the consonant for 4–6 seconds where possible.'),bi('Descansa brevemente y produce cuatro pulsos cortos.','Rest briefly, then make four short pulses.'),bi('Acompaña cada pulso con un pequeño movimiento de pelvis hacia delante.','Match each pulse with a small forward movement of your pelvis.'),bi('Repite con la consonante sonora correspondiente.','Repeat with the corresponding voiced consonant.')]},
{title:bi('Exploración del falsete','Falsetto Exploration'),goal:bi('Descubre una voz ligera, aguda y brillante.','Explore a light, high, bright voice.'),icon:'∿',seconds:300,steps:[bi('Usa un volumen suave y una sensación ligera, sin empujar el aire.','Use a soft volume and a light feeling, without pushing air.'),bi('Explora una altura cómoda. No fuerces la garganta.','Explore a comfortable pitch. Do not strain your throat.'),bi('Inspírate en la ligereza de Bee Gees, Michael Jackson o un coro infantil.','Think of the lightness of the Bee Gees, Michael Jackson, or a children’s choir.')]},
{title:bi('Práctica de una frase','Phrase practice'),goal:bi('Une ritmo, melodía y palabras.','Bring rhythm, melody and words together.'),icon:'♫',seconds:300,steps:[bi('Practica la frase de ejemplo siguiendo los bloques.','Practice the example phrase by following the blocks.'),bi('Mantén la respiración fluida y la pelvis libre mientras practicas.','Keep your breath flowing and your pelvis relaxed as you practice.'),bi('Conserva la misma facilidad al pasar del habla al canto.','Keep the same ease as you move from speech to singing.')]}
];
const names = [
[bi('Respiración y expansión costal','Breathing & Rib Expansion')],
[bi('Círculos de cadera · sentido horario','Hip circles · clockwise'),bi('Círculos de cadera · sentido antihorario','Hip circles · counterclockwise'),bi('Ocho horizontal','Horizontal figure eight'),bi('Ocho vertical','Vertical figure eight')],
['F / V','S / Z','SH / ZH','CH / J','TH / TH'].map(x=>bi(x,x)),
[bi('UUU ligero','Light UUU sound'),bi('Sirenas vocales suaves','Gentle vocal sirens'),bi('OO-HOO juguetón','Playful OO-HOO'),bi('Transiciones UUU-III-UUU','UUU-III-UUU transitions'),bi('Melodía ligera en falsete','Light falsetto melody')],
[bi('Recita una frase','Speak a song phrase'),bi('Practica el ritmo con VVV o ZZZ','Practice the rhythm with VVV or ZZZ'),bi('Canta la melodía con UUU','Sing the melody using UUU'),bi('Canta la frase','Sing the phrase')]
];
const details = [[],[
bi('Dibuja un círculo lento con la pelvis en sentido horario.','Draw a slow clockwise circle with your pelvis.'),bi('Invierte el sentido del círculo, con la misma suavidad.','Reverse the circle, keeping the same ease.'),bi('Dibuja un ocho paralelo al suelo, alternando una cadera y la otra.','Draw a figure eight parallel to the floor, alternating hips.'),bi('Dibuja un ocho vertical con la pelvis, elevando y bajando cada lado suavemente.','Draw a vertical figure eight with your pelvis, gently raising and lowering each side.')],[],[
bi('Deja salir un UUU fino y ligero en una nota cómoda.','Release a thin, light UUU on a comfortable note.'),bi('Desliza la voz suavemente hacia arriba y abajo, en un rango cómodo.','Slide gently up and down within a comfortable range.'),bi('Prueba un OO-HOO alegre y suave, dejando espacio entre repeticiones.','Try a playful, soft OO-HOO with space between repetitions.'),bi('Alterna UUU, III y UUU sin aumentar el volumen.','Alternate UUU, III, and UUU without increasing volume.'),bi('Sigue la melodía de ejemplo y respira entre frases.','Follow the example melody and breathe between phrases.')],[
bi('Recita la frase como si se la contaras a alguien.','Speak the phrase as if telling it to someone.'),bi('Sustituye las palabras por VVV o ZZZ siguiendo el ritmo.','Replace the words with VVV or ZZZ, following the rhythm.'),bi('Canta las notas con UUU y conserva un flujo de aire cómodo.','Sing the notes on UUU with a comfortable airflow.'),bi('Canta «Hoy quiero cantar» siguiendo las notas de la pista.','Sing “I want to sing now” following the notes on the score.')]];
function timeline(routine){return names.flatMap((list,b)=>list.map((name,j)=>({b,j,name,duration:([180,60,84,60,60][b]*(b===4&&j===3?2:1))*(routine==='quick'?5/12:1)})));}
let data={settings:{lang:'es',sound:true,auto:true,routine:'full'},history:[],session:null};
try{const stored=JSON.parse(localStorage.getItem(KEY));if(stored&&Array.isArray(stored.history)){data.history=stored.history.filter(x=>x&&typeof x.date==='string'&&Number.isFinite(x.duration));Object.assign(data.settings,stored.settings);data.session=stored.session;}}catch{}
if(!['es','en'].includes(data.settings.lang))data.settings.lang='es';
if(!['full','quick'].includes(data.settings.routine))data.settings.routine='full';
if(data.session){const s=data.session,n=timeline(s.routine).length;if(!['full','quick'].includes(s.routine)||!Number.isInteger(s.index)||s.index<0||s.index>=n||!Array.isArray(s.spent)||s.spent.length!==n||s.spent.some(x=>!Number.isFinite(x)||x<0)||!Number.isFinite(s.practiced)){data.session=null;}else{s.running=false;s.last=null;}}
let screen='home',month=new Date(new Date().getFullYear(),new Date().getMonth(),1),audioContext,storageWarned=false,lastSummary=null;
const t=k=>copy[data.settings.lang][k];
const tr=x=>x[data.settings.lang];
const fmt=s=>`${Math.floor(Math.max(0,Math.ceil(s))/60).toString().padStart(2,'0')}:${(Math.max(0,Math.ceil(s))%60).toString().padStart(2,'0')}`;
const dateKey=(d=new Date())=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
const locale=()=>data.settings.lang==='es'?'es-ES':'en-GB';
function notify(message){$('notice').textContent=message;setTimeout(()=>$('notice').textContent='',5000);}
function save(){try{localStorage.setItem(KEY,JSON.stringify(data));}catch{if(!storageWarned){storageWarned=true;notify(t('storageError'));}}}
function stats(){const done=data.history.filter(x=>x.complete);const days=new Set(done.map(x=>x.day));let d=new Date(),streak=0;if(!days.has(dateKey(d)))d.setDate(d.getDate()-1);while(days.has(dateKey(d))){streak++;d.setDate(d.getDate()-1);}return {count:done.length,streak,total:data.history.reduce((a,x)=>a+x.duration,0),days};}
function calendar(){const st=stats(),y=month.getFullYear(),m=month.getMonth(),offset=(new Date(y,m,1).getDay()+6)%7,last=new Date(y,m+1,0).getDate();let html=`<div class="calendar-head"><button id="prevMonth" aria-label="${t('monthPrev')}">‹</button><span>${month.toLocaleDateString(locale(),{month:'long',year:'numeric'})}</span><button id="nextMonth" aria-label="${t('monthNext')}">›</button></div><div class="calendar">`;const days=data.settings.lang==='es'?['L','M','X','J','V','S','D']:['M','T','W','T','F','S','S'];html+=days.map(x=>`<span class="weekday">${x}</span>`).join('');html+='<span></span>'.repeat(offset);for(let d=1;d<=last;d++){const key=dateKey(new Date(y,m,d)),done=st.days.has(key);html+=`<span class="day ${done?'done':''} ${key===dateKey()?'today':''}" aria-label="${key}${done?' · '+t('complete'):''}">${d}</span>`;}return html+`</div><p class="legend">${t('completedDay')}</p>`;}
function statHTML(){const s=stats();return `<div class="stats"><div class="stat"><strong>${s.count}</strong><span>${t('sessions')}</span></div><div class="stat"><strong>${s.streak}</strong><span>${t('streak')}</span></div></div><div class="section-heading muted"><span>${t('total')}</span><span>${Math.floor(s.total/60)} ${t('minutes')}</span></div>`;}
function bindCalendar(){$('prevMonth').onclick=()=>{month.setMonth(month.getMonth()-1);render();};$('nextMonth').onclick=()=>{month.setMonth(month.getMonth()+1);render();};}
function render(){ $('app').classList.remove('training-screen');document.documentElement.lang=data.settings.lang;['home','history','settings'].forEach(k=>{$(k+'Nav').textContent=t(k);const active=screen===k||(k==='home'&&screen==='training');$(k+'Nav').classList.toggle('active',active);if(active)$(k+'Nav').setAttribute('aria-current','page');else $(k+'Nav').removeAttribute('aria-current');});$('footerText').textContent=t('footer');$('settingsTitle').textContent=t('settings');$('languageLabel').textContent=t('language');$('soundLabel').textContent=t('sound');$('autoLabel').textContent=t('auto');$('storageNote').textContent=t('storage');$('clearHistory').textContent=t('clear');$('language').value=data.settings.lang;$('sound').checked=data.settings.sound;$('auto').checked=data.settings.auto;
if(screen==='home')renderHome();else if(screen==='training'&&data.session)renderTraining();else if(screen==='history')renderHistory();else if(screen==='summary')renderSummary();}
function renderHome(){
  const es=data.settings.lang==='es';
  $('app').innerHTML=`<section class="home-simple"><span class="eyebrow">VOCALFLOW</span><h1>${es?'Un momento<br>para tu voz.':'A moment<br>for your voice.'}</h1><p class="muted">${es?'Respira, muévete y canta. Sigue una guía, paso a paso.':'Breathe, move and sing. Follow one step at a time.'}</p><div class="routine-options">${['quick','full'].map(r=>`<button class="routine-option ${data.settings.routine===r?'selected':''}" data-routine="${r}" aria-pressed="${data.settings.routine===r}"><strong>${r==='full'?24:10} min</strong><span>${t(r)}</span></button>`).join('')}</div><button id="start" class="primary wide">${t(data.session?'resume':'start')}</button><div class="blocks">${blocks.map(b=>`<div class="block"><span class="block-icon" aria-hidden="true">${b.icon}</span><span class="block-name">${tr(b.title)}</span><span class="block-time">${fmt(b.seconds*(data.settings.routine==='quick'?5/12:1))}</span></div>`).join('')}</div></section>`;
  document.querySelectorAll('[data-routine]').forEach(el=>{el.disabled=!!data.session;el.onclick=()=>{data.settings.routine=el.dataset.routine;save();render();};});$('start').onclick=start;
}
function start(){unlockAudio();if(!data.session){const list=timeline(data.settings.routine);data.session={routine:data.settings.routine,index:0,spent:list.map(()=>0),practiced:0,running:true,last:Date.now(),started:new Date().toISOString()};}else{data.session.running=true;data.session.last=Date.now();}screen='training';save();render();focusScreen();}
function current(){const s=data.session;return timeline(s.routine)[s.index];}
// Keep posture and the current action visible for the whole exercise.
function exerciseGuide(e) {
  const es=data.settings.lang==='es';
  const hands=e.b===0?(es?'Manos sobre las costillas':'Hands on ribs'):e.b<=2?(es?'Manos en las caderas':'Hands on hips'):(es?'Brazos sueltos a los lados':'Arms relaxed at your sides');
  let action=e.b===0?(es?'Inhala 4 s. Exhala con S suave 8 s. Repite.':'Inhale for 4 s. Exhale on a soft S for 8 s. Repeat.'):details[e.b][e.j]?tr(details[e.b][e.j]):'';
  const mouth=[
    bi('Dientes superiores sobre el labio inferior: F sin voz, V con voz.','Upper teeth on lower lip: F without voice, V with voice.'),
    bi('Dientes cerca, lengua detrás: S sin voz, Z con voz (como una abeja).','Teeth close, tongue behind: S without voice, Z with voice (a buzz).'),
    bi('Labios algo redondeados: SH para pedir silencio; ZH añade voz.','Round your lips slightly: SH to hush; add voice for ZH.'),
    bi('CH como en «chico»; J como en «jeans» en inglés. Haz sonidos cortos.','CH as in “chair”; J as in “jeans”. Use short sounds.'),
    bi('Punta de la lengua entre los dientes: TH sin voz (think) y con voz (this).','Tongue tip between teeth: TH without voice (think), then with voice (this).')
  ];
  if(e.b===2)action=tr(mouth[e.j]);
  const cue=e.b===2?(es?'Sigue el sonido y los pulsos del temporizador. En cada pulso, mueve un poco la pelvis hacia delante.':'Follow the timer’s sound and pulses. On each pulse, move your pelvis slightly forward.'):e.b===1?(es?'Mueve solo la pelvis, despacio. Mantén los hombros quietos.':'Move only your pelvis, slowly. Keep your shoulders still.'):(es?'Hombros bajos y mandíbula suelta. Sin forzar.':'Keep shoulders low and jaw relaxed. Do not strain.');
  const arms=e.b===0?'M80 68 L61 99 L85 92 M120 68 L139 99 L115 92':e.b<=2?'M80 68 L60 99 L85 116 M120 68 L140 99 L115 116':'M80 68 L71 101 L68 129 M120 68 L129 101 L132 129';
  const handY=e.b===0?92:e.b<=2?116:129;
  return `<div class="posture-guide"><svg viewBox="0 0 200 220" role="img" aria-labelledby="poseTitle"><title id="poseTitle">${hands}. ${es?'De pie, pies al ancho de caderas y rodillas suaves.':'Stand with feet hip-width apart and knees soft.'}</title><path class="ground" d="M40 204 H160"/><g class="body-lines"><circle cx="100" cy="34" r="17"/><path d="M100 51 V63 M80 68 Q100 58 120 68 L116 119 Q100 129 84 119 Z M86 125 L82 160 L76 199 L64 199 M114 125 L118 160 L124 199 L136 199"/><path d="${arms}"/></g><g class="pose-points"><circle cx="${e.b>=3?68:85}" cy="${handY}" r="5"/><circle cx="${e.b>=3?132:115}" cy="${handY}" r="5"/></g><path class="stance-line" d="M76 212 H124 M76 208 V216 M124 208 V216"/></svg><div class="guide-copy"><h2>${es?'Colócate así':'Set up like this'}</h2><p>${hands}.</p><p class="muted">${es?'Pies al ancho de caderas. Rodillas ligeramente flexionadas.':'Feet hip-width apart. Knees slightly bent.'}</p><h2>${es?'Qué hacer':'What to do'}</h2><p>${action}</p><p class="muted">${cue}</p></div></div>`;
}

// Visual examples are patterns to imitate, not target notes or recorded audio.
function vocalGuide(e) {
  if(e.b<2)return '';
  const es=data.settings.lang==='es';
  const mouth=(shape,label)=>{
    const opening=shape==='wide'?'<ellipse cx="40" cy="32" rx="25" ry="7"/>':shape==='teeth'?'<path d="M16 25 Q40 17 64 25 L60 34 H20 Z"/><path d="M20 38 Q40 48 60 38"/>':shape==='tongue'?'<path d="M16 24 Q40 15 64 24 L62 40 Q40 48 18 40 Z"/><path class="tongue" d="M30 32 Q40 26 50 32 V43 Q40 53 30 43 Z"/>':'<ellipse cx="40" cy="32" rx="13" ry="19"/>';
    return `<div class="mouth-example"><svg viewBox="0 0 80 64" aria-hidden="true">${opening}</svg><span>${label}</span></div>`;
  };
  let mouths='',pattern='',caption='',path='';
  if(e.b===2){
    const pair=[['F','V'],['S','Z'],['SH','ZH'],['CH','J'],['TH','TH']][e.j];
    mouths=mouth(['teeth','wide','round','round','tongue'][e.j],es?['Dientes sobre el labio','Dientes casi juntos','Labios redondeados','Labios algo redondeados','Lengua entre dientes'][e.j]:['Teeth on lower lip','Teeth almost together','Rounded lips','Slightly rounded lips','Tongue between teeth'][e.j]);
    pattern=`<div class="voice-pair"><span data-voice="0">${pair[0]}<small>${es?'solo aire':'air only'}</small></span><span data-voice="1">${pair[1]}<small>${es?'aire + voz':'air + voice'}</small></span></div><div class="sound-pattern" id="vocalPattern"></div>`;
    caption=es?'La misma posición de boca; añade voz en el segundo sonido.':'Keep the same mouth position; add voice for the second sound.';
  }else if(e.b===3){
    mouths=e.j===3?mouth('round','UUU')+mouth('wide','III')+mouth('round','UUU'):mouth('round',e.j===2?'OO · HOO':'UUU');
    path=['M10 45 H290','M10 70 Q80 70 150 15 Q220 70 290 70','M10 55 Q50 30 90 55 M155 55 Q210 15 275 55','M10 45 H290','M10 60 Q55 20 100 45 T190 35 T290 60'][e.j];
    caption=(es?['Mantén una nota cómoda y suave. Luego respira.','Sube y baja el tono de forma continua, sin subir el volumen.','OO, pausa breve, HOO. Ligero, como una llamada suave.','Cambia la vocal, manteniendo la misma nota y volumen.','Inventa una melodía corta. Respira entre frases.']:['Hold a comfortable, soft note. Then breathe.','Slide up and down in pitch without getting louder.','OO, brief pause, HOO. Light, like a gentle call.','Change the vowel, keeping the same note and volume.','Make up a short melody. Breathe between phrases.'])[e.j];
  }else{
    const phrase=es?'Hoy · quie · ro · can · tar':'I · want · to · sing · now';
    mouths=mouth(e.j===1?'teeth':e.j===2?'round':'wide',e.j===1?'VVV':e.j===2?'UUU':es?'Tu letra':'Your lyrics');
    pattern=`<div class="syllable-example">${e.j===1?'V · V · V · V · V':e.j===2?'U — U — U — U — U':phrase}</div>`;
    path=e.j>=2?'M10 60 L80 40 L150 50 L220 20 L290 45':'';
    caption=(es?['Ejemplo: di «Hoy quiero cantar» con tu voz habitual.','Usa el ritmo de tu frase: un V por cada sílaba. Puedes usar Z.','Canta la melodía de tu frase solo con U, sin palabras.','Canta tu frase con letra, conservando la misma facilidad.']:['Example: say “I want to sing now” in your speaking voice.','Use your phrase’s rhythm: one V per syllable. You can use Z.','Sing your phrase’s melody on U, without words.','Sing your phrase with lyrics, keeping the same ease.'])[e.j];
  }
  const contour=path?`<div class="pitch-example"><div class="pitch-labels"><span>${es?'Agudo':'Higher'}</span><span>${es?'Grave':'Lower'}</span></div><svg viewBox="0 0 300 85" role="img" aria-label="${caption}"><path d="${path}"/></svg></div><small>${es?'Lee de izquierda a derecha · el dibujo muestra el tono, no el volumen.':'Read left to right · the line shows pitch, not volume.'}</small>`:'';
  return `<section class="vocal-guide" aria-label="${es?'Ejemplo vocal':'Vocal example'}"><h2>${es?'Prueba este sonido':'Try this sound'}</h2><div class="vocal-example"><div class="mouths">${mouths}</div><div class="vocal-pattern">${pattern}${contour}</div></div><p>${caption}</p></section>`;
}
function updateVocalGuide(e,elapsed){
  if(e.b!==2)return;
  const cycle=elapsed%20,segment=Math.floor(elapsed/20)%2;
  document.querySelectorAll('[data-voice]').forEach(node=>node.classList.toggle('active',Number(node.dataset.voice)===segment));
  const pair=[['F','V'],['S','Z'],['SH','ZH'],['CH','J'],['TH','TH']][e.j],sound=pair[segment];
  const label=cycle>=6&&cycle<10||cycle>=16?t('rest'):cycle>=10||e.j===3?`${sound} · ${sound} · ${sound} · ${sound}`:`${sound} ━━━━━`;
  $('vocalPattern').textContent=label;
}

const tunerCopy = {
  es: {on:'Activar micrófono',off:'Apagar micrófono',pending:'Cancelar solicitud',idle:'Tu nota en directo',listen:'Canta una vocal sostenida',privacy:'Solo en tu dispositivo · sin grabación',low:'Un poco baja',high:'Un poco alta',tuned:'Centrada',error:'No se pudo acceder al micrófono. Revisa los permisos y usa HTTPS o localhost.',label:'Afinación cromática',hint:'Nota más cercana · La4 = 440 Hz'},
  en: {on:'Enable microphone',off:'Turn microphone off',pending:'Cancel request',idle:'Your live note',listen:'Sing a sustained vowel',privacy:'On your device only · no recording',low:'A little flat',high:'A little sharp',tuned:'In tune',error:'Microphone unavailable. Check permissions and use HTTPS or localhost.',label:'Chromatic tuning',hint:'Nearest note · A4 = 440 Hz'}
};
const tt = key => tunerCopy[data.settings.lang][key];
let tuner = null, tunerPending = false, tunerRequest = 0;
// The practice score uses original, repeatable patterns, never inferred song notes.
let pitchBase=60, latestPitch=null, trackFrame=0, demoStart=null, trackOrigin=0;
function practicePattern(e){
  const words=data.settings.lang==='es'?['Hoy','quie','ro','can','tar']:['I','want','to','sing','now'];
  let offsets=[0,2,4,2,0], syllables=words, lengths=[1.2,1.2,1.2,1.2,2];
  if(e.b===3){
    offsets=[[0,0,0],[0,4,7,4,0],[0,4,0,4],[0,0,0],[0,2,4,7,4]][e.j];
    syllables=e.j===2?['OO','HOO','OO','HOO']:e.j===3?['UUU','III','UUU']:offsets.map(()=>'UUU');
    lengths=offsets.map(()=>e.j===0||e.j===3?2:1.2);
  }else if(e.j===1)syllables=words.map(()=>'VVV');else if(e.j===2)syllables=words.map(()=>'UUU');
  let start=1;
  const notes=offsets.map((offset,i)=>{const note={midi:pitchBase+offset,start,duration:lengths[i],syllable:syllables[i]};start+=lengths[i]+(e.b===3&&e.j===1?0:.2);return note;});
  return {notes,duration:start+2,rhythm:e.b===4&&e.j<2,slide:e.b===3&&e.j===1};
}
const scoreWidth=()=>window.matchMedia('(max-width:640px)').matches?400:800;
const trackX=(time,duration)=>50+time/duration*(scoreWidth()-100);
const trackY=midi=>190-(midi-pitchBase)*18;
function noteName(midi){return pitchInfo(440*2**((midi-69)/12)).note;}
function scoreMarkup(e){
  const es=data.settings.lang==='es',pattern=practicePattern(e);
  const hint=pattern.rhythm?(es?'Sigue el ritmo de las palabras.':'Follow the rhythm of the words.'):pattern.slide?(es?'Desliza la voz siguiendo la línea.':'Slide your voice along the line.'):(es?'Sostén cada sonido mientras la línea recorre su bloque.':'Hold each sound while the line crosses its block.');
  return `<section class="practice-score" aria-label="${es?'Pista de práctica vocal':'Vocal practice score'}"><div class="score-top"><span>${pattern.rhythm?(es?'RITMO':'RHYTHM'):(es?'MELODÍA DE PRÁCTICA':'PRACTICE MELODY')}</span><span id="pitchNote">—</span></div><svg id="scoreSvg" viewBox="0 0 ${scoreWidth()} 250" data-width="${scoreWidth()}" role="img" aria-labelledby="scoreTitle"><title id="scoreTitle">${hint} ${pattern.notes.map(n=>`${n.syllable}: ${pattern.rhythm?'':noteName(n.midi)}`).join(', ')}</title>${[0,2,4,7].map(n=>`<line class="score-grid" x1="50" x2="${scoreWidth()-40}" y1="${trackY(n+pitchBase)}" y2="${trackY(n+pitchBase)}"/><text class="score-label" x="8" y="${trackY(n+pitchBase)+5}">${pattern.rhythm?'':noteName(n+pitchBase)}</text>`).join('')}${pattern.slide?`<polyline class="slide-path" points="${pattern.notes.map(n=>`${trackX(n.start,pattern.duration)},${trackY(n.midi)}`).join(' ')}"/>`:''}${pattern.notes.map((n,i)=>`<g class="score-note" data-score-note="${i}"><rect x="${trackX(n.start,pattern.duration)}" y="${(pattern.rhythm?125:trackY(n.midi))-15}" width="${n.duration/pattern.duration*(scoreWidth()-100)}" height="30" rx="15"/><text x="${trackX(n.start,pattern.duration)+8}" y="${(pattern.rhythm?125:trackY(n.midi))+5}">${pattern.rhythm?n.syllable:noteName(n.midi).replace(/\d+$/, '')}</text></g>`).join('')}<line id="scoreCursor" x1="55" x2="55" y1="30" y2="220"/><circle id="voiceDot" cx="55" cy="125" r="7" visibility="hidden"/></svg><div class="score-lyrics">${pattern.notes.map((n,i)=>`<span data-syllable="${i}">${n.syllable}</span>`).join(' ')}</div><p id="scoreCue">${es?'Prepárate':'Get ready'}</p><p class="score-instruction">${hint}</p></section><div class="score-tools"><button id="listenDemo" type="button">${es?'Escuchar ejemplo':'Listen to example'}</button>${pattern.rhythm?'':`<button id="micToggle" type="button" aria-pressed="false">${tt('on')}</button>`}</div><p id="pitchStatus" class="voice-status">${es?'Practica a una altura cómoda, sin forzar.':'Practice at a comfortable pitch, without straining.'}</p>`;
}
function trackTime(){
  if(demoStart!==null&&referenceTone)return Math.max(0,referenceTone.context.currentTime-demoStart);
  const s=data.session;return s.spent[s.index]-trackOrigin+(s.running?Math.max(0,(Date.now()-s.last)/1000):0);
}
function updateScore(){
  if(!$('scoreSvg')||!data.session)return;
  const e=current(),pattern=practicePattern(e),time=trackTime()%pattern.duration;
  const active=pattern.notes.findIndex(n=>time>=n.start&&time<n.start+n.duration);
  if(Number($('scoreSvg').dataset.width)!==scoreWidth()){
    const template=document.createElement('template');template.innerHTML=scoreMarkup(e);
    $('scoreSvg').replaceWith(template.content.querySelector('#scoreSvg'));
  }
  const x=trackX(time,pattern.duration);
  $('scoreCursor').setAttribute('x1',x);$('scoreCursor').setAttribute('x2',x);
  document.querySelectorAll('[data-score-note]').forEach((node,i)=>{node.classList.toggle('current',i===active);node.classList.toggle('past',time>=pattern.notes[i].start+pattern.notes[i].duration);node.classList.toggle('matched',i===active&&!pattern.rhythm&&latestPitch&&Math.abs(latestPitch.midi-targetPitch(pattern,time))<=.25);});
  document.querySelectorAll('[data-syllable]').forEach((node,i)=>node.classList.toggle('current',i===active));
  const es=data.settings.lang==='es';
  $('scoreCue').textContent=demoStart!==null?(es?'Escucha; después pulsa Continuar':'Listen, then press Resume'):!data.session.running?t('paused'):time<1?(es?'Prepárate':'Get ready'):active<0?(es?'Respira':'Breathe'):pattern.rhythm?(es?'Sigue el ritmo':'Follow the rhythm'):pattern.slide?(es?'Desliza suavemente':'Slide gently'):(es?'Sostén el sonido':'Hold the sound');
  const visible=latestPitch&&tuner&&data.session.running&&!pattern.rhythm&&demoStart===null;
  $('voiceDot').setAttribute('visibility',visible?'visible':'hidden');
  if(visible){$('voiceDot').setAttribute('cx',x);$('voiceDot').setAttribute('cy',Math.max(25,Math.min(218,trackY(latestPitch.midi))));}
}
function targetPitch(pattern,time){
  const i=pattern.notes.findIndex(n=>time>=n.start&&time<n.start+n.duration);
  if(i<0)return null;
  const note=pattern.notes[i],next=pattern.notes[i+1];
  return pattern.slide&&next?note.midi+(next.midi-note.midi)*Math.min(1,(time-note.start)/(next.start-note.start)):note.midi;
}
function animateScore(){cancelAnimationFrame(trackFrame);const loop=()=>{if(screen!=='training'||!$('scoreSvg'))return;updateScore();trackFrame=requestAnimationFrame(loop);};loop();}
function displayPitch(info,status=tt('listen')){
  latestPitch=info;
  if(!$('pitchNote'))return;
  $('pitchNote').textContent=info?info.note:'—';
  const pattern=practicePattern(current()),target=targetPitch(pattern,trackTime()%pattern.duration);
  const es=data.settings.lang==='es';
  $('pitchStatus').textContent=info&&target!==null?(Math.abs(info.midi-target)<=.25?(es?'En la nota':'On the note'):info.midi<target?(es?'Tu voz está por debajo':'Your voice is below'):(es?'Tu voz está por encima':'Your voice is above')):info?(es?'Tu voz · '+info.note:'Your voice · '+info.note):status;
  updateScore();
}
let referenceTone=null,referenceRequest=0;
function stopReference(){
  referenceRequest++;if(demoStart!==null&&data.session)trackOrigin=data.session.spent[data.session.index];demoStart=null;
  if(referenceTone){referenceTone.oscillators.forEach(osc=>{osc.onended=null;try{osc.stop();}catch{}});referenceTone.context.close().catch(()=>{});referenceTone=null;}
  if($('listenDemo'))$('listenDemo').textContent=data.settings.lang==='es'?'Escuchar ejemplo':'Listen to example';
}
async function playDemo(){
  if(referenceTone){stopReference();return;}
  pauseForDialog();
  if(screen!=='training'||!data.session)return;
  const request=referenceRequest,pattern=practicePattern(current());let context;
  try{
    const Audio=window.AudioContext||window.webkitAudioContext;context=new Audio();await context.resume();
    if(request!==referenceRequest){await context.close();return;}
    const start=context.currentTime+.05,oscillators=[];
    for(let i=0;i<pattern.notes.length;i++){
      const n=pattern.notes[i],osc=context.createOscillator(),gain=context.createGain(),at=start+n.start;
      osc.frequency.setValueAtTime(440*2**((n.midi-69)/12),at);
      if(pattern.slide&&pattern.notes[i+1])osc.frequency.exponentialRampToValueAtTime(440*2**((pattern.notes[i+1].midi-69)/12),at+n.duration);
      gain.gain.setValueAtTime(0,at);gain.gain.linearRampToValueAtTime(.1,at+.04);gain.gain.setValueAtTime(.1,at+n.duration-.08);gain.gain.linearRampToValueAtTime(0,at+n.duration);
      osc.connect(gain);gain.connect(context.destination);osc.start(at);osc.stop(at+n.duration);oscillators.push(osc);
    }
    referenceTone={context,oscillators};demoStart=start;
    $('listenDemo').textContent=data.settings.lang==='es'?'Detener ejemplo':'Stop example';
    oscillators.at(-1).onended=()=>{if(referenceTone?.context!==context)return;stopReference();updateScore();};
  }catch{context?.close().catch(()=>{});notify(data.settings.lang==='es'?'No se pudo reproducir el ejemplo.':'Could not play the example.');}
}
// YIN normalized difference: choose the first reliable period, not a harmonic peak.
function detectPitch(input, sampleRate) {
  const size = Math.floor(input.length / 2), samples = new Float32Array(size);
  let energy = 0, mean = 0;
  for (let i=0;i<size;i++) { samples[i]=(input[i*2]+input[i*2+1])/2; mean+=samples[i]; }
  mean/=size;
  for (let i=0;i<size;i++) { samples[i]-=mean; energy+=samples[i]*samples[i]; }
  if (Math.sqrt(energy/size)<.008) return null;
  const rate=sampleRate/2, min=Math.floor(rate/1200), max=Math.min(Math.ceil(rate/65),Math.floor(size/2)), length=size-max;
  const difference=new Float32Array(max+1); let sum=0;
  for(let lag=1;lag<=max;lag++) {
    let value=0;
    for(let i=0;i<length;i++){const delta=samples[i]-samples[i+lag];value+=delta*delta;}
    sum+=value; difference[lag]=sum ? value*lag/sum : 1;
  }
  for(let lag=Math.max(2,min);lag<max;lag++) {
    if(difference[lag]>.12) continue;
    while(lag+1<max && difference[lag+1]<difference[lag]) lag++;
    const left=difference[lag-1],center=difference[lag],right=difference[lag+1];
    const denominator=left-2*center+right;
    const offset=denominator ? .5*(left-right)/denominator : 0;
    const frequency=rate/(lag+offset);
    return frequency>=65 && frequency<=1200 ? frequency : null;
  }
  return null;
}
function pitchInfo(frequency) {
  const midi=69+12*Math.log2(frequency/440), nearest=Math.round(midi);
  const labels=data.settings.lang==='es'?['Do','Do♯','Re','Re♯','Mi','Fa','Fa♯','Sol','Sol♯','La','La♯','Si']:['C','C♯','D','D♯','E','F','F♯','G','G♯','A','A♯','B'];
  return {midi,note:labels[(nearest%12+12)%12]+(Math.floor(nearest/12)-1),cents:Math.round((midi-nearest)*100)};
}
function syncTuner() {
  if(!$('micToggle')) return;
  $('micToggle').textContent=tt(tuner?'off':tunerPending?'pending':'on');
  $('micToggle').setAttribute('aria-pressed',String(!!tuner));
  if(!tuner)displayPitch(null,(data.settings.lang==='es'?'Activa el micrófono para ver tu voz.':'Enable the microphone to see your voice.'));
}
function stopTuner() {
  latestPitch=null;stopReference();
  tunerRequest++; tunerPending=false;
  if(tuner){clearInterval(tuner.interval);tuner.stream.getTracks().forEach(track=>track.stop());tuner.source.disconnect();tuner.context.close().catch(()=>{});tuner=null;}
  syncTuner();
}
async function toggleTuner() {
  if(tuner || tunerPending){stopTuner();return;}
  const request=++tunerRequest; tunerPending=true;syncTuner();
  let stream,context;
  try {
    if(!navigator.mediaDevices?.getUserMedia) throw Error('unavailable');
    const Audio=window.AudioContext||window.webkitAudioContext;
    context=new Audio();await context.resume();
    stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:false,noiseSuppression:false,autoGainControl:false},video:false});
    if(request!==tunerRequest || screen!=='training' || !$('micToggle')){stream.getTracks().forEach(track=>track.stop());await context.close();return;}
    const source=context.createMediaStreamSource(stream),analyser=context.createAnalyser();
    analyser.fftSize=4096;source.connect(analyser); // No connection to speakers: no feedback.
    tuner={stream,context,source,analyser,buffer:new Float32Array(analyser.fftSize),recent:[]};
    tunerPending=false;syncTuner();
    stream.getTracks().forEach(track=>track.onended=()=>{if(tuner?.stream===stream)stopTuner();});
    tuner.interval=setInterval(readPitch,100);
  } catch {
    stream?.getTracks().forEach(track=>track.stop());
    if(context && context.state!=='closed')context.close().catch(()=>{});
    if(request===tunerRequest){stopTuner();notify(tt('error'));}
  }
}
function readPitch() {
  if(!tuner || !$('pitchNote'))return;
  if(referenceTone||!data.session?.running){tuner.recent=[];displayPitch(null,data.settings.lang==='es'?'Pulsa Continuar para practicar.':'Press Resume to practice.');return;}
  tuner.analyser.getFloatTimeDomainData(tuner.buffer);
  const frequency=detectPitch(tuner.buffer,tuner.context.sampleRate);
  if(!frequency){tuner.recent=[];displayPitch(null);return;}
  tuner.recent.push(frequency);if(tuner.recent.length>3)tuner.recent.shift();
  const sorted=[...tuner.recent].sort((a,b)=>a-b);
  displayPitch(pitchInfo(sorted[Math.floor(sorted.length/2)]));
}

function renderTraining(){
  stopReference();latestPitch=null;trackOrigin=0;
  const focusId=document.activeElement?.id,s=data.session,e=current(),es=data.settings.lang==='es';
  $('app').classList.add('training-screen');
  $('app').innerHTML=`<section class="coach ${e.b>=3?'with-score':''}"><div class="coach-top"><button id="leaveTraining" class="quiet">${es?'Salir':'Exit'}</button><span>${t('block')} ${e.b+1} / 5</span><button id="openOptions" class="quiet" aria-label="${es?'Opciones de práctica':'Practice options'}">•••</button></div><div class="coach-heading"><div><span class="eyebrow">${es?'EJERCICIO':'EXERCISE'} ${s.index+1} / 19</span><h1>${tr(e.name)}</h1></div><div class="coach-clock"><span id="time" role="timer"></span><span id="phase"></span></div></div><div class="coach-stage">${e.b>=3?scoreMarkup(e):e.b===2?vocalGuide(e):exerciseGuide(e)}${e.b===1?'<div class="motion"><svg viewBox="0 0 150 80" aria-hidden="true"><path id="motionPath"/><circle id="motionDot" r="6"/></svg></div>':''}${e.b===0?'<div id="breathOrb" class="breathing-demo" aria-hidden="true"></div>':''}</div><div class="coach-bottom"><div class="coach-progress"><progress id="progress" max="100" aria-label="${t('progress')}"></progress><span id="percent"></span></div><div class="coach-controls"><button id="pause" class="primary"></button><button id="next"></button></div><p class="coach-next">${timeline(s.routine)[s.index+1]?t('upNext')+': '+tr(timeline(s.routine)[s.index+1].name):t('last')}</p></div></section><dialog id="practiceOptions" aria-labelledby="practiceOptionsTitle"><form method="dialog"><div class="section-heading"><h2 id="practiceOptionsTitle">${es?'Tu práctica':'Your practice'}</h2><button value="close" aria-label="${es?'Cerrar':'Close'}">×</button></div>${e.b>=2?exerciseGuide(e):''}${e.b>=3?`<label><span>${es?'Altura del ejemplo':'Example pitch'}</span><select id="pitchRange">${[[48,es?'Grave · Do3':'Low · C3'],[60,es?'Media · Do4':'Middle · C4'],[65,es?'Aguda · Fa4':'High · F4']].map(([value,label])=>`<option value="${value}" ${pitchBase===value?'selected':''}>${label}</option>`).join('')}</select></label><p class="muted">${es?'Melodía de ejemplo. Elige una altura cómoda. El micrófono se procesa aquí, sin grabación.':'Example melody. Choose a comfortable pitch. Microphone audio stays here, without recording.'}</p>`:''}<label><span>${t('auto')}</span><input id="trainingAuto" type="checkbox" ${data.settings.auto?'checked':''}></label><div class="practice-actions"><button id="previous" type="button">${t('previous')}</button><button id="reset" type="button">${t('reset')}</button><button id="finish" type="button">${t('finish')}</button></div></form></dialog>`;
  if(e.b<3||practicePattern(e).rhythm)stopTuner();
  $('leaveTraining').onclick=()=>navigate('home');
  $('openOptions').onclick=()=>{pauseForDialog();if($('practiceOptions'))$('practiceOptions').showModal();};
  if($('micToggle')){$('micToggle').onclick=toggleTuner;syncTuner();}
  if($('listenDemo'))$('listenDemo').onclick=playDemo;
  if($('pitchRange'))$('pitchRange').onchange=event=>{pitchBase=Number(event.target.value);renderTraining();};
  $('trainingAuto').onchange=event=>{data.settings.auto=event.target.checked;$('auto').checked=data.settings.auto;save();};
  $('previous').disabled=s.index===0;$('previous').onclick=()=>move(-1);$('next').onclick=()=>move(1);$('pause').onclick=togglePause;
  $('finish').onclick=()=>{if(confirm(t('confirmFinish')))finish();};
  $('reset').onclick=()=>{if(confirm(t('confirmReset'))){const routine=s.routine;finish(false);data.settings.routine=routine;start();}};
  updateDisplay();animateScore();
  if(focusId&&$(focusId)&&!$(focusId).disabled)$(focusId).focus({preventScroll:true});
}
function updateDisplay(){
  if(screen!=='training'||!data.session)return;
  const s=data.session,list=timeline(s.routine),e=list[s.index],elapsed=s.spent[s.index],remaining=e.duration-elapsed,percent=s.spent.reduce((a,x)=>a+x,0)/list.reduce((a,x)=>a+x.duration,0)*100;
  updateVocalGuide(e,elapsed);$('time').textContent=fmt(remaining);$('percent').textContent=`${Math.floor(percent)}%`;$('progress').value=percent;
  $('pause').textContent=remaining<=0?t('ready'):s.running?t('pause'):(data.settings.lang==='es'?'Continuar':'Resume');$('pause').disabled=remaining<=0;$('pause').classList.toggle('primary',remaining>0);$('next').classList.toggle('primary',remaining<=0);
  $('next').textContent=s.index===list.length-1?(data.settings.lang==='es'?'Finalizar':'Finish'):remaining<=0?t('next'):(data.settings.lang==='es'?'Saltar':'Skip');
  $('app').classList.toggle('paused',!s.running);
  let phase=remaining<=0?(data.settings.lang==='es'?'LISTO':'DONE'):!s.running?t('paused'):t('remaining');
  if(e.b===0){const cycle=elapsed%12;if(s.running&&remaining>0)phase=t(cycle<4?'inhale':'exhale');$('breathOrb').style.setProperty('--breath',cycle<4?.7+.4*cycle/4:1.1-.4*(cycle-4)/8);}
  if(e.b===1){const paths=['M 20 35 C 20 0 130 0 130 35 C 130 70 20 70 20 35','M 20 35 C 20 0 130 0 130 35 C 130 70 20 70 20 35','M 75 35 C 0 -20 0 90 75 35 C 150 -20 150 90 75 35','M 75 35 C 20 -15 130 -15 75 35 C 20 85 130 85 75 35'];$('motionPath').setAttribute('d',paths[e.j]);$('motionDot').style.offsetPath=`path('${paths[e.j]}')`;$('motionDot').style.offsetDistance=`${(elapsed%8)/8*100*(e.j===1?-1:1)}%`;}
  $('phase').textContent=phase;updateScore();
}
function tick(now=Date.now()){const s=data.session;if(!s||!s.running)return;let delta=Math.max(0,(now-s.last)/1000);s.last=now;let changed=false;const list=timeline(s.routine);while(delta>0&&s.running){const e=list[s.index],room=Math.max(0,e.duration-s.spent[s.index]),used=Math.min(room,delta);s.spent[s.index]+=used;s.practiced+=used;delta-=used;if(s.spent[s.index]>=e.duration){chime();if(!data.settings.auto){s.running=false;stopTuner();break;}if(s.index===list.length-1){finish();return;}s.index++;changed=true;}else break;}save();if(changed&&screen==='training')renderTraining();updateDisplay();}
function togglePause(){stopReference();unlockAudio();tick();if(!data.session)return;data.session.running=!data.session.running;if(!data.session.running)stopTuner();data.session.last=Date.now();save();updateDisplay();}
function pauseForDialog(){stopTuner();tick();if(data.session){data.session.running=false;save();updateDisplay();}}
function move(direction){tick();const s=data.session;if(!s)return;const list=timeline(s.routine);if(direction>0&&s.index===list.length-1){pauseForDialog();if(s.spent.every((v,i)=>v>=list[i].duration)||confirm(t('confirmFinish')))finish();return;}s.index=Math.max(0,Math.min(list.length-1,s.index+direction));s.last=Date.now();if(s.spent[s.index]>=list[s.index].duration)s.running=false;else s.running=true;save();renderTraining();}
function finish(show=true){stopTuner();const s=data.session;if(!s)return;const list=timeline(s.routine);const record={date:new Date().toISOString(),day:dateKey(),duration:s.practiced,routine:s.routine,complete:s.spent.every((v,i)=>v>=list[i].duration)};data.history.push(record);data.session=null;lastSummary=record;save();if(show){screen='summary';render();focusScreen();}}
function renderSummary(){const s=lastSummary;if(!s){screen='home';render();return;}$('app').innerHTML=`<section class="card summary"><div class="summary-icon" aria-hidden="true">${s.complete?'✧':'◌'}</div><span class="eyebrow">${t(s.complete?'complete':'incomplete')}</span><h1>${t(s.complete?'congrats':'partial')}</h1><p class="muted">${t('summary')}</p><div class="stats"><div class="stat"><strong>${fmt(s.duration)}</strong><span>${t('practice')}</span></div><div class="stat"><strong>${s.routine==='full'?24:10} min</strong><span>${t(s.routine)}</span></div></div><p class="tip">${t('gentle')}</p><button id="back" class="primary wide">${t('back')}</button></section>`;$('back').onclick=()=>navigate('home');}
function renderHistory(){$('app').innerHTML=`<span class="eyebrow">VOCALFLOW · ${t('activity')}</span><h1>${t('history')}</h1><div class="workspace"><section class="card">${data.history.length?data.history.slice().reverse().map(x=>`<div class="history-row"><div>${new Date(x.date).toLocaleDateString(locale(),{day:'numeric',month:'long',year:'numeric'})}<small>${t(x.routine==='quick'?'quick':'full')}</small></div><span>${fmt(x.duration)}</span><span class="${x.complete?'pill':'muted'}">${t(x.complete?'complete':'incomplete')}</span></div>`).join(''):`<p class="empty">${t('empty')}</p>`}</section><aside class="card">${statHTML()}${calendar()}</aside></div>`;bindCalendar();}
function navigate(next){if(screen==='training')pauseForDialog();screen=next;render();focusScreen();}
function focusScreen(){const heading=$('app').querySelector('h1');if(heading){heading.tabIndex=-1;heading.focus({preventScroll:true});}window.scrollTo({top:0,behavior:'instant'});}
function unlockAudio(){if(!data.settings.sound)return;try{const Audio=window.AudioContext||window.webkitAudioContext;if(Audio){audioContext??=new Audio();audioContext.resume().catch(()=>{});}}catch{}}
function chime(){if(!data.settings.sound||!audioContext||audioContext.state!=='running')return;try{const oscillator=audioContext.createOscillator(),gain=audioContext.createGain(),now=audioContext.currentTime;oscillator.type='sine';oscillator.frequency.setValueAtTime(660,now);gain.gain.setValueAtTime(0,now);gain.gain.linearRampToValueAtTime(.06,now+.03);gain.gain.exponentialRampToValueAtTime(.001,now+.5);oscillator.connect(gain);gain.connect(audioContext.destination);oscillator.start(now);oscillator.stop(now+.6);}catch{}}
document.querySelector('.brand').onclick=event=>{event.preventDefault();navigate('home');};
document.addEventListener('keydown',event=>{if(event.code!=='Space'||event.repeat||screen!=='training'||($('settings').open||$('practiceOptions')?.open)||event.target.closest('button,input,select,a,textarea,[contenteditable]'))return;event.preventDefault();if(data.session&&current().duration>data.session.spent[data.session.index])togglePause();});
$('homeNav').onclick=()=>navigate('home');$('historyNav').onclick=()=>navigate('history');$('settingsNav').onclick=()=>{pauseForDialog();$('settings').showModal();};$('language').onchange=e=>{data.settings.lang=e.target.value;save();render();};$('sound').onchange=e=>{data.settings.sound=e.target.checked;unlockAudio();save();};$('auto').onchange=e=>{data.settings.auto=e.target.checked;if($('trainingAuto'))$('trainingAuto').checked=data.settings.auto;save();};$('clearHistory').onclick=()=>{if(confirm(t('confirmClear'))){data.history=[];save();render();notify(t('saved'));}};
document.addEventListener('visibilitychange',()=>{if(document.hidden)stopTuner();tick();save();});window.addEventListener('pagehide',()=>{stopTuner();tick();save();});setInterval(()=>tick(),250);render();
