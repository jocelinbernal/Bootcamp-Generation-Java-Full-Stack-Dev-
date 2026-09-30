class Producto {
  constructor(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
  }                                  // cierra el constructor

  mostrarInfo() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Precio: $${this.precio}`);
    console.log(`Disponible: ${this.disponible ? "Sí" : "No"}`);
  }                                  // cierra mostrarInfo

  cambiarDisponibilidad() {
    this.disponible = !this.disponible;
  }                                  // cierra cambiarDisponibilidad
}                                    // cierra la clase, solo UNA vez, al final

const producto1 = new Producto("Playera", 250, true);
const producto2 = new Producto("Gorra", 180, true);
const producto3 = new Producto("Mochila", 600, false);
const producto4 = new Producto("Termo", 320, true);

producto1.mostrarInfo();
producto2.mostrarInfo();
producto3.mostrarInfo();
producto4.mostrarInfo();

// Probar cambiarDisponibilidad()
producto3.cambiarDisponibilidad();
producto3.mostrarInfo(); // ahora debe decir "Sí"}

class Maquillaje extends Producto {
  constructor(nombre, precio, disponible, tono) {
    super(nombre, precio, disponible);
    this.tono = tono;
  }

  mostrarInfo() {
    super.mostrarInfo();
    console.log(`Tono: ${this.tono}`);
  }
}

const labial = new Maquillaje("Labial mate", 220, true, "Rojo cereza");
labial.mostrarInfo();