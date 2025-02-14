const header = document.querySelector(".header");
const color = document.querySelector('[type="color"]');
const tamanio = document.querySelector('[type="range"]');

color.addEventListener("input", (e)=> {    
    const nuevoColor = e.target.value;
    header.style.color = nuevoColor;
});

tamanio.addEventListener("input", (e)=> {    
    const nuevoTamanio = e.target.value;
    header.style.fontSize = nuevoTamanio + "px";
});

