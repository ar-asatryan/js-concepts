// value types: number, string, undefined, boolean
// reference type: function, object, arrays

const employee = {};
employee.name = "Donny";
employee.age = 25;
employee.email = "info@javascript.com";
employee.action = function () {
  console.log("current status is:", "Perfect");
};

console.log(employee);
console.log("employee.ToString() -->", employee.toString());

let arr = [1, 2, 3];
const arr1 = [1, 2, 3];
const arr2 = arr1.push(4);
const arr3 = arr1.concat();

console.log("arr1", arr1);
console.log("arr2", arr2);
console.log("arr1 === arr2 >>", arr1 === arr2);
console.log("arr1 === arr3 >>", arr1 === arr3);

let arrMap = arr.map((item, i, arr) => {
  return i * 2;
});
console.log(arrMap);


//
// const inputN = {
//   0: { age: 18, name: "tony", mark: "400" },
//   1: { age: 20, name: "steve", mark: "500" },
//   2: { age: 16, name: "lilly", mark: "200" },
//   3: { age: 16, name: "bruce", mark: "300" },
//   4: { age: 19, name: "tony", mark: "400" },
// };

// const outputN = {
//   0: { age: 20, name: "julie", mark: "400" },
//   1: { age: 16, name: "Robin", mark: "200" },
//   2: { age: 16, name: "Bella", mark: "300" },
// };
// // ToDo: start

// let refArr = [];
// for (const k in inputN) {
//   console.log(k);
//   refArr.push([inputN[k]]);
// }
// //console.log(refArr);

// const flatted = refArr.flat();
// console.log("array flatted", flatted);

// console.log("flatted[0]:", flatted[0]);
// console.log("flatted[0] mark:", flatted[0].mark);

// console.log("flatted", flatted);

// for (let i = 0; i < flatted.length; i++) {
//   console.log("ADADAD", flatted[i + 1].mark);
//   //   if (flatted[i].mark < flatted[i - 1].mark) {
//   //     let tmp = flatted[i];
//   //     flatted[i] = flatted[i + 1];
//   //     flatted[i + 1] = tmp;
//   //   }
// }
//