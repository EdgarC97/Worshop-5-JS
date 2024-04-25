alert("Bienvenido al viaje de Hildebrando");

let hSalary = 2500000; // Salario de Hildebrando
let badFood = 15000; // Costo de la comida mala
let goodFood = 23000; // Costo de la comida buena

//Case 1 Food election
// Función para elegir la comida
function foodChoice() {
  while (true) {
      let choice = prompt("¿Qué comida desea Hildebrando? \n1. Almojábana con gaseosa (15.000) \n2. Subway con gaseosa (23.000)");
      switch(choice) {
          case '1':
              hSalary -= badFood;
              console.log("Hildebrando eligió la almojábana con gaseosa. Le caerá mal porque lleva mucho en el stand. Ahora tiene $" + hSalary + " disponibles.");
              return;
          case '2':
              hSalary -= goodFood;
              console.log("Hildebrando eligió el subway con gaseosa. Estará llenito y bien. Ahora tiene $" + hSalary + " disponibles.");
              return;
          default:
              alert("La opción escogida es inválida. Por favor, elija 1 o 2.");
      }
  }
}

foodChoice();

//Case 2 Suitcase measure
let airportSuitcase = {
  alto: 55,
  largo: 40,
  ancho: 20
};

let hilderSuitcase = {
  alto: 60,
  largo: 40,
  ancho: 20
};

// Función para ajustar el tamaño de la maleta
function adjustSuitcaseSize() {
  // Calculamos el factor de reducción para cada dimensión
  let altoReductionFactor = airportSuitcase.alto / hilderSuitcase.alto;
  let largoReductionFactor = airportSuitcase.largo / hilderSuitcase.largo;
  let anchoReductionFactor = airportSuitcase.ancho / hilderSuitcase.ancho;

  // Encontramos el factor de reducción más pequeño
  let minReductionFactor = Math.min(altoReductionFactor, largoReductionFactor, anchoReductionFactor);

  // Calculamos las nuevas dimensiones
  let nuevoAlto = hilderSuitcase.alto * minReductionFactor;
  let nuevoLargo = hilderSuitcase.largo * minReductionFactor;
  let nuevoAncho = hilderSuitcase.ancho * minReductionFactor;

  // Actualizamos las dimensiones de la maleta de Hildebrando
  hilderSuitcase.alto = nuevoAlto;
  hilderSuitcase.largo = nuevoLargo;
  hilderSuitcase.ancho = nuevoAncho;

  console.log(`Las nuevas dimensiones de la maleta de Hildebrando son: alto = ${nuevoAlto.toFixed(2)}cm, largo = ${nuevoLargo.toFixed(2)}cm, ancho = ${nuevoAncho.toFixed(2)}cm`);
}

// Ajustamos el tamaño de la maleta de Hildebrando
adjustSuitcaseSize();


//Case 3  Wifi Password
let wifiPasswordBin = "01110010_01101001_01110111_01101001"; // Contraseña del wifi en binario
let wifiCost = 50000; // Costo del wifi por 1 hora

// Función para convertir de binario a texto
function binToText(binString) {
  return binString.split('_').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
}

// Convertimos la contraseña del wifi de binario a texto
let wifiPassword = binToText(wifiPasswordBin);

// Deducimos el costo del wifi del salario de Hildebrando
hSalary -= wifiCost;

console.log(`La contraseña del wifi es: ${wifiPassword}. Después de usar el wifi por 1h, Hildebrando tiene $${hSalary} disponibles.`);

//Case 4 Vocal Translate
// Declaramos una función de flecha que toma una frase como argumento
let translateToI = phrase => phrase.replace(/[aeou]/gi, 'i');

let phrase = "Taxi me puede llevar al hotel mariposas amarillas";
let translatedPhrase = translateToI(phrase);

console.log(`La frase traducida es: "${translatedPhrase}"`);

//Case 5 Taxi Game
let taxiFare = 300000; 
let gameResult; 

// Función para jugar piedra, papel o tijeras
let playGame = () => {
    // El taxista siempre elegirá piedra
    let taxiGame = "piedra";

    // Mapeamos los números a las opciones correspondientes
    let options = {
      "1": "piedra",
      "2": "papel",
      "3": "tijeras"
  };

  let userChoice;
  let userGame;

  // Solicitamos la elección del usuario hasta que ingrese un número válido
  while (!userGame) {
      userChoice = prompt("Elige: \n1. Piedra \n2. Papel \n3. Tijeras");
      userGame = options[userChoice];

      if (!userGame) {
          alert("Por favor, elige una opción válida.");
      }
  }

  // Comparamos las elecciones para determinar el resultado del juego
  if (userGame === taxiGame) {
      gameResult = "EMPATE";
  } else if ((userGame === "papel")) {
      gameResult = "!VICTORIA PARA HILDREBANDO!";
  } else {
      gameResult = "DERROTA PARA HILDREBANDO";
      hSalary -= taxiFare; 
  }

  console.log(`Jugaste ${userGame} y el taxista jugó ${taxiGame}. El juego termina en ${gameResult}. Ahora tienes $${hSalary} disponibles.`);
}

