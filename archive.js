// let num = 245;
// let dig ;

// let prod = 1;

// while( num != 0 ) {
//     dig = num % 10;
//     prod = prod * dig;
//     num = Math.floor(num / 10);
//     console.log("num:", num)
//     console.log("dig:", dig)
// }

// console.log("prod", prod)

// const getOneDigitProd = (num) => {
//   let dig;
//   let prod = 1;

//   while (!!num) {
//     dig = num % 10;
//     prod = prod * dig;
//     num = Math.floor(num / 10);
//   }

//   if (prod.toString().length === 1) {
//     return prod;
//   }
//   return getOneDigitProd(prod);
// };

// console.log(getOneDigitProd(15))

// function getProdDigit(num) {
//   const inputString = num.toString();
//   let prod = 1;
//   for (let i = 0; i < inputString.length; i++) {
//     prod = prod * inputString[i];
//   }
//   return prod;
// }

// function getOneDigit(num) {
//     if(getProdDigit(num).toString.length === 1) {
//         return getProdDigit(num);
//     }
//     else {
//         getProdDigit(getOneDigit(num));
//     }
// }

// console.log(getOneDigit(88));
// console.log("<<End>>");

let count = 0;

function testLog() {
  count++;
  return true;
}

testLog();
testLog();
testLog();
testLog();
testLog();

console.log(count);
