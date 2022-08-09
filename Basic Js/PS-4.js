// =================================1th Problem===============================

function foo() {
  console.log("foo");
  bar();
}

function bar() {
  console.log("bar");
}
// console.log(foo());

// =================================2nd Problem===============================
// function makeAverage(a,b,c){
//     var number = a+b+c;
//     var average = number / 3;
//     return average

// }

// var avg = makeAverage(50,60,80)

// console.log(avg.toFixed(2));

// Example PS
// var number = [1,2,3,4,5,6]

// var  sum = number.reduce((PV,CV)=>{
//     return PV + CV;

// },0);

// =================================3th Problem===============================

const arr = [100, 150, 255, 50, 80];

// PV = Previous Value , CV = Current Value
const make_avg = arr.reduce((PV, CV) => PV + CV, 0) / arr.length;
// console.log(average);

// =================================4th Problem===============================

function even(a) {
  if (a % 2 == 0) {
    console.log("The number is Even.");
  } else {
    console.log("The number is Odd.");
  }
}
console.log(even(55));

// =================================5th Problem===============================

const signal = "red";

switch (signal) {
  case "red":
    console.log("The traffic signal is red . Dont Cross ");
    break;
  case "yellow":
    console.log("The traffic signal is yellow . You Should Stop ");
    break;
  case "green":
    console.log("The traffic signal is green . You can go now");
    break;
  default:
    console.log("Wait For Green");
}
