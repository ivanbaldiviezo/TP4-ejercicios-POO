/*
7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
*/

class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}

class AgendaTelefonica {
  constructor(tamano = 10) {
    this.contactos = [];
    this.tamanoMaximo = tamano;
  }

  aniadirContacto(contacto) {
    if (this.agendaLlena()) {
      console.log("La agenda está llena. No se puede agregar más contactos.");
    } else {
      this.contactos.push(contacto);
      console.log(`Contacto ${contacto.nombre} añadido a la agenda.`);
    }
  }

  existeContacto(contacto) {
    return this.contactos.some(c => c.nombre === contacto.nombre);
  }

  listarContactos() {
    console.log("Lista de contactos:");
    this.contactos.forEach(contacto => {
      console.log(`Nombre: ${contacto.nombre}, Teléfono: ${contacto.telefono}`);
    });
  }

  buscarContacto(nombre) {
    const contactoEncontrado = this.contactos.find(c => c.nombre === nombre);
    if (contactoEncontrado) {
      console.log(`Nombre: ${contactoEncontrado.nombre}, Teléfono: ${contactoEncontrado.telefono}`);
    } else {
      console.log(`Contacto con nombre ${nombre} no encontrado.`);
    }
  }

  eliminarContacto(contacto) {
    const indice = this.contactos.findIndex(c => c.nombre === contacto.nombre);
    if (indice !== -1) {
      this.contactos.splice(indice, 1);
      console.log(`Contacto ${contacto.nombre} eliminado de la agenda.`);
    } else {
      console.log(`Contacto con nombre ${contacto.nombre} no encontrado en la agenda.`);
    }
  }

  agendaLlena() {
    return this.contactos.length >= this.tamanoMaximo;
  }

  huecosLibres() {
    return this.tamanoMaximo - this.contactos.length;
  }
}

// Menu
function mostrarMenu() {
  const agenda = new AgendaTelefonica();

  while (true) {
    const opcion = prompt(`\nSelecciona una opción:
      1. Añadir contacto
      2. Verificar existencia de contacto
      3. Listar contactos
      4. Buscar contacto por nombre
      5. Eliminar contacto
      6. Verificar si la agenda está llena
      7. Verificar huecos libres
      8. Salir`);

    switch (opcion) {
      case '1':
        const nombre = prompt("Ingrese el nombre del contacto:");
        const telefono = prompt("Ingrese el teléfono del contacto:");
        const nuevoContacto = new Contacto(nombre, telefono);
        agenda.aniadirContacto(nuevoContacto);
        break;

      case '2':
        const nombreExiste = prompt("Ingrese el nombre del contacto a verificar:");
        const contactoExiste = new Contacto(nombreExiste, "");
        console.log(`El contacto ${nombreExiste} ${agenda.existeContacto(contactoExiste) ? "existe" : "no existe"}.`);
        break;

      case '3':
        agenda.listarContactos();
        break;

      case '4':
        const nombreBuscar = prompt("Ingrese el nombre del contacto a buscar:");
        agenda.buscarContacto(nombreBuscar);
        break;

      case '5':
        const nombreEliminar = prompt("Ingrese el nombre del contacto a eliminar:");
        const contactoEliminar = new Contacto(nombreEliminar, "");
        agenda.eliminarContacto(contactoEliminar);
        break;

      case '6':
        console.log(`La agenda ${agenda.agendaLlena() ? "está llena" : "no está llena"}.`);
        break;

      case '7':
        console.log(`Huecos libres en la agenda: ${agenda.huecosLibres()}`);
        break;

      case '8':
        console.log("Saliendo del programa.");
        return;

      default:
        console.log("Opción no válida. Por favor, elija una opción válida.");
    }
  }
}

// Iniciar el programa
mostrarMenu();