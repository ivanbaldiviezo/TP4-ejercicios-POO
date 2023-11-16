/*
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.

*/

class Persona {
  constructor(nombre, edad, sexo, peso, altura, añoNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.DNI = this.generaDNI();
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.añoNacimiento = añoNacimiento;
  }

  // Método para mostrar la generación
  mostrarGeneracion() {
    const generacion = this.calcularGeneracion();
    document.write(
      `<p>${this.nombre} pertenece a la generación ${generacion}.</p>`
    );
  }

  // Método para calcular la generación 
  calcularGeneracion() {
    if (this.añoNacimiento >= 1930 && this.añoNacimiento <= 1948) {
      return "Silent Generation";
    } else if (this.añoNacimiento >= 1949 && this.añoNacimiento <= 1968) {
      return "Baby Boom";
    } else if (this.añoNacimiento >= 1969 && this.añoNacimiento <= 1980) {
      return "Generation X";
    } else if (this.añoNacimiento >= 1981 && this.añoNacimiento <= 1993) {
      return "Generation Y (millennials)";
    } else if (this.añoNacimiento >= 1994 && this.añoNacimiento <= 2010) {
      return "Generation Z";
    }
  }

  // Método para verificar si es mayor de edad
  esMayorDeEdad() {
    return this.edad >= 18;
  }

  // Método para mostrar datos del objeto
  mostrarDatos() {
    document.write(`<h2>Datos de ${this.nombre}</h2>`);
    document.write(`<p>Nombre: ${this.nombre}</p>`);
    document.write(`<p>Edad: ${this.edad} años</p>`);
    document.write(`<p>DNI: ${this.DNI}</p>`);
    document.write(`<p>Sexo: ${this.sexo}</p>`);
    document.write(`<p>Peso: ${this.peso} kg</p>`);
    document.write(`<p>Altura: ${this.altura} cm</p>`);
    document.write(`<p>Año de Nacimiento: ${this.añoNacimiento}</p>`);
    document.write(
      `<p>Es mayor de edad: ${this.esMayorDeEdad() ? "Sí" : "No"}</p>`
    );
    this.mostrarGeneracion();
  }

  // Método para generar un DNI aleatorio
  generaDNI() {
    return Math.floor(Math.random() * 90000000) + 10000000;
  }
}

// Ejemplo en Persona
const persona1 = new Persona("Juan", 25, "H", 70, 175, 1997);
const persona2 = new Persona("Ana", 30, "M", 60, 160, 1992);

document.write("<h1>Información de Personas</h1>");
persona1.mostrarDatos();
document.write("------------------------<br>");
persona2.mostrarDatos();
