// Exercixe 1
// Pre-defined functions solution
// let today = new Date();
// let daysInCurrentMonth = new Date(
//   today.getFullYear(),
//   today.getMonth() + 1,
//   0
// ).getDate();

// console.log("This month has: ", daysInCurrentMonth, " days");

// // Without functions solution

// let today2 = new Date();
// let getCurrentMonth = today2.getMonth();
// let answer = "The actual month has: ";
// switch (12) {
//   case 0:
//     console.log(answer + 31 + " days");
//     break;
//   case 1:
//     console.log(answer + 28 + " days");
//     break;
//   case 2:
//     console.log(answer + 31 + " days");
//     break;
//   case 3:
//     console.log(answer + 30 + " days");
//     break;
//   case 4:
//     console.log(answer + 31 + " days");
//     break;
//   case 5:
//     console.log(answer + 30 + " days");
//     break;
//   case 6:
//     console.log(answer + 31 + " days");
//     break;
//   case 7:
//     console.log(answer + 31 + " days");
//     break;
//   case 8:
//     console.log(answer + 30 + " days");
//     break;
//   case 9:
//     console.log(answer + 31 + " days");
//     break;
//   case 10:
//     console.log(answer + 30 + " days");
//     break;
//   case 11:
//     console.log(answer + 31 + " days");
//     break;
//   default:
//     answer = "Unknown month";
//     console.log(answer);
//     break;
// }

// Exercise 2
// saving a given name by user
// let userChoice = prompt("Please, enter a month name:");
// console.log(userChoice);

// switch (userChoice.toLowerCase()) {
//   case "january":
//     console.log(31);
//     alert(31); //another way to show the result
//     break;
//   case "february":
//     console.log(28);
//     break;
//   case "march":
//     console.log(31);
//     break;
//   case "april":
//     console.log(30);
//     break;
//   case "may":
//     console.log(31);
//     break;
//   case "june":
//     console.log(30);
//     break;
//   case "july":
//     console.log(31);
//     break;
//   case "august":
//     console.log(31);
//     break;
//   case "september":
//     console.log(30);
//     break;
//   case "october":
//     console.log(31);
//     break;
//   case "november":
//     console.log(30);
//     break;
//   case "december":
//     console.log(31);
//     break;

//   default:
//     console.log("That’s not a real month");
//     break;
// }

// Exercise 3
// let temperature = prompt("what temperature is it out there?");
// console.log(typeof temperature);
// switch (true) {
//   case temperature < 15:
//     alert("Warm up");
//     break;
//   case temperature <= 25:
//     alert("Enjoy the weather!");
//     break;
//   case temperature > 25:
//     alert("Cool down");
//     break;
//   default:
//     alert("Write a real data!");
//     break;
// }

// if (temperature < 15) {
//   alert("Warm up");
// } else if (temperature <= 25) {
//   alert("Enjoy the weather!");
// } else if (temperature > 25) {
//   alert("Cool down");
// } else {
//   alert("Write a real data!");
// }

// Exercise 4

// let isGreen = true;
// trying the negate operator
// if (!isGreen) {
//   console.log("Please await");
// } else {
//   console.log("Cross the road");
// }
// more understandable and intuitive
// if (isGreen) {
//   console.log("Cross the road");
// } else {
//   console.log("Please await");
// }

// Giovanna solution
// let actualDate = new Date();
// let currentTime = actualDate.getMinutes();
// console.log(currentTime);
// Checks if the minutes of the current time are odd or even.
// If even, the lights are green, and if odd, the lights are red
// let isGreen = currentTime % 2 == 0;
// switch (isGreen) {
//   case true:
//     console.log("Cross the road");
//     break;
//   case false:
//     console.log("Please await");
//     break;
//   default:
//     console.log("Watch out! The traffic lights are broken!");
//     break;
// }

// Exercise 5
// let temperature = "Freezing Point";
// switch (temperature) {
//   case "Absolute Zero":
//     console.log((-273.15 * 9) / 5 + 32);
//     break;
//   case "Freezing Point":
//     console.log((0 * 9) / 5 + 32);
//     break;
//   case "Body Temperature":
//     console.log((37 * 9) / 5 + 32);
//     break;
//   case "Boiling Point ":
//     console.log((100 * 9) / 5 + 32);
//     break;
//   default:
//     console.log("There are more grades in my beer!");
//     break;
// }
// Erika solution
// const CELSIUS = prompt("Write temperature in grades centigrades");
// // let celsius = parseFloat(prompt("Convert to fahrenheit"));
// const FAHRENHEIT = (CELSIUS * 9) / 5 + 32;
// console.log(
//   `${CELSIUS} degree celsius is equal to ${FAHRENHEIT} degree fahrenheit.`
// );