playGame();


// Declaramos las variables
let daysInMacondo = 0; // Días que Hildebrando estuvo en Macondo
let alive = true; // Si Hildebrando está vivo

// Función para simular las actividades de Hildebrando
let simulateActivities = () => {
    while (daysInMacondo < 4 && alive) {
        // Solicitamos la elección del usuario
        let userChoice = prompt("Elige el patrón de vestimenta para el día " + (daysInMacondo + 1) + ": \n1. Amarillo (piscina) \n2. Verde (caminatas) \n3. Rojo (playa) \n4. Azul (hotel)");

        switch(userChoice) {
            case '1':
                // Si elige ir a la piscina
                let poolChoice = prompt("El agua de la piscina huele raro. ¿Quieres meterte? \n1. Sí \n2. No");
                if (poolChoice === '1') {
                    // Si se mete, muere
                    alive = false;
                    console.log("Hildebrando se metió a la piscina y se ahogó por demasiado cloro. Terminan las vacaciones.");
                }
                break;
            case '2':
                // Si elige ir de caminatas
                let walkChoice = prompt("¿Quieres ir toda la caminata? \n1. Sí \n2. No");
                if (walkChoice === '1') {
                    // Si elige ir toda la caminata, llega a una hermosa cascada y se toma fotos
                    console.log("Hildebrando fue toda la caminata, llegó a una hermosa cascada y se tomó fotos.");
                } else {
                    // Si no, se devuelve solo y se pierde
                    alive = false;
                    console.log("Hildebrando se devolvió solo de la caminata y se perdió. Terminan las vacaciones.");
                }
                break;
            case '3':
                // Si elige actividades en la playa
                let beachChoice = prompt("Elige una actividad en la playa: \n1. Voleibol \n2. Nadar en el mar y montar moto \n3. Tomar cócteles mientras descansas");
                if (beachChoice === '3') {
                    // Si se pone a tomar cócteles, siente un fuerte dolor de cabeza y empieza a perder la visión
                    alive = false;
                    console.log("Hildebrando se puso a tomar cócteles y empezó a sentir un fuerte dolor de cabeza y a perder la visión. Se tiene que devolver de emergencia. Terminan las vacaciones.");
                } else {
                    // Si elige voleibol o nadar en el mar, la pasa genial
                    console.log("Hildebrando la pasó genial en la playa.");
                }
                break;
            case '4':
                // Si elige actividades dentro del hotel
                let hotelChoice = prompt("Elige una actividad en el hotel: \n1. Bingo \n2. Bailar \n3. Casino y apuesta");
                if (hotelChoice === '1') {
                    // Si juega al bingo, se lo gana y aumenta su dinero
                    hSalary += 500000; // Aumentamos su salario en 500.000
                    console.log("Hildebrando ganó el bingo y aumentó su dinero. Ahora tiene $" + hSalary + " disponibles.");
                } else if (hotelChoice === '3') {
                    // Si va al casino y apuesta, solo se queda con pasaje de regreso
                    hSalary = taxiFare; // Su salario se reduce a la tarifa del taxi
                    console.log("Hildebrando fue al casino y apostó. Ahora solo tiene $" + hSalary + " disponibles para el pasaje de regreso.");
                } else {
                    // Si elige bailar, la pasa muy bien
                    console.log("Hildebrando la pasó muy bien bailando en el hotel.");
                }
                break;
            default:
                alert("Por favor, elige un número válido.");
        }

        // Si Hildebrando está vivo, incrementamos los días que estuvo en Macondo
        if (alive) {
            daysInMacondo++;
        }
    }

    // Imprimimos el resultado final
    console.log("Resumen de las vacaciones de Hildebrando:");
    console.log("----------------------------------------");
    console.log(`Días en Macondo: ${daysInMacondo}`);
    console.log(`Estado al final: ${alive ? "Regresó" : "No pudo regresar"}`);
    console.log(`Dinero gastado: $${2500000 - hSalary}`);
}

// Simulamos las actividades de Hildebrando
simulateActivities();
