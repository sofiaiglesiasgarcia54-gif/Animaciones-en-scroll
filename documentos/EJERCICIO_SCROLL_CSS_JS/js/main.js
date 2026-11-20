/* =========================================================
   main.js · TAREA 5 · Scroll suave con Lenis
   Docs: https://github.com/darkroomengineering/lenis
   =========================================================

   1. Enlaza en index.html el CSS y el JS de Lenis desde el CDN (huecos marcados).
   2. Crea aquí la instancia con autoRaf: true.
   3. Haz que los enlaces del menú bajen suave y dejen hueco a la cabecera
      (opción anchors con un offset negativo).
   4. Prueba a cambiar lerp (entre 0 y 1) y fíjate en la diferencia.

*/

// Escribe aquí tu código
// Lenis se encarga de su propio buvle de animación
// lerp:nivel de suavidad del smoothscroll entre 0 y 1
// anchors: activa la navegacion suavizada a las secciones desde los enlaces del menu
const lenis = new Lenis({
   autoRaf: true,
   lerp: 0.01,
   anchors: { offset: -60 }
})