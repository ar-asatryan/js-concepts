// 1․-------------------------------------------------------------------
// ToDo: Էս նույն կոդը գրել մի տողով, օգատործելով || և && օպերատորները։
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
//ToDo:  Տպել 1-25 թվերը հերթականությամբ, սակայն Թվերը որոնք բաժանվում են 5-ի կամ 3-ի դրանց փոխարեն տպել`
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
// ToDo: Էս կոդի կտորը ցանկացած հնարավոր ձևով պահելով, ինչ ուզում ես ավելացրու, նենց արա որ this-ը լինի վերևի object-ը
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
// ToDo: setInterval-ով ստանալ setTimeout և հակառակը


// 5․-----------------------------------------------------------------------------
// ToDo: Գրել Ֆունկցիա որը կանչելով հետևյալ կերպ կվերադարձնի նոր array որը կունենա element-ներ նշված type-ով

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


// 6․-----------------------------------------------------------------------------
// ToDo:

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
// ToDo:

// const arr2 = ["Ararat", "Levon", 25, true, false];

//arr2.getObjectWithKeys(["name","name1",null,"name2"]);

// Արդյունքը պիտի լինի
// {
//     name0 : "Ararat",
//     name1 : "Levon",
//     name2 : true
// }

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
console.log(finArr)


//////////////////////////////>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 8․-----------------------------------------------------------------------------
// ToDo:

const obj = {
    value: "Hello",
    changevalue(value) {
        this.value = value;
        return this.value
    }
};

let x = 5;

const testPromise = new Promise((res, rej) => {
    res(this.changevalue(x))
}).then((data) => {
    // Պիտի տպի x թիվը
    console.log("START_VALUE",data);
    return data
}).catch((data) => {
    console.log(data, "CANT CONTINUE");
}).then((data) => {
    // Պիտի 1 վայրկյանը մեկ տպի 0-ից մինչև x-1 թիվը
}).then((data) => {
    // Data-ն պետք է լինի x-1 թիվը
    console.log("this is data", data)
});

// 9․-----------------------------------------------------------------------------
// ToDo: գրել async ֆունկցիա, որը 5 վայրկյան հետո կտպի Hello:

// callTimer(5000,()=>{console.log("Hello")})
// console.log(a);

if(false){
    var a = 5;
}


//
///////////////////////////////////////////////////////////////////////////////


// 10․-----------------------------------------------------------------------------
// ToDo: a փոխականի var-ը չփոխելով նենց անել որ տպի 0-ից 5 ։

for(var a = 0; a <= 5; a++){
    setTimeout(()=>{
        console.log(a)
    })
}

// Solution:
for(var a = 0; a<5; a++){
    (function (a){
        setTimeout(()=>{
            console.log('value of a>', a)
        })
    })(a)
}
// ------------------------------------------->
