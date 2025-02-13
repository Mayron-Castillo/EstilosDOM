const header = document.querySelector(".header");
const color = document.querySelector('[type="color"]');
const tamanio = document.querySelector('[type="range"]');

color.addEventListener("input", function(e){    
    const nuevoColor = e.target.value;
    header.style.color = nuevoColor;
});

tamanio.addEventListener("input", function(e){    
    const nuevoTamanio = e.target.value;
    header.style.fontSize = nuevoTamanio + "px";
});