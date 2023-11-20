/*
8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".
*/

class Persona {
    constructor(nombre, edad, profesion) {
      this.nombre = nombre;
      this.edad = edad;
      this.profesion = profesion;
    }
  
    saludar() {
      console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}`);
    }
  
    despedirse() {
      console.log(`Un gusto, hasta luego`);
    }
  }
  
  // objetos de la clase persona
  const persona1 = new Persona("Juan", 30, "Progamador");
  const persona2 = new Persona("Ana", 25, "Doctora");
  
  // Ejecutar los metodos
  persona1.saludar();
  persona2.saludar();
  
  persona1.despedirse();
  persona2.despedirse();