// Exercise 6
// let email = "tolkien@lordofrings.com";
// let password = "aNBR6ZeWPY";

// let userEmail = prompt("Please, enter your email");
// let userPassword = prompt("Please, enter your password");
// if (email == userEmail && password == userPassword) {
//   alert("Welcome Mr. Tolkien");
// } else {
//   alert("Wrong password or email");
// }

// Julio solution
// let email = prompt("Please, enter your email");
// let password = prompt("Please, enter your password");
// if (email == "tolkien@lordofrings.com" && password == "aNBR6ZeWPY") {
//   alert("Welcome Mr. Tolkien");
// } else {
//   alert("Wrong password or email");
// }

// Exercise 7
// let money = 500;
// let convertTo = "libra";
// let dollar = 1.1;
// let yen = 132.87;
// let libra = 0.83;
// let franc = 1.03;
// switch (convertTo) {
//   case "dollar":
//     console.log(`The value of ${money} in dollars is: `, money * dollar);
//   // break;
//   case "yen":
//     console.log(`The value of ${money} in yens is: `, money * yen);
//   // break;
//   case "libra":
//     console.log(`The value of ${money} in libras is: `, money * libra);
//   // break;
//   case "francs":
//     console.log(`The value of ${money} in swiss francs is: `, money * franc);
//   // break;
//   default:
//     console.log("You don't have all that money!");
//     break;
// }

// Evaluating califications
//let calification = prompt("Please, enter your calification:");
// nota por debajo de 5 failure
// 5 => passed
// 6 => well
// 7 y 8 => remarkable
// 9 y 10 => outstanding
// solution (with switch)
// switch (parseInt(calification)) {
//   case 0:
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//     console.log("failure");
//     break;
//   case 5:
//     console.log("passed");
//     break;
//   case 6:
//     console.log("well");
//     break;
//   case 7:
//   case 8:
//     console.log("remarkable");
//     break;
//   case 9:
//   case 10:
//     console.log("outstanding");
//     break;
//   default:
//     console.log("out of range");
//     break;
// }

// Exercise 8
// let num1 = parseFloat(prompt("Please enter the first number:"));
// let num2 = parseFloat(prompt("Please enter the second number:"));
// let operation = prompt(
//   "Please choose one option: add, subtract, multiply, divide"
// );

// switch (operation) {
//   case "add":
//     console.log(num1 + num2);
//     break;
//   case "subtract":
//     console.log(num1 - num2);
//     break;
//   case "multiply":
//     console.log(num1 * num2);
//     break;
//   case "divide":
//     console.log(num1 / num2);
//     break;
//   default:
//     console.log("Please choose a valid option.");
//     break;
// }
// // Kay solution
// let x = prompt("Introduce un numerito");
// let y = prompt("Introduce otro");
// let calculo = prompt(
//   "¿Que calculo quieres hacer? (suma, resta, multiplicacion o division)"
// );
// if (calculo == "suma") {
//   console.log(parseFloat(x) + parseFloat(y));
// } else if (calculo == "resta") {
//   console.log(parseFloat(x) - parseFloat(y));
// } else if (calculo == "multiplicacion") {
//   console.log(parseFloat(x) * parseFloat(y));
// } else if (calculo == "division") {
//   console.log(parseFloat(x) / parseFloat(y));
// } else {
//   console.log(
//     "chiki, tu no ta enterao de na en las clases de mate de primaria"
//   );
// }

