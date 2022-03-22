//Four seasons

//getting real month
let actualDate = new Date();
let actualMonth = actualDate.getMonth();

if (actualMonth == 11 || actualMonth == 0 || actualMonth == 1) {
  season = "Winter";
} else if (actualMonth == 2 || actualMonth == 3 || actualMonth == 4) {
  season = "Spring";
} else if (actualMonth == 5 || actualMonth == 6 || actualMonth == 7) {
  season = "Summer";
} else if (actualMonth == 8 || actualMonth == 9 || actualMonth == 10) {
  season = "Autumn";
} else {
  season = "unknown season";
}
console.log(season);

//show month name
let monthName = "";
switch (actualMonth) {
  case 0:
    monthName = "January";
    break;
  case 1:
    monthName = "February";
    break;
  case 2:
    monthName = "March";
    break;
  case 3:
    monthName = "April";
    break;
  case 4:
    monthName = "May";
    break;
  case 5:
    monthName = "June";
    break;
  case 6:
    monthName = "July";
    break;
  case 7:
    monthName = "August";
    break;
  case 8:
    monthName = "September";
    break;
  case 9:
    monthName = "October";
    break;
  case 10:
    monthName = "November";
    break;
  case 11:
    monthName = "December";
    break;
  default:
    monthName = "unknown month";
}
console.log(monthName);

// Check a number
let number = 10;

switch (true) {
  case number < 0:
    console.log("Under 0");
    break;
  case number >= 0 && number <= 10:
    console.log("Between 0 and 10");
    break;
  case number > 10 && number <= 20:
    console.log("Between 10 and 20");
    break;
  case number > 20:
    console.log("Over 20");
    break;
  default:
    console.log("Out of range");
}
