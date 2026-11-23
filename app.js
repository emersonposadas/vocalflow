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
{title:bi('Integración en una canción','Singing Integration'),goal:bi('Lleva esa libertad a tu canción favorita.','Bring that freedom into your favorite song.'),icon:'♫',seconds:300,steps:[bi('Elige una frase breve de una canción que te guste.','Choose a short phrase from a song you enjoy.'),bi('Mantén la respiración fluida y la pelvis libre mientras practicas.','Keep your breath flowing and your pelvis relaxed as you practice.'),bi('Conserva la misma facilidad al pasar del habla al canto.','Keep the same ease as you move from speech to singing.')]}
];
const names = [
[bi('Respiración y expansión costal','Breathing & Rib Expansion')],
[bi('Círculos de cadera · sentido horario','Hip circles · clockwise'),bi('Círculos de cadera · sentido antihorario','Hip circles · counterclockwise'),bi('Ocho horizontal','Horizontal figure eight'),bi('Ocho vertical','Vertical figure eight')],
['F / V','S / Z','SH / ZH','CH / J','TH / TH'].map(x=>bi(x,x)),
[bi('UUU ligero','Light UUU sound'),bi('Sirenas vocales suaves','Gentle vocal sirens'),bi('OO-HOO juguetón','Playful OO-HOO'),bi('Transiciones UUU-III-UUU','UUU-III-UUU transitions'),bi('Improvisación libre en falsete','Free falsetto improvisation')],
[bi('Recita una frase','Speak a song phrase'),bi('Practica el ritmo con VVV o ZZZ','Practice the rhythm with VVV or ZZZ'),bi('Canta la melodía con UUU','Sing the melody using UUU'),bi('Canta la letra original','Sing the original lyrics')]
];
const details = [[],[
bi('Dibuja un círculo lento con la pelvis en sentido horario.','Draw a slow clockwise circle with your pelvis.'),bi('Invierte el sentido del círculo, con la misma suavidad.','Reverse the circle, keeping the same ease.'),bi('Dibuja un ocho paralelo al suelo, alternando una cadera y la otra.','Draw a figure eight parallel to the floor, alternating hips.'),bi('Dibuja un ocho vertical con la pelvis, elevando y bajando cada lado suavemente.','Draw a vertical figure eight with your pelvis, gently raising and lowering each side.')],[],[
bi('Deja salir un UUU fino y ligero en una nota cómoda.','Release a thin, light UUU on a comfortable note.'),bi('Desliza la voz suavemente hacia arriba y abajo, en un rango cómodo.','Slide gently up and down within a comfortable range.'),bi('Prueba un OO-HOO alegre y suave, dejando espacio entre repeticiones.','Try a playful, soft OO-HOO with space between repetitions.'),bi('Alterna UUU, III y UUU sin aumentar el volumen.','Alternate UUU, III, and UUU without increasing volume.'),bi('Juega con pequeñas melodías ligeras, descansando entre frases.','Play with small, light melodies, resting between phrases.')],[
bi('Recita la frase como si se la contaras a alguien.','Speak the phrase as if telling it to someone.'),bi('Sustituye las palabras por VVV o ZZZ siguiendo el ritmo.','Replace the words with VVV or ZZZ, following the rhythm.'),bi('Canta las notas con UUU y conserva un flujo de aire cómodo.','Sing the notes on UUU with a comfortable airflow.'),bi('Vuelve a la letra y mantén la coordinación que has explorado.','Return to the lyrics and retain the coordination you explored.')]];
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
function renderHome(){$('app').innerHTML=`<section class="hero"><div class="intro"><span class="eyebrow">${t('tag')}</span><h1>${t('hello')}</h1><p class="muted">${t('intro')}</p></div><div class="hero-art" aria-hidden="true"><div class="orb"></div><div class="orbit"></div><div class="orbit second"></div><span class="art-caption">BREATHE · MOVE · SING</span></div></section><div class="workspace"><section class="card"><div class="section-heading"><h2>${t('daily')}</h2><span class="pill">${t('five')}</span></div><div class="routine-options">${['full','quick'].map(r=>`<button class="routine-option ${data.settings.routine===r?'selected':''}" data-routine="${r}" aria-pressed="${data.settings.routine===r}"><strong>${r==='full'?24:10} min</strong><span>${t(r)}</span></button>`).join('')}</div><button id="start" class="primary wide">${t(data.session?'resume':'start')}</button><p class="small-note">${data.session?(data.settings.lang==='es'?'Tu sesión está guardada. Continúa donde lo dejaste.':'Your session is saved. Pick up where you left off.'):t('note')}</p><div class="blocks"><span class="eyebrow">${t('journey')}</span>${blocks.map(b=>`<div class="block"><span class="block-icon" aria-hidden="true">${b.icon}</span><div class="block-name">${tr(b.title)}</div><span class="block-time">${fmt(b.seconds*(data.settings.routine==='quick'?5/12:1))}</span></div>`).join('')}</div></section><aside class="card"><h2>${t('activity')}</h2>${statHTML()}${calendar()}<p class="quote">${t('quote')}</p><button id="viewHistory" class="wide">${t('history')}</button></aside></div>`;
document.querySelectorAll('[data-routine]').forEach(el=>{el.disabled=!!data.session;el.onclick=()=>{data.settings.routine=el.dataset.routine;save();render();};});$('start').onclick=start;$('viewHistory').onclick=()=>navigate('history');bindCalendar();}
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
function tunerMarkup() {
  return `<div class="tuner" aria-label="${tt('label')}"><div class="tuner-reading"><strong id="pitchNote">—</strong><span id="pitchStatus">${tt('idle')}</span><span id="pitchCents"></span></div><div class="pitch-meter" aria-hidden="true"><span class="pitch-center"></span><i id="pitchNeedle" hidden></i></div><div class="tuner-meta"><span>♭</span><span>${tt('hint')}</span><span>♯</span></div><button id="micToggle" type="button" aria-pressed="false">${tt('on')}</button><small>${tt('privacy')}</small></div>`;
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
  return {note:labels[(nearest%12+12)%12]+(Math.floor(nearest/12)-1),cents:Math.round((midi-nearest)*100)};
}
function syncTuner() {
  if(!$('micToggle')) return;
  $('micToggle').textContent=tt(tuner?'off':tunerPending?'pending':'on');
  $('micToggle').setAttribute('aria-pressed',String(!!tuner));
  if(!tuner) {$('pitchNote').textContent='—';$('pitchStatus').textContent=tt('idle');$('pitchCents').textContent='';$('pitchNeedle').hidden=true;}
}
function stopTuner() {
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
  tuner.analyser.getFloatTimeDomainData(tuner.buffer);
  const frequency=detectPitch(tuner.buffer,tuner.context.sampleRate);
  if(!frequency){tuner.recent=[];tuner.smoothedCents=null;tuner.lastNote=null;$('pitchNote').textContent='—';$('pitchCents').textContent='';$('pitchStatus').textContent=tt('listen');$('pitchNeedle').hidden=true;return;}
  tuner.recent.push(frequency);if(tuner.recent.length>3)tuner.recent.shift();
  const sorted=[...tuner.recent].sort((a,b)=>a-b),info=pitchInfo(sorted[Math.floor(sorted.length/2)]);
  $('pitchNote').textContent=info.note;
  $('pitchCents').textContent=`${info.cents>0?'+':''}${info.cents} ¢`;
  $('pitchStatus').textContent=tt(Math.abs(info.cents)<=10?'tuned':info.cents<0?'low':'high');
  // Dampen small pitch fluctuations while keeping the note and cents readout exact.
  // Reset the filter on note changes: cents are relative to each note's center.
  if(tuner.lastNote!==info.note || tuner.smoothedCents==null) tuner.smoothedCents=info.cents;
  else tuner.smoothedCents+=(info.cents-tuner.smoothedCents)*.28;
  tuner.lastNote=info.note;
  $('pitchNeedle').hidden=false;$('pitchNeedle').style.left=`${50+tuner.smoothedCents}%`;
  $('pitchNeedle').classList.toggle('in-tune',Math.abs(info.cents)<=10);
}

