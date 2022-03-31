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

// Exercise 1: solution
