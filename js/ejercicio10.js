/*
10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.
*/

class Avion {
    constructor(nombre, capacidad, destino) {
        this.nombre = nombre;
        this.capacidad = capacidad;
        this.destino = destino;
        this.listaPasajeros = [];
    }

    abordar(pasajero) {
        if (this.listaPasajeros.length < this.capacidad) {
            this.listaPasajeros.push(pasajero);
            console.log(`Pasajero ${pasajero} abordado en el avión ${this.nombre}.`);
        } else {
            console.log(`¡El avión ${this.nombre} está lleno! No se puede abordar a más pasajeros.`);
        }
    }
}

class Aeropuerto {
    constructor(nombreAeropuerto) {
        this.nombreAeropuerto = nombreAeropuerto;
        this.listaAviones = [];
    }

    agregarAvion(avion) {
        this.listaAviones.push(avion);
        console.log(`Avión ${avion.nombre} agregado al aeropuerto ${this.nombreAeropuerto}.`);
    }

    buscarAvion(nombreAvion) {
        return this.listaAviones.find(avion => avion.nombre === nombreAvion);
    }
}

// Crear el aeropuerto
const aeropuertoInternacional = new Aeropuerto("Aeropuerto Internacional");

// Crear 3 aviones con diferentes destinos
const avion1 = new Avion("Avion1", 150, "New York");
const avion2 = new Avion("Avion2", 200, "London");
const avion3 = new Avion("Avion3", 100, "Tokyo");

// Agregar los 3 aviones al aeropuerto
aeropuertoInternacional.agregarAvion(avion1);
aeropuertoInternacional.agregarAvion(avion2);
aeropuertoInternacional.agregarAvion(avion3);

// Solicitar que elija un avión
const nombreAvionSeleccionado = prompt("Ingrese el nombre del avión (Avion1, Avion2 o Avion3):");

// Utilizar switch para mostrar el destino del avión seleccionado
switch (nombreAvionSeleccionado) {
    case "Avion1":
        console.log(`Destino de ${nombreAvionSeleccionado}: ${avion1.destino}`);
        break;
    case "Avion2":
        console.log(`Destino de ${nombreAvionSeleccionado}: ${avion2.destino}`);
        break;
    case "Avion3":
        console.log(`Destino de ${nombreAvionSeleccionado}: ${avion3.destino}`);
        break;
    default:
        console.log(`No se encontró el avión con nombre ${nombreAvionSeleccionado}.`);
        break;
}

// Buscar el avión seleccionado
const avionSeleccionado = aeropuertoInternacional.buscarAvion(nombreAvionSeleccionado);

// Verificar si se encontró el avión y abordar si es el caso
if (avionSeleccionado) {
    const pasajero = prompt("Ingrese el nombre del pasajero:");
    avionSeleccionado.abordar(pasajero);
}
