export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.xp = 0;
    this.inventory = {};
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

  addItem(item, quantity = 1) {
    this.inventory[item] = (this.inventory[item] || 0) + quantity;
  }

  removeItem(item, quantity = 1) {
    if (!this.inventory[item]) {
      return; // no tiene ese item, no hay nada que quitar
    }

    this.inventory[item] -= quantity;

    if (this.inventory[item] <= 0) {
      delete this.inventory[item];
    }
  }
}

// líneas de prueba
const p = new Player("Tara", 6);

p.addItem("poción", 3);
p.addItem("espada");
p.addItem("poción", 2);
console.log(p.inventory); // { poción: 5, espada: 1 }

p.removeItem("poción", 2);
console.log(p.inventory); // { poción: 3, espada: 1 }

p.removeItem("espada");
console.log(p.inventory); // { poción: 3 }