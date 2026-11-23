# VocalFlow

Entrenamiento vocal guiado en español e inglés. Elige **10 o 24 minutos** y sigue cinco bloques: respiración, movilidad de caderas, consonantes, falsete y práctica de una frase.

La pantalla de práctica muestra una guía, el tiempo y dos controles principales. Las opciones secundarias se reúnen en **•••**.

## Empezar

Abre `index.html` o ejecuta:

```sh
python3 -m http.server 8000
```

Visita `http://localhost:8000`. No necesita instalación ni backend.

- **Pausar / Continuar:** controla el tiempo; también puedes usar Espacio.
- **Saltar / Siguiente:** cambia de ejercicio. Saltar no cuenta como completarlo.
- **•••:** postura corporal, altura del ejemplo, avance automático, ejercicio anterior, reinicio y finalización. Abrirlo pausa la práctica.
- **Salir:** vuelve al inicio y guarda la sesión en pausa.

En falsete y en el bloque final, una pista muestra los sonidos como bloques. Su altura representa la nota y su longitud, la duración. Sigue la línea y la sílaba resaltada; respira en los espacios. El bloque final usa la frase de ejemplo «Hoy quiero cantar» (en inglés, «I want to sing now»).

**Escuchar ejemplo** reproduce la melodía con tonos sintetizados y pausa el ejercicio. Después, pulsa Continuar para practicar la frase desde el principio. En **••• → Altura del ejemplo** puedes elegir un registro grave, medio o agudo. La pista es orientativa: elige una altura cómoda, sin forzar.

**Activar micrófono** añade un punto que muestra tu voz sobre la pista. El bloque activo se ilumina al aproximarte a su nota (±25 cents). El modo hablado y el de consonantes rítmicas muestran solo el ritmo; no califican la afinación. No hay puntuación ni grabación. La guía sigue funcionando sin micrófono.

La sesión se recupera en pausa al recargar. El historial y los ajustes generales están en el inicio.

## Datos y micrófono

El progreso se guarda solo en este navegador. Borrar sus datos elimina el historial; no hay cuenta ni sincronización.

La detección de voz requiere permiso del micrófono y HTTPS o localhost. Procesa el audio en el dispositivo, sin grabarlo ni enviarlo. Se apaga al pausar, abrir opciones o salir de la práctica. Funciona mejor con una sola vocal sostenida y sin acompañamiento.

## Publicar en GitHub Pages

Sube los cuatro archivos del proyecto a GitHub. En **Settings → Pages**, selecciona **Deploy from a branch → main → / (root)** y guarda.

## Personalizar

- `app.js`: ejercicios y tiempos (`names`, `details`, `timeline`), guías visuales (`exerciseGuide`, `practicePattern`, `scoreMarkup`) y traducciones.
- `style.css`: colores, tipografía y diseño adaptable.
- `index.html`: estructura principal.

Si cambias las duraciones, actualiza también los totales de las rutinas y `blocks.seconds`.
