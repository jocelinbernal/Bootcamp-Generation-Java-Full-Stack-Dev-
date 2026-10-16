const itemsContainer = document.querySelector("#list-items")

function addItem(item) {
  const colourCard = document.createElement("section")
  colourCard.className = "card w-75"
  itemsContainer.append(colourCard)

  const colourCardBody = document.createElement("article")
  colourCardBody.className = "card-body"
  colourCard.append(colourCardBody)

  const colourCardTitle = document.createElement("h5")
  colourCardTitle.className = "card-title"
  colourCardTitle.innerText = item.name
  colourCardBody.append(colourCardTitle)

  const colourCardText = document.createElement("p")
  colourCardText.className = "card-text"
  colourCardText.innerText = item.pantone_value
  colourCardBody.append(colourCardText)

  const colourCardColour = document.createElement("figure")
  colourCardColour.style = "background-color: " + item.color + ";"
  colourCardColour.innerText = item.color
  colourCardBody.append(colourCardColour)

  const colourCardBreak = document.createElement("br")
  itemsContainer.append(colourCardBreak)
}

function fetchColorsList() {
  fetch("https://reqres.in/api/unknown")
    .then((res) => res.json())                 // convierte la respuesta a objeto
    .then((response) => {
      // Tarea 3: guardar (localStorage solo guarda texto → stringify)
      localStorage.setItem("colors", JSON.stringify(response.data));
      // Tarea 2: dibujar cada color
      response.data.forEach(addItem);
    })
    .catch((err) => console.error("Error:", err));
}

function loadColorsFromStorage() {
  const stored = localStorage.getItem("colors");
  if (stored) {
    JSON.parse(stored).forEach(addItem);       // texto → objeto
  }
}

// Evita duplicados: usa storage si hay datos; si no, descarga
if (localStorage.getItem("colors")) {
  loadColorsFromStorage();
} else {
  fetchColorsList();
}

fetchColorsList()
loadColorsFromStorage()

document.querySelector("#clear-btn").addEventListener("click", () => {
  itemsContainer.innerHTML = "";
  localStorage.removeItem("colors");
});

document.querySelector("#load-btn").addEventListener("click", () => {
  itemsContainer.innerHTML = "";   // evita duplicados
  fetchColorsList();
});