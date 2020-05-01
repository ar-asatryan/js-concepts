// const employee = {};
//
// employee.name = 'Bernard';
// employee.age = 25;
// employee.action = function() {
//     console.log('current status is:', 'Perfect')
// };
// employee.email = 'info@javascript.com';

//console.log(employee);

//console.log(employee.toString());


// const arr1 = [1, 2, 3];
// const arr2 = arr1.push(4);
// const arr3 = arr1.concat();
//
// console.log('arr1',arr1);
// console.log('arr2',arr2);
// console.log(arr1 === arr2);
// console.log('arr1 === arr2 >>',arr1 === arr3);


// function display1(cb2,cb3){
//     setTimeout(() => {
//         console.log(1)
//
//         cb2(cb3);
//     }, 4000);
// };
//
// function display2(cb3){
//     setTimeout(() => {
//         console.log(2)
//         cb3()
//     }, 3000);
// };
//
// function display3(){
//     setTimeout(() => {
//         console.log(3)
//     }, 1000);
// };
//
// function display(cb1,cb2,cb3){
//     cb1(cb2,cb3);
//     // display2();
//     // display3();
// };
//
// display(display1,display2,display3)


// let arr = [1,2,3];
//
// let arr2 = arr.map((item,i,arr)=>{
//     return i * 2;
// });
// console.log(arr2);
//
//
// function myMap() {
//
// }


// function sumAdds(num1, num2) {
//
//     let sum = num1 + num2;
//     console.log(sum);
//
//     return function(num4, num5) {
//         sum = num4 + num5;
//         console.log(sum);
//     };
// };
//
//
// let sum = sumAdds(3,8);
// sum(1,2);


// function count() {
//     let number = 0;
//
//     return function () {
//         number ++;
//         console.log(number)
//         return number
//     }
// }
//
//
//
// let first = count();
// first()
// first()


// let arr = [1,2,3];
//
// let count = arr.reduce((acc,cur)=>{
//     acc[cur] = cur + 10;
//     return acc;
// },{});
//
// console.log(count);

// arr.every
// arr.some


// const arr1 = [1, 2, 3]
// const arr2 = [1, 2, 3, 4]
//
// // const arr3 = arr1.concat(arr2);
// const arr3 = [...arr1];
//
// console.log(`arr1 content is ${arr1}`)
// console.log(`arr3 content is ${arr3}`)
//
// console.log(arr1 == arr3);
// console.log(arr1 === arr3);




// value types
// number, string, undefined, boolean


// reference type
// function, object, arrays


// let arr1 = [1, 2, 3]
// let arr3 = arr1;
// let arr2 = arr1.push(4)
// arr3.push(4);
//
//
// console.log(`arr1 content is ${arr1}`)
// console.log(`arr2 content is ${arr2}`)
// console.log(`arr3 content is ${arr3}`)

const employee = new Object({
    name: 'Andres',
    age: 25,
    email: "andres@javascript.com"
});

Object.prototype.sayHello = function() {
    console.log('Hello Employees');
};

const lucas =  Object.create(employee);
lucas.sayHello()