export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  info() {
    console.log(`${this.name} has reached Level ${this.level}!`);
  }

  levelUp() {
    this.level += 1;
  }
}

// líneas de prueba
const p = new Player("Jocelin", 6);
p.info();    // "Jocelin has reached Level 6!"
p.levelUp();
p.info();    // "Jocelin has reached Level 7!"

const q = new Player("Disturbia", 2);
q.levelUp();
q.info();    // "Disturbia has reached Level 3!"
p.info();    // "Jocelin has reached Level 7!"