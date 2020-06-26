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

// const employee = new Object({
//     name: 'Andres',
//     age: 25,
//     email: "andres@javascript.com"
// });
//
// Object.prototype.sayHello = function() {
//     console.log('Hello Employees');
// };
//
// const lucas =  Object.create(employee);
// lucas.sayHello()
//
// /////////////////////////////////////////////////////////////////////////////
// const o1 = {
//     num1 : 1
// };
// const o2 = {
//     num2: 2
// };
//
// const y = ()=>{
//     const o = ()=>{
//         return this.num2
//     };
//     return this.num1 + o();
// };
//
// const result = y();
// console.log(result);
//
// /////////////////////////////////////////////////////////////////////////////
// const o1 = {
//     num1: 1
// };
// const o2 = {
//     num2: 2
// };
//
// const y = function () {
//     return (() => {
//         const o = function () {
//             return (() => {
//                 return this.num2
//             })()
//         }.bind(o2);
//         return this.num1 + o();
//     })()
// }.bind(o1);
//
// const result = y();
// console.log(result);
// /////////////////////////////////////////////////////////////////////////////

for(var ind = 0; ind<5; ind++){
    (function (ind){
        setTimeout(()=>{
            console.log('value of index>', ind)
        }, 1000)
    })(ind)
}