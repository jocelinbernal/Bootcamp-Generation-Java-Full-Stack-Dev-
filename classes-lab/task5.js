export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.xp = 0;
  }

  info() {
    console.log(`${this.name} has reached Level ${this.level}!`);
  }

  levelUp() {
    this.level += 1;
  }

  gainExperience(points) {
    this.xp += points;

    while (this.xp >= 100) {
      this.xp -= 100;
      this.levelUp();
    }
  }
}

// líneas de prueba
const p = new Player("Jocelin", 1);
p.gainExperience(60);
console.log(p.level, p.xp); // 1 60
p.gainExperience(70);
console.log(p.level, p.xp); // 2 30
p.gainExperience(250);
console.log(p.level, p.xp); // 4 80