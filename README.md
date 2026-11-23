# VocalFlow

Entrenamiento vocal guiado en español e inglés. Elige **10 o 24 minutos** y sigue cinco bloques: respiración, movilidad de caderas, consonantes, falsete y canción.

Cada ejercicio muestra una figura con la posición de brazos y piernas, una instrucción breve y un temporizador. La guía principal permanece visible mientras practicas. En los ejercicios vocales, puedes desplegar la postura corporal y el afinador cuando los necesites.

## Empezar

Abre `index.html` o ejecuta:

```sh
python3 -m http.server 8000
```

Visita `http://localhost:8000`. No necesita instalación ni backend.

- **Pausar / Continuar:** controla el tiempo; también puedes usar Espacio.
- **Anterior / Saltar:** cambia de ejercicio. Saltar no cuenta como completarlo.
- **Opciones de sesión:** permite cambiar el avance automático, reiniciar o finalizar.
- **Guía vocal:** las consonantes alternan 6 segundos de sonido y 4 de descanso, sin acelerar las indicaciones en la rutina rápida. El círculo muestra el tiempo; el ejemplo visual indica qué sonido hacer.
- **Afinador opcional:** en falsete y canción, despliega el panel y activa el micrófono para ver la nota más cercana. El dial ilumina marcas fijas: el centro indica afinación cercana a la nota detectada. No evalúa tu técnica.

- **Notas de referencia:** pulsa Do3, Mi3, Sol3, Do4, Mi4 o Sol4 para escuchar un tono de 1,5 segundos y después imitarlo en una altura cómoda. Pulsa de nuevo para detenerlo. No necesitan micrófono; la detección se suspende mientras suenan.

La sesión se recupera en pausa al recargar. Ajustes permite cambiar el idioma, los sonidos y borrar el historial.

## Datos y micrófono

El progreso se guarda solo en este navegador. Borrar sus datos elimina el historial; no hay cuenta ni sincronización.

El afinador requiere permiso del micrófono y HTTPS o localhost. Procesa el audio en el dispositivo, sin grabarlo ni enviarlo. Se apaga al pausar, cerrar su panel o salir de la práctica. Funciona mejor con una sola vocal sostenida y sin acompañamiento.

## Publicar en GitHub Pages

Sube los cuatro archivos del proyecto a GitHub. En **Settings → Pages**, selecciona **Deploy from a branch → main → / (root)** y guarda.

## Personalizar

- `app.js`: ejercicios y tiempos (`names`, `details`, `timeline`), guías visuales (`exerciseGuide`) y traducciones.
- `style.css`: colores, tipografía y diseño adaptable.
- `index.html`: estructura principal.

Si cambias las duraciones, actualiza también los totales de las rutinas y `blocks.seconds`.
