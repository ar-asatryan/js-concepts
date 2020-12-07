// 1․-------------------------------------------------------------------
// ToDo: Էս նույն կոդը գրել մի տողով, օգատործելով || և && օպերատորները։
// let a = 85;
// let b = 55;
// let c = 165;
//
// if(a<b){
//     console.log("1")
// }
// else if(c<a){
//     console.log("2")
// } else{
//     console.log("3")
// };

// ToDo: Solution>>

// 2.----------------------------------------------------------------------
//ToDo:  Տպել 1-25 թվերը հերթականությամբ, սակայն Թվերը որոնք
// բաժանվում են 5-ի կամ 3-ի դրանց փոխարեն տպել`համապատասխանաբար "Five" ու "Three":

// ToDo: Solution>>
// for(let i = 1; i <= 25; i++) {
//
//     if(i%3 == 0 && i%5 == 0) {
//         console.log("Three and Five");
//     } else if (i % 3 == 0) {
//         console.log('Three');
//     } else if (i%5 == 0) {
//         console.log('Five')
//     }else {
//         console.log(i)
//     }
// }

// 3․--------------------------------------------------------------------------
// ToDo: Էս կոդի կտորը ցանկացած հնարավոր ձևով պահելով,
//  նենց անել որ this-ը լինի վերևի object-ը:

// const obj = {
//     name : "AroRay"
// };
//
// setTimeout(()=>{
//     console.log(this)
// },2000);
//
// // ToDo: Solution>>
//
// function reAssigner() {
//
//     setTimeout(()=>{
//         console.log('timer finished>>', this)
//     },1000);
// }
//
// reAssigner.call(obj);


// 4․---------------------------------------------------------------------------
// ToDo: setInterval-ով ստանալ setTimeout և հակառակը
// ToDo: Promise-ով ստանալ setTimeout և հակառակը


// function mySetTimeout(cb,time) {
//     let timerX;
//     timerX = setInterval( () => {
//         cb();
//         clearInterval(timerX);
//     } , time);
// }
//
// mySetTimeout(() => console.log('mySetTimeout', 15), 2000);

// function mySetTimeout(callback,time) {
//     return new Promise( (res) => {
//         setTimeout( () => {
//             res();
//         }, time);
//     }).then( () => {
//         callback();
//     });
// }
//
// mySetTimeout( () => console.log('mySetTimeout', 13), 3000)



// 5․-----------------------------------------------------------------------------
// ToDo: Գրել Ֆունկցիա որը կանչելով հետևյալ կերպ կվերադարձնի նոր array`
//  որը կունենա element-ները նշված type-ով:

const arr = ["Levon", "Ararat", 15, 16, true, false];
const arr1 = ["HH","BB","KK","OO","LL"];


Array.prototype.getArrayByElementTypes = function(type) {

    let returnedArr = [];
    for (let el = 0; el < this.length; el++) {
        if ( typeof this[el] === type) {
            returnedArr.push(this[el]);
        }
    }
    return returnedArr;
}

console.log(arr.getArrayByElementTypes('boolean'));