// Exercise 9
// let data = prompt("Please enter DNI or NIE:");
// //Verify data length
// if (data.length == 9) {
//   // checking if data begins by T or X
//   if (data.charCodeAt(0) == 84 || data.charCodeAt(0) == 88) {
//     // Checking if the last char is a letter too
//     if (
//       // data.charCodeAt(data.length - 1) >= 65 &&
//       // data.charCodeAt(data.length - 1) <= 90
//       // Jorge solution
//       65 <=
//       data.charCodeAt(data.length - 1) <=
//       90
//     ) {
//       // Checking if the other part of the string is fullfilled by numbers
//       if (
//         data.charCodeAt(1) >= 48 &&
//         data.charCodeAt(1) <= 57 &&
//         data.charCodeAt(2) >= 48 &&
//         data.charCodeAt(2) <= 57 &&
//         data.charCodeAt(3) >= 48 &&
//         data.charCodeAt(3) <= 57 &&
//         data.charCodeAt(4) >= 48 &&
//         data.charCodeAt(4) <= 57 &&
//         data.charCodeAt(5) >= 48 &&
//         data.charCodeAt(5) <= 57 &&
//         data.charCodeAt(6) >= 48 &&
//         data.charCodeAt(6) <= 57 &&
//         data.charCodeAt(7) >= 48 &&
//         data.charCodeAt(7) <= 57
//       ) {
//         console.log("valid NIE");
//       } else {
//         console.log("Please, check your NIE");
//       }
//     }
//     // if NIE fails, then check the DNI
//   } else if (
//     data.charCodeAt(0) >= 48 &&
//     data.charCodeAt(0) <= 57 &&
//     data.charCodeAt(1) >= 48 &&
//     data.charCodeAt(1) <= 57 &&
//     data.charCodeAt(2) >= 48 &&
//     data.charCodeAt(2) <= 57 &&
//     data.charCodeAt(3) >= 48 &&
//     data.charCodeAt(3) <= 57 &&
//     data.charCodeAt(4) >= 48 &&
//     data.charCodeAt(4) <= 57 &&
//     data.charCodeAt(5) >= 48 &&
//     data.charCodeAt(5) <= 57 &&
//     data.charCodeAt(6) >= 48 &&
//     data.charCodeAt(6) <= 57 &&
//     data.charCodeAt(data.length - 1) >= 65 &&
//     data.charCodeAt(data.length - 1) <= 90
//   ) {
//     console.log("valid DNI");
//   } else {
//     console.log("Please, check your DNI");
//   }
// } else {
//   console.log("Please enter valid data");
// }

// // Fran solution
// let userNieDni = prompt("Please, write your DNI or NIE");
// if (userNieDni.length == 9) {
//   let firstCharacter = userNieDni.charCodeAt(0);
//   let lastCharacter = userNieDni.charCodeAt(userNieDni.length - 1);
//   //if NIE
//   if (
//     (firstCharacter == 84 || firstCharacter == 88) &&
//     !isNaN(userNieDni.substring(1, userNieDni.length - 1)) &&
//     lastCharacter >= 65 &&
//     lastCharacter <= 90
//   ) {
//     console.log("Your NIE is valid");
//   }
//   // if DNI
//   else if (
//     !isNaN(userNieDni.substring(0, userNieDni.length - 1)) &&
//     lastCharacter >= 65 &&
//     lastCharacter <= 90
//   ) {
//     console.log("Your DNI is valid");
//   } else {
//     console.log("Your DNI or NIE is not valid");
//   }
// } else {
//   console.log("Your DNI or NIE is not valid");
// }

// Kay solution
//Comprobador de DNI
// let identificacion = prompt(
//   "¿Se va a registrar con el DNI o con el NIE?"
// ).toUpperCase();
// switch (identificacion) {
//   case "DNI":
//     var DNI = prompt("Introduzca su DNI");
//     if (
//       DNI.charCodeAt(0) >= 48 &&
//       DNI.charCodeAt(0) <= 57 &&
//       DNI.charCodeAt(1) >= 48 &&
//       DNI.charCodeAt(1) <= 57 &&
//       DNI.charCodeAt(2) >= 48 &&
//       DNI.charCodeAt(2) <= 57 &&
//       DNI.charCodeAt(3) >= 48 &&
//       DNI.charCodeAt(3) <= 57 &&
//       DNI.charCodeAt(4) >= 48 &&
//       DNI.charCodeAt(4) <= 57 &&
//       DNI.charCodeAt(5) >= 48 &&
//       DNI.charCodeAt(5) <= 57 &&
//       DNI.charCodeAt(6) >= 48 &&
//       DNI.charCodeAt(6) <= 57 &&
//       DNI.charCodeAt(7) >= 48 &&
//       DNI.charCodeAt(7) <= 57 &&
//       DNI.charCodeAt(8) >= 65 &&
//       DNI.charCodeAt(8) <= 90
//     ) {
//       alert("You logged correctly");
//     } else {
//       alert("Your DNI number is incorrect");
//     }
//     break;
//   case "NIE":
//     var NIE = prompt("Introduzca su NIE");
//     if (
//       (NIE.charCodeAt(0) == 84 || NIE.charCodeAt(0) == 88) &&
//       NIE.charCodeAt(1) >= 48 &&
//       NIE.charCodeAt(1) <= 57 &&
//       NIE.charCodeAt(2) >= 48 &&
//       NIE.charCodeAt(2) <= 57 &&
//       NIE.charCodeAt(3) >= 48 &&
//       NIE.charCodeAt(3) <= 57 &&
//       NIE.charCodeAt(4) >= 48 &&
//       NIE.charCodeAt(4) <= 57 &&
//       NIE.charCodeAt(5) >= 48 &&
//       NIE.charCodeAt(5) <= 57 &&
//       NIE.charCodeAt(6) >= 48 &&
//       NIE.charCodeAt(6) <= 57 &&
//       NIE.charCodeAt(7) >= 48 &&
//       NIE.charCodeAt(7) <= 57 &&
//       NIE.charCodeAt(8) >= 65 &&
//       NIE.charCodeAt(8) <= 90
//     ) {
//       alert("You logged correctly");
//     } else {
//       alert("Your NIE number is incorrect");
//     }
//     break;
//   default:
//     alert("Incorrect option");
// }

