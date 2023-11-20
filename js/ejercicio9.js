/*
9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. 
*/

class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

// Se utiliza extends para crear una relacion de herencia entre dos clases
class Perro extends Animal {
  constructor(nombre, edad, raza) {
    super(nombre, edad);
    this.raza = raza;
  }

  emitirSonido() {
    console.log("Guau");
  }
}

class Gato extends Animal {
  constructor(nombre, edad, color) {
    super(nombre, edad);
    this.color = color;
  }

  emitirSonido() {
    console.log("Miau");
  }
}

// objetos
const perro1 = new Perro("Maia", 3, "Caniche"); 
const gato1 = new Gato("Bengi", 2, "Blanco");

// ejecutar los metodos
console.log("Sonido del perro:");
perro1.emitirSonido();
console.log(
  `Nombre: ${perro1.nombre}, Edad: ${perro1.edad}, Raza: ${perro1.raza}`
);

console.log("\nSonido del gato:");
gato1.emitirSonido();
console.log(
  `Nombre: ${gato1.nombre}, Edad: ${gato1.edad}, Color: ${gato1.color}`
);
