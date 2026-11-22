# VocalFlow — Daily Vocal Training

Aplicación de entrenamiento vocal diario con HTML, CSS y JavaScript vanilla. Funciona sin backend, frameworks, compilación ni servicios externos. Interfaz en español por defecto, con traducción completa al inglés.

## Funciones

- Rutina completa de **24 minutos** y rápida de **10 minutos**, con los mismos cinco bloques.
- Respiración de 4 segundos al inhalar y 8 al exhalar, movilidad de pelvis, cinco parejas de consonantes, falsete e integración en una canción.
- Temporizador circular, instrucciones, animaciones y progreso por bloque y sesión.
- Pausa, reanudación, navegación entre ejercicios, reinicio y finalización anticipada.
- Avance automático configurable y señales suaves con Web Audio API. No se reproducen ejemplos vocales sintetizados.
- Historial de sesiones completas e incompletas, racha diaria, minutos acumulados y calendario mensual.
- Guardado de sesión para continuar después de recargar; diseño responsive, teclado y soporte de movimiento reducido.

## Ejecutar localmente

Abre `index.html` en un navegador moderno. Para un origen estable de almacenamiento, es preferible servir la carpeta mediante un servidor estático, por ejemplo con Python:

```sh
python3 -m http.server 8000
```

Visita `http://localhost:8000`. No es necesario instalar paquetes. Los cuatro archivos deben permanecer juntos.

## Publicar en GitHub Pages

1. Sube `index.html`, `style.css`, `app.js` y `README.md` a la rama `main` del repositorio `vocalflow`.
2. En el repositorio, abre **Settings → Pages**.
3. Selecciona **Deploy from a branch**, rama **main**, carpeta **/ (root)** y guarda.
4. Abre la dirección que GitHub indique, normalmente `https://TU-USUARIO.github.io/vocalflow/`.

Las rutas de los recursos son relativas, por lo que funcionan dentro de `/vocalflow/`. No requiere claves ni configuración de backend.

## Uso y comportamiento

Selecciona una rutina y comienza. El ejercicio cambia automáticamente al agotarse el tiempo, incluso si la pestaña estuvo en segundo plano. El cálculo utiliza diferencias de timestamps, no un contador dependiente de la frecuencia del intervalo.

- Pausar detiene el tiempo de práctica y las indicaciones. Abrir ajustes o salir a inicio/actividad pausa la sesión.
- Recargar recupera el último progreso guardado **en pausa**. El tiempo con la página cerrada no se cuenta.
- Puedes activar o desactivar **Avance automático** directamente bajo el temporizador o desde Ajustes; la preferencia se conserva entre sesiones. Al agotarse el tiempo en modo manual, se destaca **Siguiente** (o **Finalizar entrenamiento** en el último ejercicio).
- Con avance automático desactivado, cada ejercicio espera a que pulses **Siguiente**. En el último ejercicio, ese botón muestra el resumen.
- Anterior y Siguiente conservan el tiempo acreditado de cada ejercicio. Un ejercicio ya terminado aparece a cero; puedes continuar al siguiente. Saltar uno no acredita el tiempo que falta.
- Solo se marca una sesión completa cuando todos sus ejercicios han agotado su duración. Finalizar antes guarda una sesión incompleta. Reiniciar guarda la práctica anterior y comienza otra desde cero.
- El sonido requiere interacción inicial del usuario y depende del navegador. Si no está disponible, el entrenamiento continúa normalmente.

Los cinco bloques completos duran 3, 4, 7, 5 y 5 minutos. La rutina rápida multiplica cada duración por `5 / 12` (600 segundos exactos); algunas duraciones contienen medios segundos, aunque la pantalla redondea hacia arriba. La respiración conserva su cadencia natural de 4/8 segundos. Cada pareja de consonantes usa 84 segundos en la rutina completa: cuatro repeticiones de 20 segundos, alternando sorda/sonora con sonido largo, descanso y pulsos, más cuatro segundos de transición. La guía se comprime proporcionalmente en la rutina rápida.

## Personalizar ejercicios y tiempos

En `app.js`:

