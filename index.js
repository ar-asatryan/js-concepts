

const arr1 = ["HH","BB","KK","OO","LL"];
// arr1.insertArrayByNumber(["Levon","Ararat"],2);

//Ստանում ենք
//    ["HH","BB","Levon","KK","OO","Ararat","LL"]



const arr2 = ["Ararat","Levon",25,true,false];

//arr2.getObjectWithKeys(["name","name1",null,"name2"]);

// Արդյունքը պիտի լինի
// {
//     name : "Ararat",
//     name1 : "Levon",
//     name2 : true
// }


// console.log(this)
//
//
// let getMax = function(arr) {
//     let max = arr[0];
//     for(let i = 0; i <= arr.length; i++) {
//         if(arr[i+1] >= arr[i]) {
//             max = arr[i+1];
//         }
//     }
// }
//
// let user = {
//     name: "John",
//     age: 30,
//
//     sayHi() {
//         // "this" is the "current object"
//         alert(this.name);
//     }
//
// };
//
// user.sayHi();
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


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


// գրել async ֆունկցիա, որը 5 վայրկյան հետո կտպի Hello:
//
//callTimer(5000,()=>{console.log("Hello")})
//


console.log(a);

if(false){
    var a = 5;
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var a = 10;
// էս գլոբալ սկոպի a-նա
{
    var a = 5;
    //  էսի ինչ որ x սկոպի a-նա, բայց քանի որ var-ի դեպքում {} էս սկոպ չի, ինքը նույն գլոբալ a-նա
    console.log("This is first a>>>>>",a);
}
console.log("This is second a>>>>>",a);


//Ստեղ երկուսն էլ 5-ա տպելու


let a = 10;
// էս գլոբալ սկոպի a-նա
{
    let a = 5;
    //  էսի ինչ որ x սկոպի a-նա, ու քանի որ let ենք գրել ինքը իրոք ուրիշ a-յա
    console.log("This is first a>>>>>",a);
}
console.log("This is second a>>>>>",a);


//Ստեղ մեկը 5-ա մյուսը 10

//////////////////>>>>>>>>>>
(function (a){
    // պատկերացնենք էսի գլոբալ սկոպնա
    console.log("This is first a>>>>>",a);
})(10)

(function (a){
    // պատկերացնենք էսի x սսկոպնա
    console.log("This is second a>>>>>",a);
})(10)
//////////////////>>>>>>>>>>

//Ստեղ նենց եմ գրեմ ոնց որ var-երը աշխատում են let գրելու ժամանակ


(function (a){
    // պատկերացնենք էսի գլոբալ սկոպնա
    console.log("This is first a>>>>>",a);
    (function (a){
        // պատկերացնենք էսի x սսկոպնա
        console.log("This is second a>>>>>",a);
    })(5)
})(10)


for(var a = 0;a<5;a++){
    setTimeout(()=>{
        console.log(a)
    })
}


var a = 0;

{
    console.log(a);
    a++
}
{
    console.log(a);
    a++
}
{
    console.log(a);
    a++
}
{
    console.log(a);
    a++
}
{
    console.log(a);
    a++
}


for(let a = 0;a<5;a++){
    setTimeout(()=>{
        console.log(a)
    })
}

