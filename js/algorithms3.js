// Utils

// Exercise 1: solution
const exercise1 = () => {
  let minLimit = parseInt(prompt("Insert min number: "));
  let maxLimit = parseInt(prompt("Insert max number: "));

  let requiredNumbers = 20;
  let randomNumbersList = new Array(requiredNumbers);

  const numberGenerator = (maxLimit, minLimit) =>
    Math.floor(Math.random() * (maxLimit - minLimit + 1)) + minLimit;

  let minFound = maxLimit;
  let maxFound = minLimit;
  for (let i = 0, temp = 0; i < requiredNumbers; i++) {
    temp = numberGenerator(maxLimit, minLimit);
    randomNumbersList[i] = temp;
    if (temp < minFound) {
      minFound = temp;
    }
    if (temp > maxFound) {
      maxFound = temp;
    }
  }
  console.log(randomNumbersList);
  console.log(randomNumbersList);

  console.log("Min value: ", minFound);
  console.log("Max value: ", maxFound);
};

//Fran Solution
// const exercise1 = () => {
//   let min = parseInt(prompt("Write a minimun number"));
//   let max = parseInt(prompt("Write a maximun number"));
//   let loop = 20;
//   let arrayGenerate = new Array(loop);
//   for (let i = 0; i < loop; i++) {
//     arrayGenerate[i] = generateRandomNumber(min, max);
//   }
//   //Sorting the array
//   arrayGenerate.sort((a, b) => a - b);
//   console.log(
//     `min value: ${arrayGenerate[0]} \nmax value: ${
//       arrayGenerate[arrayGenerate.length - 1]
//     }`
//   );
// };
//Julio solution
// const exercise1 = () => {
//     let minLim = parseInt(prompt(`Please insert the minimum numerical limit`));
//     let maxLim = parseInt(prompt(`Please insert the maximum numerical limit`));
//     let randNums = Array.from(
//       { length: 20 },
//       () => Math.floor(Math.random() * (maxLim - minLim + 1)) + minLim
//     );
//     console.log(
//       `min value: ${Math.min(...randNums)} \nmax value: ${Math.max(...randNums)}`
//     );
//     console.log(randNums);
//   };

//Jorge solution =>
// function exercise1() {
//   let min;
//   let max;
//   // pedimos los valores mínimos y máximos
//   for (let i = 0; i < 1; i++) {
//     min = parseInt(prompt("Enter the minimum value"));
//     max = parseInt(prompt("Enter the maximum value"));
//     if (min > max) {
//       alert("The minimum value can't be bigger than the maximum value");
//       i--;
//     }
//   }

//   // hacemos una función para llamar al random number
//   const randomNumber = (max, min) =>
//     Math.floor(Math.random() * (max - min + 1) + min);

//   // creamos el array de 20
//   let array = new Array(20);
//   // le agregamos a cada hueco del array un valor aleatorio entre el mínimo y el máximo
//   for (let i = 0; i < array.length; i++) {
//     let num = randomNumber(max, min);
//     array[i] = num;
//   }
//   console.log(`min value: ${Math.min(...array)}`);
//   console.log(`max value: ${Math.max(...array)}`);
// }
//exercise1();

// const exercise2 = () => {
// Exercise 2: solution
// let date = new Date();
// let hour = date.getHours();
// let minutes = date.getMinutes();
// let hour = 5;
// let minutes = 59;
// console.log(hour,minutes);
// if (hour >= 6 && minutes >= 0 && hour <= 11 && minutes <= 59) {
//   alert("¡Buenos días!");
// } else if (hour >= 12 && minutes >= 0 && hour <= 20 && minutes <= 59) {
//   alert("¡Buenas tardes!");
// } else if ((hour >= 21 && minutes >= 0) || (hour <= 5 && minutes <= 59)) {
//   alert("¡Buenas noches!");
// } else{
//   console.log("system time is failing.");
// }
// Julio solution
// new Date().getHours() >= 6 && new Date().getHours() < 12
//   ? alert(`Buenos días`)
//   : new Date().getHours() >= 12 && new Date().getHours() < 21
//   ? alert(`Buenas tardes`)
//   : alert(`Buenas noches`);
// };
// exercise2();

