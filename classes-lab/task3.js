export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  info() {
    console.log(`${this.name} has reached Level ${this.level}!`);
  }
}

// líneas de prueba
const p = new Player("Jocelin", 6);
p.info(); // "Jocelin has reached Level 6!"

const q = new Player("Disturbia", 2);
q.info(); // "Disturbia has reached Level 2!"