- `blocks` contiene títulos, objetivos, instrucciones, iconos y duración total por bloque, en ambos idiomas.
- `names` y `details` contienen los subejercicios y sus indicaciones específicas.
- `timeline(routine)` determina las duraciones de cada ejercicio. Si cambias tiempos, actualiza también `blocks.seconds`, los totales visibles (24/10) y la proporción de la rutina rápida para mantenerlos coherentes.
- `copy` contiene los textos de interfaz ES/EN.
- `updateDisplay()` coordina las fases de respiración, movimientos y consonantes con el tiempo del ejercicio.

En `style.css`, las variables de `:root` definen la paleta y tipografía. No se descargan fuentes externas.

## Historial y privacidad

Todos los datos se guardan en `localStorage`, bajo la clave `vocalflow-v1`, en el navegador y origen utilizados. Incluyen ajustes, sesión en curso y registros con fecha local, timestamp, duración practicada, rutina y estado. Los totales y la racha se calculan a partir de los registros guardados, sin duplicar contadores.

La racha cuenta días locales consecutivos con al menos una sesión completa. Si hoy todavía no hay sesión completa, se conserva la racha que termine ayer. El calendario marca únicamente días con sesiones completas; el tiempo acumulado incluye también sesiones incompletas finalizadas.

No hay cuenta, sincronización entre dispositivos ni envío de datos. Borrar los datos del navegador elimina el progreso. **Ajustes → Borrar historial** pide confirmación y conserva los ajustes y la sesión en curso. Si el navegador bloquea el almacenamiento, se informa y la aplicación continúa en memoria.

## Verificación

Pruebas realizadas en Chrome headless con automatización externa al proyecto: totales de duración, recuperación tras intervalos largos, pausa, recarga, avance manual, sesión incompleta al saltar ejercicios, finalización de ambas rutinas, reinicio, finalización anticipada, borrado confirmado, cambio de idioma, movimiento reducido, almacenamiento bloqueado y ausencia de desbordamiento horizontal a 320 y 375 px. También se revisaron capturas de escritorio y móvil. La aplicación no tiene dependencias de pruebas.

## Guía de afinación en directo

En los bloques de falsete y canto, el pictograma se sustituye por un afinador cromático opcional. Pulsa **Activar micrófono** y canta una vocal sostenida: verás la nota más cercana con octava (Do/Do♯…Si en español; C/C♯…B en inglés), la desviación en cents y un indicador que se centra dentro de ±10 cents. La referencia es La4 = 440 Hz, con temperamento igual. No prescribe una nota objetivo ni evalúa la técnica vocal: compara el sonido con la nota cromática más cercana.

La detección local estima la frecuencia fundamental entre 65 y 1200 Hz mediante diferencia normalizada YIN, con filtrado de silencio y suavizado de tres lecturas. Está pensada para una sola voz sostenida; ruido, acompañamiento, consonantes sin voz y sonidos complejos pueden impedir la lectura o provocar errores de octava. No hay grabación, reproducción del micrófono, almacenamiento ni envío de audio.

El micrófono requiere autorización del navegador y un contexto seguro (GitHub Pages con HTTPS o localhost). Se apaga al pausar, salir del entrenamiento, finalizar, ocultar la pestaña o volver a bloques sin afinador. Denegar el permiso no interrumpe la rutina. Referencia de la API: [MDN: getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia).

Verificado con señales de 82 a 1046 Hz, incluidos armónicos, a 44,1 y 48 kHz; silencio, conversión a nota, circuito Web Audio, rechazo de permisos y cierre de pistas. Se revisó el diseño móvil a 375 px. La precisión con una voz y un micrófono físicos depende del entorno y no se ha verificado en esta sesión.

## Mejoras de interacción

La tecla Espacio pausa o reanuda el entrenamiento cuando el foco no está en otro control. Los botones distinguen **Saltar** (ejercicio pendiente) de **Siguiente** (ejercicio terminado), y conservan el foco al navegar. Los consejos reservan espacio para el texto más largo, evitando que los controles se desplacen durante la práctica. El inicio informa cuando existe una sesión guardada y el enlace del logotipo vuelve al inicio pausando la sesión.

Revisión de interfaz: 19 ejercicios en español e inglés a 320, 375, 768 y 1440 px, con pruebas de teclado, foco, estabilidad de los consejos, reanudación y finalización.