// chained ternary operator
// 2 + 2 == 7
//   ? console.log("verdadero")
//   : 1 + 1 == 2
//   ? console.log("verdadero")
//   : console.log("falso");

// Exercise 3

const exercise3 = () => {
  // storing all letter and digit combinations
  // for html color code
  // const generateColor = () => {
  //   let letters = "0123456789ABCDEF";
  //   // html color code starts with #
  //   let color = "#";
  //   // generating 6 times as HTML color code consist
  //   // of 6 letter or digits
  //   for (let i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // };
  // for (let i = 1; i <= 10; i++) {
  //   console.log("%cHello World!",`color: ${generateColor()}`);
  // }

  //alternative solution
  setInterval(() => {
    for (let i = 1; i <= 10; i++) {
      console.log(
        "%cHello World!",
        `color: #${Math.floor(Math.random() * 16777215).toString(16)}`
      );
    }
  }, 100);
};

// exercise3();

// Exercise 4
const exercise4 = () => {
  let validLetters = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
  ];

  // console.log(validLetters[22]);
  let dni = prompt("Please, enter your DNI: ");
  let numbers = dni.substring(0, dni.length - 1);
  let letter = dni.substring(dni.length - 1);
  // console.log(letter);
  if (validLetters[parseInt(numbers) % 23] == letter) {
    alert("Valid DNI");
  } else {
    alert("The data entered is wrong");
  }

  const dniGenerator = () => {
    let randomNumber = Math.floor(
      Math.random() * (100000000 - 10000000) + 10000000
    );
    randomNumber += validLetters[randomNumber % 23];
    return randomNumber;
  };
  for (let index = 0; index < 100; index++) {
    console.log(dniGenerator());
  }
};

// exercise4();

// Exercise 5
const exercise5 = () => {
  let platesNumber = prompt("Please, insert a number to generate:");
  // let plate = "";
  // // numbers
  // const numbersGenerator = () => {
  //   let number = Math.floor(Math.random() * 10000);
  //   // if (number < 10) {
  //   //   plate = "000" + number;
  //   // } else if (number < 100) {
  //   //   plate = "00" + number;
  //   // } else if (number < 1000) {
  //   //   plate = "0" + number;
  //   // } else {
  //   //   plate = number.toString();
  //   // }

  //   // Giovanna solution
  //   number = number.toString();
  //   let numberLength = number.length;
  //   for (let i = 0; i < 4 - numberLength; i++) {
  //     number = "0" + number;
  //   }
  //   plate = number;
  //   // console.log(plate);
  // };
  // const letterGenerator = () => {
  //   const validChars = [
  //     "B",
  //     "C",
  //     "D",
  //     "F",
  //     "G",
  //     "H",
  //     "J",
  //     "K",
  //     "L",
  //     "M",
  //     "N",
  //     "P",
  //     "R",
  //     "S",
  //     "T",
  //     "V",
  //     "W",
  //     "X",
  //     "Y",
  //     "Z",
  //   ];

  //   //letters
  //   for (let index = 0; index < 3; index++) {
  //     plate += validChars[Math.floor(Math.random() * validChars.length)];
  //   }
  // };
  // for (let index = 0; index < platesNumber; index++) {
  //   numbersGenerator();
  //   plate += " ";
  //   letterGenerator();
  //   console.log(plate);
  //   // plate = "";
  // }

  // Tomasz solution
  for (let index = 0; index < platesNumber; index++) {
    var array = [];
    var text = [];
    var letter = "BCDEFGHIJKLMNPRSTUVWXYZ";

    for (var i = 0, t = 4; i < t; i++) {
      array.push(Math.round(Math.random() * 9));
    }
    for (var i = 0; i < 3; i++) {
      text += letter.charAt(Math.floor(Math.random() * letter.length));
    }

    document.write(
      `<p>Here we have registration for your new car!: ${array.join("")} ${text}</p>`
    );
    console.log(
      `Here we have registration for your new car!: ${array.join("")} ${text}`
    );
  }
};
exercise5();
