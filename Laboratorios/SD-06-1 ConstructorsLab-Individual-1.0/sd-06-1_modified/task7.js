const prompt = require('prompt-sync')({ sigint: true })

// Type your code below this line!

function Car(make, model, year, color, doors, mileage, electric) {
  this.make = make
  this.model = model
  this.year = year
  this.color = color
  this.doors = doors
  this.mileage = mileage
  this.electric = electric

  this.describe = function () {
    const engine = this.electric ? "eléctrico" : "de combustión"
    console.log(this.make + " " + this.model + " " + this.year + ", color " + this.color)
    console.log(this.doors + " puertas, " + this.mileage + " km, motor " + engine)
  }
}

const make = prompt("Marca: ")
const model = prompt("Modelo: ")
const year = Number(prompt("Año: "))
const color = prompt("Color: ")
const doors = Number(prompt("Número de puertas: "))
const mileage = Number(prompt("Kilometraje: "))
const electric = prompt("¿Es eléctrico? (si/no): ") === "si"

const myCar = new Car(make, model, year, color, doors, mileage, electric)
myCar.describe()

// Type your code above this line!

