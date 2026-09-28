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

  joinParty(party) {
    if (!party.includes(this)) {
      party.push(this);
    }
  }

  leaveParty(party) {
    const index = party.indexOf(this);
    if (index !== -1) {
      party.splice(index, 1);
    }
  }
}

// líneas de prueba
const party = [];
const tara = new Player("Disturbia", 6);
const jocelin = new Player("Jocelin", 2);

tara.joinParty(party);
jocelin.joinParty(party);
tara.joinParty(party); // intento duplicado, no se agrega

console.log(party.map((p) => p.name)); // [ 'Disturbia', 'Jocelin' ]

tara.leaveParty(party);
console.log(party.map((p) => p.name)); // [ 'Jocelin' ]