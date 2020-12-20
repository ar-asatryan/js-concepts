// value types: number, string, undefined, boolean
// reference type: function, object, arrays

const employee = {};
employee.name = 'Donny';
employee.age = 25;
employee.email = 'info@javascript.com';
employee.action = function() {
    console.log('current status is:', 'Perfect')
};

console.log(employee);
console.log('employee.ToString() -->', employee.toString());

let arr = [1,2,3];
const arr1 = [1, 2, 3];
const arr2 = arr1.push(4);
const arr3 = arr1.concat();

console.log('arr1',arr1);
console.log('arr2',arr2);
console.log('arr1 === arr2 >>',arr1 === arr2);
console.log('arr1 === arr3 >>',arr1 === arr3);

let arrMap = arr.map((item,i,arr)=>{
    return i * 2;
});
console.log(arrMap);
















