const prompt = require('prompt-sync')({ sigint: true })

// Type your code below this line!

function ShoppingList() {
  this.items = []

  this.addItem = function (name, quantity) {
    this.items.push({ name: name, quantity: quantity })
  }

  this.printList = function () {
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.items[i].quantity + " x " + this.items[i].name)
    }
  }
}

const list = new ShoppingList()
const total = Number(prompt("¿Cuántos productos? "))

for (let i = 1; i <= total; i++) {
  const name = prompt("Producto " + i + ": ")
  const quantity = Number(prompt("Cantidad de " + name + ": "))
  list.addItem(name, quantity)
}

list.printList()

// Type your code above this line!

