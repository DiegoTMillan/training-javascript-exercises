//Four seasons

//getting real month
// let actualDate = new Date();
// let actualMonth = actualDate.getMonth();

// if (actualMonth == 11 || actualMonth == 0 || actualMonth == 1) {
//   season = "Winter";
// } else if (actualMonth == 2 || actualMonth == 3 || actualMonth == 4) {
//   season = "Spring";
// } else if (actualMonth == 5 || actualMonth == 6 || actualMonth == 7) {
//   season = "Summer";
// } else if (actualMonth == 8 || actualMonth == 9 || actualMonth == 10) {
//   season = "Autumn";
// } else {
//   season = "unknown season";
// }
// console.log(season);

// //show month name
// let monthName = "";
// switch (actualMonth) {
//   case 0:
//     monthName = "January";
//     break;
//   case 1:
//     monthName = "February";
//     break;
//   case 2:
//     monthName = "March";
//     break;
//   case 3:
//     monthName = "April";
//     break;
//   case 4:
//     monthName = "May";
//     break;
//   case 5:
//     monthName = "June";
//     break;
//   case 6:
//     monthName = "July";
//     break;
//   case 7:
//     monthName = "August";
//     break;7
//   case 8:
//     monthName = "September";
//     break;
//   case 9:
//     monthName = "October";
//     break;
//   case 10:
//     monthName = "November";
//     break;
//   case 11:
//     monthName = "December";
//     break;
//   default:
//     monthName = "unknown month";
// }
// console.log(monthName);

// // Check a number
// let number = 10;

// switch (true) {
//   case number < 0:
//     console.log("Under 0");
//     break;
//   case number >= 0 && number <= 10:
//     console.log("Between 0 and 10");
//     break;
//   case number > 10 && number <= 20:
//     console.log("Between 10 and 20");
//     break;
//   case number > 20:
//     console.log("Over 20");
//     break;
//   default:
//     console.log("Out of range");
// }

// Loops
// counting by one to one
// let count = 9;
// while (count < 10) {
//   console.log(++count);
// count++;
// count = count + 1;
// count += 1;
// }
// Counting back
// let counter = 10;
// while (counter >= 2) {
//   console.log(counter--);
// }
// console.log("El programa seguiría por aquí");
// let monthDays = new Date(2022, 3, 0).getDate();
// let firstDay = new Date("March 1, 2022").getDay();
// console.log(firstDay);
// //March calendar
// let day = 1;
// while (day <= monthDays) {
//   console.log(day);
//   day++;
// }

// counting 2 by 2
// let number = 0;
// while(number <= 1000){
//   console.log(number);
//   // number = number + 2;
//   number += 2;
// }

// For loop
// let count = 0;
// while(count < 10){
//   console.log(count++);
// }
// let start, end;
// for (start = 0, end = 1000; start < end; start++, end--) {
//   console.log(start, " ", end);
// }
// console.log("Showing values after finishing the loop");
// console.log(start, " ", end);
// let userValue = prompt("Enter your value: ");
// for (let num = 1; num <= 10; num++) {
//   console.log(`${userValue} x ${num} = ${userValue * num}`);
// }

// Random numbers loop
let max = 90;
let min = 0;
// for (let index = 0; index < 100; index++) {
//   console.log(Math.floor(Math.random() * max) + min);
// }

// let num = 0;
// let counter = 0;
// for (let i = 0; i < 1000; i++) {
//   console.log(`iteration ${++counter}`);
//   num = Math.floor(Math.random() * (max - min + 1) + min);
//   if (num == 0) {
//     console.log("num aleatorio: ", num);
//     break;
//   }
// }

// let text = "palindrome";
// let target = "d";
// let counter = 0;

// for (let i = 0; i < text.length; i++) {
//   console.log(`iteration ${++counter}`);
//   if (text[i] == target) console.log("letter found");
//   break;
// }

// let isPrime = true;
// let num = 19;
// let counter = 0;
// for (let start = 2, end = 1000000000, isPrime = true; start < end; start++) {
//   //in each iteration of the above for
//   // the for inside runs from start to end
//   for (let i = 2; i < start && isPrime == true; i++) {
//     // console.log(`nested for, iteration ${++counter}`);
//     if (start % i == 0) {
//       //   console.log("The number " + start + " is not a prime, divisible by: ", i);
//       isPrime = false;
//       //   break;
//     }
//   }
//   if (isPrime) {
//     console.log(`the number ${start} is prime`);
//   } else {
//   console.log(`with else ${++counter}`);
//   isPrime = !isPrime;
//   }
//   console.log(`above for, iteration ${++counter}`);
// }

// showing even numbers
// for (let num = -1, max = 100, counter = 0; num < max; num++) {
//   if (num % 2 != 0){
//     continue;
//   } 
//   console.log(`${num}`);
//   console.log(`iteration ${++counter}`);
  //   console.log("iteration " + ++counter);
// }