// Exercise 10
// Setting max and min possible values
// let max = 6;
// let min = 1;
// Generating a random number between max and min
// Jorge solution
// let randomNumber1 = (Math.floor(Math.random() * 10) % 6) + 1;
// //let randomNumber1 = Math.floor(Math.random() * max) + min;
// let randomNumber2 = Math.floor(Math.random() * max) + min;

// console.log(randomNumber1);
// console.log(randomNumber2);
// if (randomNumber1 > randomNumber2) {
//   console.log("Player 1 wins!");
// } else if (randomNumber1 < randomNumber2) {
//   console.log("Player 2 wins!");
// } else {
//   console.log("Draw");
// }

// Exercises part 2
// Exercise 1
// let text = "palindrome";
// for (let number = 0; number <= text.length - 1; number++) {
//   console.log(`${number + 1}. ${text[number]}`);
// }
// console.log("Letters quantity: ", text.length);

// Exercise 2
// let palindrome = "no lemon, no melon";
// let invertedPalindrome = "";

// for (let i = palindrome.length - 1; i >= 0;i--) {
//   invertedPalindrome += palindrome[i];
// }
// console.log(invertedPalindrome);

// Exercise 3
// let asterisks = "";
// for (let i = 0; i < 4; i++) {
//   asterisks += "****\n";
// }
// console.log(asterisks);

// Jorge and Giovanna solution
// let msg = "";
// let side = 10;
// for (let i = 0; i < side; i++) {
//   for (let j = 0; j < side; j++) {
//     msg = msg + "* ";
//   }
//   msg = msg + "\n";
// }
// console.log(msg);

// Fran solution
// let cont = 1;
// let word = "";
// while (cont++ <= 4) {
//   word += "* * * *\n";
// }
// console.log(word);

// Exercise 4

// let mediaTemp = 0;
// let counter = 0;
// for (
//   let i = 18,
//     mar18 = 17,
//     mar19 = 17,
//     mar20 = 16,
//     mar21 = 14,
//     mar22 = 17,
//     mar23 = 15,
//     mar24 = 14;
//   i < 25;
//   i++, counter++
// ) {
//   mediaTemp += eval(`mar${i}`);
// }
// console.log("7-Day Average Temperature: ", mediaTemp / counter);

// Exercise 5
// let toGuess = Math.floor(Math.random() * 11);
// console.log(toGuess);
// let attemps = 3;
// let userWon = false;
// console.log("Let's play!");
// let userNumber = prompt("Try to guess a number between 0 and 10");
// while (--attemps >= 0 && !userWon) {
//   if (toGuess == +userNumber) {
//     alert("You win!");
//     userWon = true;
//   } else if (attemps > 0) {
//     userNumber = prompt(`Try it again, you have ${attemps} more attemps`);
//   }
// }
// if (!userWon) {
//   alert("Sorry, Good luck in love");
// }

// Kay solution
//Adivine el numero
// let x, y, number;

