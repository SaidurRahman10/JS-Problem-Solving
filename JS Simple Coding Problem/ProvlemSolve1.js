// Write the function of max Number with if-else
function maxNumber(a, b, c) {
  let jim = a;
  let dela = b;
  let chinku = c;

  if (a > b && a > c) {
    console.log("Jim got height Number");
  } else if (b > a && b > c) {
    console.log("Dela got height Number");
  } else {
    console.log("Chinku got height Number");
  }
}
maxNumber(77, 88, 99);

//Write the function of Minimum Number with if-else

function miniNumber(a, b, c) {
  a = 66;
  b = 70;
  c = 80;

  if (a < b && a < c) {
    return "A is the smallest";
  } else if (b < a && b < c) {
    return "b is the smallest";
  } else {
    return "c is the smallest";
  }
}
console.log(miniNumber());

// Find the max Number with Math.

function maxN(a, b, c) {
  a = a;
  b = b;
  c = c;

  return Math.max(a, b, c);
}
console.log(maxN(70, 100, 65));

// Find the Minimum Number with Math.

function miniN(a, b, c) {
  a = a;
  b = b;
  c = c;

  return Math.min(a, b, c);
}
console.log(miniN(70, 100, 65));
