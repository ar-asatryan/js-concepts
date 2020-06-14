// 1․-------------------------------------------------------------------
// Էս նույն կոդը գրել մի տողով, օգատործելով || և && օպերատորները
// let a = 85;
// let b = 55;
// let c = 165;

// if(a<b){
//     console.log("1")
// }
// else if(c<a){
//     console.log("2")
// }
// else{
//     console.log("3")
// };

// 2.----------------------------------------------------------------------
// Տպել 1-25 թվերը հերթականությամբ, սակայն Թվերը որոնք բաժանվում են 5-ի կամ 3-ի դրանց փոխարեն տպել`
// համապատասխանաբար "Five" ու "Three":

// for(let i = 1; i <= 25; i++) {
//
//     if(i%3 == 0 && i%5 == 0) {
//         console.log("3 and 5");
//     } else if (i % 3 == 0) {
//         console.log('Three');
//     } else if (i%5 == 0) {
//         console.log('Five')
//     }else {
//         console.log(i)
//     }
// }

// 3․--------------------------------------------------------------------------
// Էս կոդի կտորը ցանկացած հնարավոր ձևով պահելով, ինչ ուզում ես ավելացրու, նենց արա որ this-ը լինի վերևի object-ը
// const obj = {
//     name : "Levon"
// };
//
// setTimeout(()=>{
//     console.log(this)
// },2000);
//
// // TODO Solution:
//
// function th() {
//
//     setTimeout(()=>{
//         console.log('timer finished>>', this)
//     },1000);
// }
//
// th.call(obj)


// 4․---------------------------------------------------------------------------
// setInterval-ով ստանալ setTimeout և հակառակը


// 5․-----------------------------------------------------------------------------
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


//arr = new myArray


// 6․-----------------------------------------------------------------------------
//

const arr1 = ["HH","BB","KK","OO","LL"];

//Ստանում ենք
// let finArr  =  ["HH","BB","Levon","KK","OO","Ararat","LL"];

Array.prototype.insertArrayByStep = function(arrX,step) {
    let i,j,k,tempArray;
    let finArr = [];

    for (i = 0, k = 0; i <= j , k <= arrX.length ; i+=step, k++) {
        tempArray = arr1.slice(i, i + step);
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

Array.prototype.insertArrayByStep = function(arrX,step){
    const returnedArray = [];
    for(let i = 0, j =0; i<this.length && j < arrX.length; i++){
        returnedArray.push(this[i]);
        if((i+1)%step===0 && i!==0){
            returnedArray.push(arrX[j]);
            j++;
        }
    };
    return returnedArray
};


// 7․-----------------------------------------------------------------------------
//

const arr2 = ["Ararat", "Levon", 25, true, false];

//arr2.getObjectWithKeys(["name","name1",null,"name2"]);

// Արդյունքը պիտի լինի
// {
//     name0 : "Ararat",
//     name1 : "Levon",
//     name2 : true
// }



