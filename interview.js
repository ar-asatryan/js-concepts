// 1․-------------------------------------------------------------------
// ToDo: Էս նույն կոդը գրել մի տողով, օգատործելով || և && օպերատորները։
// ToDo: Էս նույն կոդը գրել մի տողով, օգատործելով Ternary օպերատորը։
let a = 85;
let b = 55;
let c = 165;

if(a<b){
    console.log("1")
}
else if(c<a){
    console.log("2")
} else{
    console.log("3")
};

// ToDo: Solution>>

// with && and || operators
a<b&&console.log("1")||c<a&&console.log("2")||a>b&&a<c&&console.log("3");

// with Ternary Operator
a<b?console.log("1"):c<a?console.log("2"):console.log("3");

// 2.----------------------------------------------------------------------
//ToDo:  Տպել 1-25 թվերը հերթականությամբ, սակայն Թվերը որոնք
// բաժանվում են 5-ի կամ 3-ի դրանց փոխարեն տպել`համապատասխանաբար "Five" ու "Three":

// ToDo: Solution>>
for(let i = 1; i <= 25; i++) {

    if(i%3 == 0 && i%5 == 0) {
        console.log("Three and Five");
    } else if (i % 3 == 0) {
        console.log('Three');
    } else if (i%5 == 0) {
        console.log('Five')
    }else {
        console.log(i)
    }
}

// 3․--------------------------------------------------------------------------
// ToDo: Էս կոդի կտորը ցանկացած հնարավոր ձևով պահելով,
//  նենց անել որ this-ը լինի վերևի object-ը:

const obj = {
    name : "AroRay"
};

setTimeout(()=>{
    console.log(this)
},2000);

// ToDo: Solution>>

function reAssigner() {

    setTimeout(()=>{
        console.log('timer finished>>', this)
    },1000);
}

reAssigner.call(obj);


// 4․---------------------------------------------------------------------------
// ToDo: setInterval-ով ստանալ setTimeout և հակառակը
// ToDo: Promise-ով ստանալ setTimeout և հակառակը

// ToDo 4.1 ->
function mySetTimeout(cb, time) {
    let timerX;
    timerX = setInterval(() => {
        cb();
        clearInterval(timerX);
    }, time);
};

mySetTimeout(() => {
    console.log("Hello setInterval...")
}, 5000);

// ToDo 4.2 ->
function mySetInterval() {
    console.log("logging every second !");
    setTimeout(mySetInterval, 1000);
}
mySetInterval();

function mySetInterval(cb,time) {
    console.log("logging every second !");
    setTimeout(() => {
        mySetInterval()
    }, time);
}
mySetInterval(() => { console.log("logging every second !")}, 1000);

// ToDo 4.3 ->

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
// ToDo: Գրել Ֆունկցիա որը կանչելով հետևյալ կերպ կվերադարձնի նոր array`
//  որը կունենա element-ները նշված type-ով:

const arr = ["Levon", "Ararat", 15, 16, true, false];
const arr1 = ["HH","BB","KK","OO","LL"];

//arr.getArrayByElementTypes("boolean");
//Ստանում ենք>
// finArr  -->  [true,false];

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


// 6․-----------------------------------------------------------------------------
// ToDo: Գրել Ֆունկցիա որը կանչելով հետևյալ կերպ կվերադարձնի նոր array որը կունենա ներքևում նշված տեսքը։

//const arr1 = ["HH","BB","KK","OO","LL"];

// arr1.insertArrayByStep(["Levon","Ararat"],2);
//Ստանում ենք
// let finArr  =  ["HH","BB","Levon","KK","OO","Ararat","LL"];

Array.prototype.insertArrayByStep = function(arrX,step){
    const returnedArray = [];
    for(let i = 0, j =0; i<this.length && j < arrX.length; i++){
        returnedArray.push(this[i]);
        if( (i+1)%step === 0 && i !== 0 ){
            returnedArray.push(arrX[j]);
            j++;
        }
    };
    return returnedArray
};

let res = arr1.insertArrayByStep(["Levon","Ararat"],2);
console.log('merged array>>>', res);

// 7․-----------------------------------------------------------------------------
// ToDo: Գրել Ֆունկցիա որը կանչելով հետևյալ կերպ կվերադարձնի object որը կունենա ներքևում նշված տեսքը։


//arr.getObjectWithKeys(["name","name1",null,"name2"]);

// Արդյունքը պիտի լինի
// const resObj = {
//     name0 : "Ararat",
//     name1 : "Levon",
//     name2 : true
// }

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
console.log(finArr);


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


// ToDo: Solution>>

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

// ToDo: Solution>>
async function callTimer(time,cb) {
    const promiseTimer = new Promise( (res) => {
        setTimeout( () => {
            res();
        } , time)
    });

    await promiseTimer;
    cb()
}

callTimer(5000,()=>{console.log("Hello")});


// 10․-----------------------------------------------------------------------------
// ToDo: a փոխականի var-ը չփոխելով նենց անել որ տպի 0-ից 5 ։

for(var ind = 0; ind <= 5; ind++){
    setTimeout(()=>{
        console.log(ind)
    })
}

// ToDo: Solution>>
for(var ind = 0; ind<5; ind++){
    (function (ind){
        setTimeout(()=>{
            console.log('value of index>', ind)
        })
    })(ind)
}

////---------------------------------!
console.log(num);
if(false){
    var num = 5;
}
//will return undefined !
////---------------------------------!

// 11․-----------------------------------------------------------------------------
// ToDo։
//
async function getData(url) {

    return new Promise( (res) => {
        const timerX = setTimeout( () => {
            res("data "+ url);
        }, 3000);
        setTimeout( ()=>{
            res("Got_Data");
            clearInterval(timerX);
        }, 1000);
    });
}


(async function f1() {
    const arr = ["google.com", "abc", "nodejs.org"];
    const data = await Promise.all(arr.map(elem => getData(elem)));
    console.log(data);

})();
// ------------------------------------------->

// 12․-----------------------------------------------------------------------------
//ToDo: N2
async function getData(url) {

    return new Promise( (res) => {
        const timerX = setTimeout( () => {
            res(null);
        }, 3000);

    });

    const pr2 = new Promise( ()=>{
        setTimeout( ()=>{
            res("Got_Data");

        }, 1000);
    });

}


(async function f1() {
    const arr = ["google.com", "abc", "nodejs.org"];
    const data = await Promise.all(arr.map(elem => getData(elem)));
    console.log(data);

})();

///////////////////////////////////////////////////////////

// 13․-----------------------------------------------------------------------------
// ToDo: N3
async function getData(url) {

    return new Promise( (res) => {
        const timerX = setTimeout( () => {
            res("get data");
        }, 3000);

    });
}


(async function f1() {
    const arr = ["google.com", "abc", "nodejs.org"];


    const arrPromises = [Promise.all(arr.map(elem => getData(elem))),
        new Promise((res)=>{
            setTimeout(()=>{
                res(null)
            }, 2000)
        })];

    const data = await Promise.race(arrPromises);
    console.log(data);

})();

//////////////////////////////////////////////////////////////