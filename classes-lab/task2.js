export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
}

// líneas de prueba
const p = new Player("Jocelin", 3);
console.log(p.name);  // "Jocelin"
console.log(p.level); // 3