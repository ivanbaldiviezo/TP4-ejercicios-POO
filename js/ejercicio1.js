/* 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:

objeto.encender();      auto encendido
objeto.apadar()         El auto se apagó
*/

const auto = {
    color: "Negro",
    marca: "Volkswagen",
    modelo: "Gol",
    encendido: false, // false para que inicie este apagado
  
    //encender el auto
    encender: function () {
      if (!this.encendido) {
        this.encendido = true;
        document.write("El auto está encendido.");
      }
    },
  
    // apagar el auto
    apagar: function () {
      if (this.encendido) {
        this.encendido = false;
        document.write("El auto está apagado.");
      }
    },
  
  // Método para mostrar el estado del auto
    estado: function() {
      document.write(`<p>Color: ${this.color}</p>`); 
      document.write(`<p>Marca: ${this.marca}</p>`); 
      document.write(`<p>Modelo: ${this.modelo}</p>`); 
      document.write('Encendido: ' + (this.encendido ? 'Sí' : 'No') + '<br>');
      document.write('------------------------<br>');
      
    }
  };
  
  // Prueba de los métodos
  document.write(`<h1>Auto</h1>`); 
  auto.estado(); // Estado inicial del auto
  
  auto.encender();
  auto.estado(); // Después de encender el autoz
  
  auto.apagar();
  auto.estado(); // Después de apagar el auto