
// console.log(this)
//
// let user = {
//     name: "John",
//     age: 30,
//
//     sayHi() {
//         // "this" is the "current object"
//         console.log(this);
//     }
//
// };

//user.sayHi();
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



// console.log(a);
//
// if(false){
//     var a = 5;
// }
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




// Արդյունքը պիտի լինի
// {
//     name0 : "Ararat",
//     name1 : "Levon",
//     name2 : true
// }

// const arr = ["Ararat", "Levon", 25, true, false];
// Array.prototype.getObjectWithKeys = function(arrKeys){
//         const obj = {};
//         for(let i = 0; i <= this.length; i++) {
//             let key = arrKeys[i];
//             if(key == null){
//                 continue;
//             }
//             obj[key] = this[i];
//         }
//     return obj;
// };
//
// const finArr = arr.getObjectWithKeys(["name1","name2",null,"name3"]);
// console.log(finArr)

//

const arr = ["Levon", "Ararat", 15, 16, true, false];

const arr1 = ["HH","BB","KK","OO","LL"];

// 1. ToDo:
Array.prototype.getArrayByElementTypes = function(type) {
    let newArray = [];
    for (let i = 0; i <= arr.length; i++) {
        if ( (typeof arr[i] ) === type) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
};
const newArray =  arr.getArrayByElementTypes("boolean");
console.log(newArray);

// 2. ToDo:

Array.prototype.insertArrayByStep = function(arrX,step) {
    let i,j,k,tempArray;
    let finArr = [];

    for (i = 0, k = 0; i <= this.length , k <= arrX.length ; i+=step, k++) {
        tempArray = this.slice(i, i + step);
        console.log(tempArray);
        for(let p = 0; p <= tempArray.length - 1; p++) {
            finArr.push(tempArray[p]);
        }
        finArr.push(arrX[k]);
    }
    return finArr;
};

let res = arr1.insertArrayByStep(["Levon","Ararat"],2);
console.log('merged array>>>', res);

// 3. ToDo:
Array.prototype.getObjectWithKeys = function(arrKeys){
    const obj = {};
    for(let i = 0; i <= this.length; i++) {
        let key = arrKeys[i];
        if(key == null){
            continue;
        }
        obj[key] = this[i];
    }
    return obj;
};

const finArr = arr.getObjectWithKeys(["name1","name2",null,"name3"]);
console.log(finArr);

