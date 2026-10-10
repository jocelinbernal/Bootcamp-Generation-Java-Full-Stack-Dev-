const prompt = require('prompt-sync')({ sigint: true })

// Type your code below this line!

function FriendsList() {
  this.names = []
}

const list = new FriendsList()
const cantidad = Number(prompt("¿Cuántos amigos? "))

for (let i = 1; i <= cantidad; i++) {
  list.names.push(prompt("Nombre " + i + ": "))
}

console.log(list.names)

// Type your code above this line!

