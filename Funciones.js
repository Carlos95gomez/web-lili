alert( 'Aún no esta lista' );
function rotarIzquierdaYDerecha(elemento) {
    elemento.style.transform = 'rotate(-18deg)';
    setTimeout(() => {
      elemento.style.transform = 'rotate(18deg)';
    }, 200); // Ajusta el tiempo de espera según tus preferencias
    setTimeout(() => {
      elemento.style.transform = 'rotate(0deg)';
    }, 500); // Ajusta el tiempo de espera según tus preferencias
  }