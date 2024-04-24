alert("Bienvenido al viaje de Hildebrando");
let vacations = "";
let flag = true;
let hSalary = 2500000;

const dayVerification = () =>
  (isFriday = confirm("¿Hoy es viernes? (OK para si, Cancel para no)")
    ? console.log(
        "Hoy es el dia del viaje, y tambien te pagan, asegurate de estar en el aeropuerto a tiempo"
      )
    : console.log("Vuelve cuando sea viernes"));

dayVerification();

const airportVerification = () => {
  if (confirm("¿Ya estas en el aeropuerto? (OK para si, Cancel para no)")) {
    console.log("Asegurate de no perder el vuelo");
    const foodOptions = {
      badFood: { name: "almojábana con gaseosa", price: 15000 },
      goodFood: { name: "subway con gaseosa", price: 23000 },
    };
    let userChoice = prompt(
      "¿Qué opción de comida prefieres? (badFood/goodFood)"
    );
    switch (userChoice) {
      case "badFood":
        console.log(
          `Has elegido ${foodOptions.badFood.name}, te costará ${foodOptions.badFood.price}`
        );
        break;
      case "goodFood":
        console.log(
          `Has elegido ${foodOptions.goodFood.name}, te costará ${foodOptions.goodFood.price}`
        );
        break;
      default:
        console.log("No has elegido ninguna opción de comida.");
    }
  } else {
    console.log("Apurate o perderás el vuelo");
  }
};

airportVerification();