function renderTraining(){const focusId=document.activeElement?.id;const s=data.session,e=current(),b=blocks[e.b];
$('app').classList.add('training-screen');
$('app').innerHTML=`<section class="card training-session ${e.b>=2?'vocal-session':''}">
  <div class="training-head"><span class="eyebrow">VOCALFLOW · ${t('daily')}</span><h1>${tr(e.name)}</h1><div class="section-heading"><span class="pill">${t('block')} ${e.b+1} ${t('of')} 5</span></div></div>
  <div class="timer-card">
    <div class="timer"><div class="breath-orb" id="breathOrb"></div><svg viewBox="0 0 280 280" aria-hidden="true"><circle cx="140" cy="140" r="130"/><circle id="timerRing" class="elapsed" cx="140" cy="140" r="130"/></svg><div class="timer-content"><div id="phase" class="phase" aria-live="off"></div><div id="time" class="time" role="timer"></div><div class="timer-caption">${t('remaining')}</div></div></div>
    ${e.b>=2?`<details class="posture-details"><summary>${data.settings.lang==='es'?'Cómo colocar el cuerpo':'Body position'}</summary>${exerciseGuide(e)}</details>`:exerciseGuide(e)}
    ${vocalGuide(e)}
    <div class="exercise-visual">${e.b===1?'<div class="motion"><svg viewBox="0 0 150 80" aria-hidden="true"><path id="motionPath"/><circle id="motionDot" r="6"/></svg></div>':e.b>=3?`<details class="optional-tuner"><summary>${data.settings.lang==='es'?'Afinador opcional':'Optional tuner'}</summary>${tunerMarkup()}</details>`:''}</div>
  </div>
  <div class="session-progress"><div><div class="progress-heading"><span>${t('blockProgress')}</span><span id="blockPercent"></span></div><progress id="blockProgress" max="100" aria-label="${t('blockProgress')}"></progress></div><div><div class="progress-heading"><span>${t('progress')}</span><span id="percent"></span></div><progress id="progress" max="100" aria-label="${t('progress')}"></progress></div></div>
  <details class="session-options"><summary>${data.settings.lang==='es'?'Opciones de sesión':'Session options'}</summary><label class="advance-option"><input id="trainingAuto" type="checkbox" ${data.settings.auto?'checked':''}><span>${t('auto')}<small>${data.settings.lang==='es'?'Desactívalo para continuar con Siguiente.':'Turn off to continue with Next.'}</small></span></label>
  <div class="training-bottom"><button id="reset">${t('reset')}</button><button id="finish">${t('finish')}</button></div></details>
  <div class="controls"><button id="previous">${t('previous')}</button><button id="pause" class="primary"></button><button id="next">${t('next')}</button></div>

</section>`;
if(e.b<3)stopTuner();const tunerPanel=document.querySelector('.optional-tuner');if(tunerPanel)tunerPanel.ontoggle=()=>{if(!tunerPanel.open)stopTuner();};if($('micToggle')){$('micToggle').onclick=toggleTuner;syncTuner();}
$('trainingAuto').onchange=event=>{tick();data.settings.auto=event.target.checked;$('auto').checked=data.settings.auto;save();updateDisplay();};$('previous').disabled=s.index===0;$('previous').onclick=()=>move(-1);$('next').onclick=()=>move(1);$('pause').onclick=togglePause;$('finish').onclick=()=>{pauseForDialog();if(confirm(t('confirmFinish')))finish();};$('reset').onclick=()=>{pauseForDialog();if(confirm(t('confirmReset'))){const routine=s.routine;finish(false);data.settings.routine=routine;start();}};updateDisplay();if(focusId&&$(focusId)&&!$(focusId).disabled)$(focusId).focus({preventScroll:true});}
function updateDisplay(){if(screen!=='training'||!data.session)return;const s=data.session,list=timeline(s.routine),e=list[s.index],elapsed=s.spent[s.index],remaining=e.duration-elapsed,percent=s.spent.reduce((a,x)=>a+x,0)/list.reduce((a,x)=>a+x.duration,0)*100;const blockTotal=list.filter(x=>x.b===e.b).reduce((a,x)=>a+x.duration,0),blockSpent=list.reduce((a,x,i)=>a+(x.b===e.b?s.spent[i]:0),0);updateVocalGuide(e,elapsed);$('time').textContent=fmt(remaining);$('timerRing').style.strokeDashoffset=817*elapsed/e.duration;$('percent').textContent=`${Math.floor(percent)}%`;$('progress').value=percent;$('blockPercent').textContent=`${Math.floor(blockSpent/blockTotal*100)}%`;$('blockProgress').value=blockSpent/blockTotal*100;$('pause').textContent=remaining<=0?t('ready'):s.running?t('pause'):(data.settings.lang==='es'?'Continuar':'Resume');$('pause').disabled=remaining<=0;$('pause').classList.toggle('primary',remaining>0);$('next').classList.toggle('primary',remaining<=0);$('next').textContent=s.index===list.length-1?(data.settings.lang==='es'?'Finalizar':'Finish'):remaining<=0?t('next'):(data.settings.lang==='es'?'Saltar':'Skip');$('next').setAttribute('aria-label',s.index===list.length-1?t('finish'):remaining<=0?t('next'):(data.settings.lang==='es'?'Saltar este ejercicio':'Skip this exercise'));$('app').classList.toggle('paused',!s.running);let phase=remaining<=0?(data.settings.lang==='es'?'LISTO':'DONE'):!s.running?t('paused'):(data.settings.lang==='es'?'SIN PRISA':'TAKE IT EASY');if(e.b===0){const cycle=elapsed%12;if(s.running&&remaining>0)phase=t(cycle<4?'inhale':'exhale');$('breathOrb').style.setProperty('--breath',cycle<4?.7+.4*cycle/4:1.1-.4*(cycle-4)/8);}else{$('breathOrb').style.setProperty('--breath',1);}
if(e.b===1){const paths=['M 20 35 C 20 0 130 0 130 35 C 130 70 20 70 20 35','M 20 35 C 20 0 130 0 130 35 C 130 70 20 70 20 35','M 75 35 C 0 -20 0 90 75 35 C 150 -20 150 90 75 35','M 75 35 C 20 -15 130 -15 75 35 C 20 85 130 85 75 35'];$('motionPath').setAttribute('d',paths[e.j]);$('motionDot').style.offsetPath=`path('${paths[e.j]}')`;$('motionDot').style.offsetDistance=`${(elapsed%8)/8*100*(e.j===1?-1:1)}%`;}
if($('phase').textContent!==phase)$('phase').textContent=phase;}
function tick(now=Date.now()){const s=data.session;if(!s||!s.running)return;let delta=Math.max(0,(now-s.last)/1000);s.last=now;let changed=false;const list=timeline(s.routine);while(delta>0&&s.running){const e=list[s.index],room=Math.max(0,e.duration-s.spent[s.index]),used=Math.min(room,delta);s.spent[s.index]+=used;s.practiced+=used;delta-=used;if(s.spent[s.index]>=e.duration){chime();if(!data.settings.auto){s.running=false;stopTuner();break;}if(s.index===list.length-1){finish();return;}s.index++;changed=true;}else break;}save();if(changed&&screen==='training')renderTraining();updateDisplay();}
function togglePause(){unlockAudio();tick();if(!data.session)return;data.session.running=!data.session.running;if(!data.session.running)stopTuner();data.session.last=Date.now();save();updateDisplay();}
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
document.addEventListener('keydown',event=>{if(event.code!=='Space'||event.repeat||screen!=='training'||$('settings').open||event.target.closest('button,input,select,a,textarea,[contenteditable]'))return;event.preventDefault();if(data.session&&current().duration>data.session.spent[data.session.index])togglePause();});
$('homeNav').onclick=()=>navigate('home');$('historyNav').onclick=()=>navigate('history');$('settingsNav').onclick=()=>{pauseForDialog();$('settings').showModal();};$('language').onchange=e=>{data.settings.lang=e.target.value;save();render();};$('sound').onchange=e=>{data.settings.sound=e.target.checked;unlockAudio();save();};$('auto').onchange=e=>{data.settings.auto=e.target.checked;if($('trainingAuto'))$('trainingAuto').checked=data.settings.auto;save();};$('clearHistory').onclick=()=>{if(confirm(t('confirmClear'))){data.history=[];save();render();notify(t('saved'));}};
document.addEventListener('visibilitychange',()=>{if(document.hidden)stopTuner();tick();save();});window.addEventListener('pagehide',()=>{stopTuner();tick();save();});setInterval(()=>tick(),250);render();
