/*
4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/

class Producto {
    constructor(codigo, nombre, precio) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.precio = precio;
    }
  
    // Método para imprimir datos
    imprimeDatos() {
      document.write(`<p>Código: ${this.codigo}</p>`);
      document.write(`<p>Nombre: ${this.nombre}</p>`);
      document.write(`<p>Precio: $${this.precio} </p>`);
      document.write('------------------------<br>');
    }
  }
  
  // Crear instancias de la clase Producto
  const producto1 = new Producto(1, 'Producto A', 20);
  const producto2 = new Producto(2, 'Producto B', 30);
  const producto3 = new Producto(3, 'Producto C', 25);
  
  //array
  const productosArray = [producto1, producto2, producto3];
  
  // Utilizar el método imprimeDatos para mostrar los valores de los objetos
  document.write('<h1>Lista de Productos</h1>');
  productosArray.forEach(producto => producto.imprimeDatos());