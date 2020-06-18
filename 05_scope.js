// var a = 10;
// // էս գլոբալ սկոպի a-նա
// {
//     var a = 5;
//     //  էսի ինչ որ x սկոպի a-նա, բայց քանի որ var-ի դեպքում {} էս սկոպ չի, ինքը նույն գլոբալ a-նա
//     console.log("This is first a>>>>>",a);
// }
// console.log("This is second a>>>>>",a);
//
//
// //Ստեղ երկուսն էլ 5-ա տպելու
//
//
// let a = 10;
// // էս գլոբալ սկոպի a-նա
// {
//     let a = 5;
//     //  էսի ինչ որ x սկոպի a-նա, ու քանի որ let ենք գրել ինքը իրոք ուրիշ a-յա
//     console.log("This is first a>>>>>",a);
// }
// console.log("This is second a>>>>>",a);
//
//
// //Ստեղ մեկը 5-ա մյուսը 10
//
// //////////////////>>>>>>>>>>
// (function (a){
//     // պատկերացնենք էսի գլոբալ սկոպնա
//     console.log("This is first a>>>>>",a);
// })(10)
//
// (function (a){
//     // պատկերացնենք էսի x սսկոպնա
//     console.log("This is second a>>>>>",a);
// })(10)
//     //////////////////>>>>>>>>>>
//
//     //Ստեղ նենց եմ գրեմ ոնց որ var-երը աշխատում են let գրելու ժամանակ
//
//
//     (function (a){
//         // պատկերացնենք էսի գլոբալ սկոպնա
//         console.log("This is first a>>>>>",a);
//         (function (a){
//             // պատկերացնենք էսի x սսկոպնա
//             console.log("This is second a>>>>>",a);
//         })(5)
//     })(10)
//
//

//
// var a = 0;
//
// {
//     console.log(a);
//     a++
// }
// {
//     console.log(a);
//     a++
// }
// {
//     console.log(a);
//     a++
// }
// {
//     console.log(a);
//     a++
// }
// {
//     console.log(a);
//     a++
// }

//wrong case
// for(var a = 0; a<5; a++){
//         setTimeout(()=>{ (function (a){
//             console.log("This is second a>", a);
//         })(5)
//     })
// }

for(let a = 0;a <= 5;a++){
    setTimeout(()=>{
        console.log(a)
    })
}


for(var a = 0; a<5; a++){
    (function (a){
        setTimeout(()=>{
            console.log('value of a>', a)
        })
    })(a)
}


