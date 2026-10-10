// Cambiar el primer "Hola Mundo" a "Adiós"
const encabezados = document.querySelectorAll("h1");
encabezados[0].textContent = "Adiós";

// Cambiar el color de un encabezado a naranja
encabezados[3].style.color = "orange";

// Encabezado con clic que cambia a marrón
document.getElementById("clic").addEventListener("click", function () {
this.style.color = "brown";
});