// for (x = Math.floor(Math.random() * 10), number = 0; x != y; number++) {
//   console.log(x);
//   switch (number) {
//     case 0:
//       y = prompt(
//         "Las tornas han cambiado, Akinator ha elegido un número y ahora serás tu quien tenga que adivinar en cuál ha pensado en unicamente tres intentos. ¿Tienes alguna ligera idea?"
//       );
//       break;
//     case 1:
//       y = prompt(
//         "Uy, estuvo cerca, bueno, para que mentirte, en realidad no. Pero miralo por el lado bueno, tienes una segunda oportunidad ¿Cuál sera tu elección ahora?"
//       );
//       break;
//     case 2:
//       y = prompt(
//         "A Akinator le estas empezando a dar penita, por eso te da una ultima oportunidad, pero ninguna más ¿Entendido? Pues dale ¿Cuál es tu ultima elección?"
//       );
//       break;
//     case 3:
//       y = x;
//       break;
//     default:
//       alert("No sé que has hecho pero la has liao, reinicia la página");
//   }
// }
// if (number == 1) {
//   alert(
//     `Sii, Akinator había pensado en el número ${x}, ¡lo sacaste a la primera! ¡Eres más adivine que el propio Akinator!`
//   );
// } else if (number == 2) {
//   alert(
//     `Efectivamente, Akinator había pensado en el número ${x}, ¡lo sacaste a la segunda! ¡Akinator te envidia un poquito, pero no mucho!`
//   );
// } else if (number == 3) {
//   alert(
//     `Sii, Akinator había pensado en el número ${x}, ¡lo sacaste en el último intento! ¡Te falta un poquito de entrenamiento más para ser igual de fantastibuloso que el gran Akinator!`
//   );
// } else if (number == 4) {
//   alert(
//     `Lo siento pequeño aprendiz, pero has perdido la oportunidad de asemejarte al gran Akinator. El número que este había pensado era el ${x}`
//   );
// }

// Exercise 6
let length = parseInt(prompt("Please enter the password length (8 - 16)"));
length = length >= 8 && length <= 16 ? length : 8;
console.log(length);

let includeLower = prompt(
  "Would you like to include lowers (y for yes, n for no)"
).toLowerCase();
let withLowers = includeLower == "n" ? false : true;

let includeUpper = prompt(
  "Would you like to include uppers (y for yes, n for no)"
).toLowerCase();
let withUppers = includeUpper == "n" ? false : true;

let includeNumber = prompt(
  "Would you like to include numbers (y for yes, n for no)"
).toLowerCase();
let withNumbers = includeNumber == "n" ? false : true;

let includeSymbol = prompt(
  "Would you like to include symbols (y for yes, n for no)"
).toLowerCase();

let withSymbols = includeSymbol == "n" ? false : true;

!withLowers &&
  !withUppers &&
  !withNumbers &&
  !withSymbols &&
  (withLowers = !withLowers);
let password = "";
let repeatedChar = false;
let countingGenPass = 0;
while (
  (withLowers && !/[a-z]/.test(password)) ||
  (withUppers && !/[A-Z]/.test(password)) ||
  (withNumbers && !/[0-9]/.test(password)) ||
  (withSymbols &&
    !/(!|"|#|[$]|%|&|'|[(]|[)]|[*]|[+]|'|-|.|[/])+/.test(password)) ||
  repeatedChar
) {
  countingGenPass++;
  password = "";
  repeatedChar = false;
  for (let i = 0, newChar = false; i < length; i++) {
    while (!newChar) {
      switch (Math.floor(Math.random() * 4) + 1) {
        case 1:
          if (withLowers) {
            password += String.fromCharCode(
              Math.floor(Math.random() * (122 - 97 + 1)) + 97
            );
            newChar = !newChar;
          }
          break;
        case 2:
          if (withUppers) {
            password += String.fromCharCode(
              Math.floor(Math.random() * (90 - 65 + 1)) + 65
            );
            newChar = !newChar;
          }
          break;
        case 3:
          if (withNumbers) {
            password += String.fromCharCode(
              Math.floor(Math.random() * (57 - 48 + 1)) + 48
            );
            newChar = !newChar;
          }
          break;
        case 4:
          if (withSymbols) {
            password += String.fromCharCode(
              Math.floor(Math.random() * (47 - 33 + 1)) + 33
            );
            newChar = !newChar;
          }
          break;
      }
    }
    newChar = !newChar;
  }
  for (let i = 0; i < password.length - 1; i++) {
    if (password[i] == password[i + 1]) {
      repeatedChar = true;
      break;
    }
  }
}
alert(`Your password: ${password} in ${countingGenPass} attemps.`);

// let newString = ""
// for(let i = 33, max = 47;i<=max;i++){
//   newString += String.fromCharCode(i);
// }
// console.log(newString);
