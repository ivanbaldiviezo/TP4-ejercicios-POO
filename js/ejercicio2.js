/* 
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
*/

const cuenta = {
  titular: "Alex",
  saldo: 0,

  //método para ingresar dinero a la cuenta
  ingresar: function (cantidad) {
    if (cantidad > 0) {
      this.saldo += cantidad;
      this.informar("Ingreso de dinero de:", cantidad);
    }
  },

  // método para extraer dinero de la cuenta
  extraer: function (cantidad) {
    if (cantidad > 0 && cantidad <= this.saldo) {
      this.saldo -= cantidad;
      this.informar("Extracción de dinero de:", cantidad);
    }
  },

  // método para informar el estado de la cuenta
  informar: function (operacion, cantidad) {
    document.write("<p>------------------------</p>");
    document.write(`<p>Titular: ${this.titular}</p>`);
    document.write(`<p>${operacion}</p>`);
    document.write(`<p>${cantidad}</p>`);
    document.write(`<p>Saldo actual: $${this.saldo}</p>`);
  },
};

//mostrar información inicial de la cuenta
document.write("<h1>Cuenta Bancaria</h1>");
cuenta.informar("Inicio", 0);

//Ingresar dinero
cuenta.ingresar(100);

//Extraer dinero
cuenta.extraer(30);

//Mostrar información después de las transacciones
cuenta.informar("Fin", "");
