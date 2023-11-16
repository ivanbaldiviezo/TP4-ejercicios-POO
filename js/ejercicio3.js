/*
3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área


*/
class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  // metodos para modificar las propiedades
  setAlto(nuevoAlto) {
    this.alto = nuevoAlto;
  }

  setAncho(nuevoAncho) {
    this.ancho = nuevoAncho;
  }

  // metodo para mostrar las propiedades
  mostrarPropiedades() {
    document.write(`<p>Alto: ${this.alto}</p>`);
    document.write(`<p>Ancho: ${this.ancho}</p>`);
  }

  // metodo  para calcular el perímetro
  calcularPerimetro() {
    return 2 * (this.alto + this.ancho);
  }

  // metodo  para calcular el área
  calcularArea() {
    return this.alto * this.ancho;
  }
}

// Ejemplo 
const miRectangulo = new Rectangulo(5, 10);

document.write('<h1>Rectángulos</h1>');

document.write('<h3>Propiedades iniciales</h3>');
miRectangulo.mostrarPropiedades();

document.write('<h3>Modificando propiedades</h3>');
miRectangulo.setAlto(8);
miRectangulo.setAncho(12);
miRectangulo.mostrarPropiedades();

document.write(
  `<p>Perímetro: ${miRectangulo.calcularPerimetro()}</p>`
);
document.write(
  `<p>Área: ${miRectangulo.calcularArea()}</p>`
);
