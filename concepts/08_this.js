// N1․--------------------------------------------------------------------------
// ToDo N1: Էս կոդի կտորը ցանկացած հնարավոր ձևով պահելով, ինչ ուզում ես ավելացրու,
//  նենց արա որ this-ը լինի վերևի object-ը
// const obj = {
//     name : "Levon"
// };

// setTimeout(()=>{
//     console.log(this)
// },2000);

// TODO Solution:
// function thisAssign () {
//     setTimeout(() => {
//         console.log(this);
//     }, 3000)
// }

//thisAssign.call(obj);

// N2․--------------------------------------------------------------------------
// ToDo N2: Գրել ֆունկցիա որի որպես առաջին պարամետր տալիս են մեկ այլ ֆունցիա, մյուս պարամետրով օբյեկտ
//  Ու էդ ֆունկցիան կանչվումա ու իրա this-ը լինումա էդ object-ը, ու ամեն անգամ էդ ֆունկցիայից հետը նորից
//  կանչելով ու որպես պարամետր նոր object տալով կանչվումա՝ որպես պարամետր տրված ամենասկզբի ֆունկցիան,
//  բայց արդեն նոր ստացած object-ը որպես this։

const obj0 = {
    name: "Ray"
};

const obj1 = {
    name: "Aro"
};

const obj2 = {
    name : "Sherlock"
};


function getFunctionWithThis(cb, obj) {
    cb.call(obj);
    return function calling(par) {
        if (par) {
            cb.call(par)
            return calling
        }

    }
};

getFunctionWithThis(function () {
    console.log(this.name)
}, obj0)(obj1)(obj2)(obj1)(obj2);



// ToDo: Գրել MyBind() ֆունկցիա


function myBind(cb, obj) {
    return function() {
        cb.call(obj);
    }
}

const obj1 = {
    name1: "AroRay"
}

function func1() {
    console.log('func1',this)
}

const y = myBind(func1, obj1);


y()

