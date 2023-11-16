/*
6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/

class Libro {
    constructor(ISBN, titulo, autor, numPaginas) {
      this._ISBN = ISBN;
      this._titulo = titulo;
      this._autor = autor;
      this._numPaginas = numPaginas;
    }
  
    // Métodos get y set para ISBN
    get ISBN() {
      return this._ISBN;
    }
  
    set ISBN(nuevoISBN) {
      this._ISBN = nuevoISBN;
    }
  
    // Métodos get y set para Título
    get titulo() {
      return this._titulo;
    }
  
    set titulo(nuevoTitulo) {
      this._titulo = nuevoTitulo;
    }
  
    // Métodos get y set para Autor
    get autor() {
      return this._autor;
    }
  
    set autor(nuevoAutor) {
      this._autor = nuevoAutor;
    }
  
    // Métodos get y set para Número de Páginas
    get numPaginas() {
      return this._numPaginas;
    }
  
    set numPaginas(nuevoNumPaginas) {
      this._numPaginas = nuevoNumPaginas;
    }
  
    // Método para mostrar libro
    mostrarLibro() {
      document.write(`El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene ${this.numPaginas} páginas.<br>`);
    }
  }
  
  // Crear objetos libros
  const libro1 = new Libro('123456789', 'El Señor de los Anillos', 'J.R.R. Tolkien', 1000);
  const libro2 = new Libro('987654321', 'Harry Potter', 'J. K. Rowling', 500);
  
  //información de los libros
  document.write('<h1>Información de Libros</h1>');
  libro1.mostrarLibro();
  libro2.mostrarLibro();
  
  // libro que tiene más páginas
  if (libro1.numPaginas > libro2.numPaginas) {
    document.write('<p>El libro 1 tiene más páginas que el libro 2.</p>');
  } else if (libro1.numPaginas < libro2.numPaginas) {
    document.write('<p>El libro 2 tiene más páginas que el libro 1.</p>');
  } else {
    document.write('<p>Ambos libros tienen la misma cantidad de páginas.</p>');
  }