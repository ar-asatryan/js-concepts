
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
function checkIsAlmostIncreasingSequence(array) {
    function checkIsArrayIncreased(array,index){
        for (let i = 0; i < array.length; i++) {
            if(i === index){
                continue
            }
            else if(array[i] > array[i + 1]){
                return false
            }
        };
        return true
    };
    for(let i = 0; i <array.length; i++){
        if(checkIsArrayIncreased(array,i)){
            return true
        }
    };
    return false
};


console.log(checkIsAlmostIncreasingSequence([1, 3, 2]))


