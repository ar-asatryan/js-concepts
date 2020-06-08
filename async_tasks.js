// 1․-------------------------------------------------------------------
let a = 85;
let b = 55;
let c = 165;

// if(a<b){
//     console.log("1")
// }
// else if(c<a){
//     console.log("2")
// }
// else{
//     console.log("3")
// };

// Էս նույն կոդը գրել մի տողով, օգատործելով || և && օպերատորները

// -----------------------------------------------------------------------

// 2․--------------------------------------------------------------------------
const obj = {
    name : "Levon"
};

setTimeout(()=>{
    console.log(this)
},2000);

// Էս կոդի կտորը ցանկացած հնարավոր ձևով պահելով, ինչ ուզում ես ավելացրու, նենց արա որ this-ը լինի վերևի object-ը

// 3---------------------------------------------------------------------------

// setInterval-ով ստանալ setTimeout և հակառակը


// 4-----------------------------------------------------------------------------
// Գրել Ֆունկցիա որը կանչելով հետևյալ կերպ կվերադարձնի նոր array որը կունենա element-ներ նշված type-ով

const arr = ["Levon", "Ararat", 15, 16, true, false];

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
console.log(newArray)

// 5-----------------------------------------------------------------------------
// Գրել Ֆունկցիա որը կանչելով հետևյալ կերպ կվերադարձնի նոր array որը կունենա element-ներ նշված type-ով

const a = ["HH","BB","KK","OO","LL"];
a.insertArrayByNumber(["Levon","Ararat"],2);

//Ստանում ենք
outputArr = ["HH","BB","Levon","KK","OO","Ararat","LL"];



