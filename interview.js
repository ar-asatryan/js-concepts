// 1․-------------------------------------------------------------------
// ToDo: Էս նույն կոդը գրել մի տողով, օգատործելով || և && օպերատորները։
let a = 85;
let b = 55;
let c = 165;

if(a<b){
    console.log("1")
}
else if(c<a){
    console.log("2")
}
else{
    console.log("3")
};


// 2.----------------------------------------------------------------------
//ToDo:  Տպել 1-25 թվերը հերթականությամբ, սակայն Թվերը որոնք բաժանվում են 5-ի կամ 3-ի դրանց փոխարեն տպել`
// համապատասխանաբար "Five" ու "Three":

for(let i = 1; i <= 25; i++) {

    if(i%3 == 0 && i%5 == 0) {
        console.log("3 and 5");
    } else if (i % 3 == 0) {
        console.log('Three');
    } else if (i%5 == 0) {
        console.log('Five')
    }else {
        console.log(i)
    }
}

// 3․--------------------------------------------------------------------------
// ToDo: Էս կոդի կտորը ցանկացած հնարավոր ձևով պահելով, ինչ ուզում ես ավելացրու, նենց արա որ this-ը լինի վերևի object-ը
const obj = {
    name : "Levon"
};

setTimeout(()=>{
    console.log(this)
},2000);

// TODO Solution:

function th() {

    setTimeout(()=>{
        console.log('timer finished>>', this)
    },1000);
}

th.call(obj);


// 4․---------------------------------------------------------------------------
// ToDo: setInterval-ով ստանալ setTimeout և հակառակը
// ToDo: Promise-ով ստանալ setTimeout և հակառակը

function mySetTimeout(cb, time) {
    let timerId;
    timerId = setInterval(() => {
        cb();
        clearInterval(timerId);
    }, time);
};

mySetTimeout(() => {
    console.log("Hello setInterval...")
}, 5000);


function mySetTimeout(cb,time){
    const pr = new Promise((res)=>{
        setTimeout(() => {
            res()
        }, time);
    });

    pr.then(()=>{
        cb()
    })
};

mySetTimeout(()=>{
    console.log("Hello Promise...")
},5000);


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
// ToDo: Գրել Ֆունկցիա որը կանչելով հետևյալ կերպ կվերադարձնի նոր array որը կունենա ներքևում նշված տեսքը։

const arr1 = ["HH","BB","KK","OO","LL"];

//Ստանում ենք
// let finArr  =  ["HH","BB","Levon","KK","OO","Ararat","LL"];

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


// Lyov version>>
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
// ToDo: Գրել Ֆունկցիա որը կանչելով հետևյալ կերպ կվերադարձնի object որը կունենա ներքևում նշված տեսքը։

// const arr2 = ["Ararat", "Levon", 25, true, false];

//arr2.getObjectWithKeys(["name","name1",null,"name2"]);

// Արդյունքը պիտի լինի
const resObj = {
    name0 : "Ararat",
    name1 : "Levon",
    name2 : true
}

Array.prototype.getObjectWithKeys = function(arrKeys){
    const resObj = {};
    for(let i = 0; i <= this.length; i++) {
        let key = arrKeys[i];
        if(key == null){
            continue;
        }
        resObj[key] = this[i];
    }
    return resObj;
};

const finArr = arr.getObjectWithKeys(["name1","name2",null,"name3"]);
console.log(finArr)


//////////////////////////////>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 8․-----------------------------------------------------------------------------
// ToDo: Տվյալ կոդը run անելուց հետո մտնում ա catch-ի մեջ։
//  Նշված կոդը նենց անել(օգտագործել մենակ var) որ տպի հետևյալը(1 վայրկյանը մեկը)>
// START_VALUE
// 0
// 1
// 2
// 3
// 4
// this is data 4

// const object = {
//     value: "Hello",
//     changevalue(value) {
//         this.value = value;
//         return this.value
//     }
// };
//
// let x = 5;
//
// const testPromise = new Promise((res, rej) => {
//     res(this.changevalue(x))
// }).then((data) => {
//     // Պիտի տպի x թիվը
//     console.log("START_VALUE",data);
//     return data
// }).catch((data) => {
//     console.log(data, "CANT CONTINUE");
// }).then((data) => {
//     // Պիտի 1 վայրկյանը մեկ տպի 0-ից մինչև x-1 թիվը
// }).then((data) => {
//     // Data-ն պետք է լինի x-1 թիվը
//     console.log("this is data", data)
// });


// ToDo: Solution:

const objX = {
    value: "Hello",
    changevalue(value) {
        this.value = value;
        return this.value
    }
};

let x = 5;

const testPromise = new Promise((res, rej) => {
    function handler() {
        res(this.changevalue(x))
    }
    handler.call(objX);
}).then((data) => {
    // Պիտի տպի x թիվը
    console.log("START_VALUE",data);
    return data
}).catch((data) => {
    console.log(data, "CANT CONTINUE");
}).then((data) => {
    // Պիտի 1 վայրկյանը մեկ տպի 0-ից մինչև x-1 թիվը
    const perSecond = new Promise ( (res,rej) => {
        function hold(param) {
            console.log(param);
            if(param === (data - 1) ) {
                return res(param);
            }

            setTimeout( () => {
                param = param + 1;
                hold(param);
            }, 1000)
        }
        hold(0);
    } );
    return perSecond;

}).then((data) => {
    // Data-ն պետք է լինի x-1 թիվը
    console.log("this is data", data)
});

// 9․-----------------------------------------------------------------------------
// ToDo: Գրել async ֆունկցիա, որը 5 վայրկյան հետո կտպի Hello:

// callTimer(5000,()=>{console.log("Hello")})

console.log(num);

if(false){
    var num = 5;
}

//will return undefined !

///////////////////////////////////////////////////////////////////////////////


// 10․-----------------------------------------------------------------------------
// ToDo: a փոխականի var-ը չփոխելով նենց անել որ տպի 0-ից 5 ։

for(var ind = 0; ind <= 5; ind++){
    setTimeout(()=>{
        console.log(ind)
    })
}

// Solution:
for(var ind = 0; ind<5; ind++){
    (function (ind){
        setTimeout(()=>{
            console.log('value of index>', ind)
        })
    })(ind)
}
// ------------------------------------------->
