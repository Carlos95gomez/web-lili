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
  
  function createColors(container, colors) {

    colors.forEach(color => {
  
      const square = document.createElement("div");
  
      square.style.width = "20px";
      square.style.height = "20px";
      square.style.backgroundColor = color;  
      square.style.border = "1px solid black";
  
      container.appendChild(square);
  
    });
  
  }
  
  const colors1 = ["white", "black", "red"];
  const colors2 = ["black", "white", "red", "royalblue", "maroon", "navy", "#B76E79"];
  
  document.addEventListener("DOMContentLoaded", () => {
  
    const containers = document.querySelectorAll(".colors, .colors2");
  
    containers.forEach(container => {
  
      if(container.classList.contains("colors")) {
        createColors(container, colors1);
      }
      else if(container.classList.contains("colors2")) {
        createColors(container, colors2); 
      }
  
    });
  
  });