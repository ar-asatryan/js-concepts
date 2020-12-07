// function a (){
//     x = 5;
// };

// a();



// setTimeout(()=>{
//     console.log("a");
// });


// console.log("1");

// {
//     var a = 5
// };

// for(var i = 0; i < 10 ; i ++){
//     (function(i){
//         setTimeout(()=>{
//             console.log(i)
//         });
//     })(i);
// };


// function b(x){
//     var a = 6
// };


// b();

// if(true){
//     var a  = 7;
// }

// console.log(a);


// setInterval(() => {

// });

// async function mySetTimeout(time) {
//     return new Promise((res)=>{
//         setTimeout(()=>{
//             res()
//         },time)
//     })
// };

// async function mySetTimeout1(){
//     await mySetTimeout(()=>{
//         console.log("Hello")
//     },3000)
// }


// (async () => {
//     await mySetTimeout(3000);
//     console.log("Hello");
// })()

// const array = [
//     {
//         a: "hello1"
//     },
//     {
//         a: "hello2"
//     },
//     {
//         a: "hello3"
//     },
//     {
//         a: "Name4"
//     }
// ];

// Array.prototype = function(){

// }
// let array1 = [];
// for (let element of array) {
//     if (element.a.includes("v")) {
//         console.log(element);
//         array1.push(element);
//     }
// };


// const array2 = array.filter(e => e.a.includes("v")).map(e => e.a);


// console.log(array2);


// let animalActions = {
//     set setInfo(value) {
//         [this.name, this.age] = value.split(" ");
//     },

//     get getInfo() {
//         return `this is animal ${this.name} with  ${this.age} age`;
//     }
// };

// const Animal = function (name, age) {
//     this.name = name;
//     this.age = +age;
//     this.__proto__ = animalActions;
// };

// let rabbit = new Animal("Rabbit","10");

// console.log(rabbit.getInfo);

// rabbit.setInfo =  "DonaldRabbit 15"

// console.log(rabbit.getInfo);




// function a(cb){
//   typeof cb === "function" && cb()
// };


// // a(()=>{
// //     console.log("Hello")
// // })

// a(5);


// try{
//     console.log(k)
// }catch(e){
//     // console.log(e)
// };

// console.log("Hello")


// let a = 50;

// function asyncFuncton(cb) {
//     setTimeout(() => {
//         a = 100;
//         cb();
//     },1000);
// }

// function consoleData() {
//     console.log(a);
// };


// asyncFuncton(consoleData)




// let a;

// let redis = {
//     data1 : "Hello",
//     data2 : "hello1"
// };


// function getRedis(cb, time) {
//     setTimeout(() => {
//         a = redis.data1;
//         cb && cb();
//     }, time);
// };

// getRedis(() => {
//     console.log(a);
//     getRedis(() => {
//         console.log(a + "KKK");
//         getRedis(()=>{
//             console.log(a,"JJJ")
//         },5000)
//     }, 3000);
// }, 2000);

// console.log(a);


// function K(cb){
//     cb()
// };

// const j = new K(()=>{console.log("O")})


// let a;

// let redis = {
//     data1: "Hello",
//     data2: "hello1"
// };


// function getRedis(cb, time) {
//     setTimeout(() => {
//         a = redis.data1;
//         cb && cb();
//     }, time);
// };

// const pr = new Promise((res,rej) => {
//     getRedis(() => {
//         res(a)
//     }, 5000)
// });

// pr.then((data) => {
//     console.log(data);
//     return new Promise((res)=>{
//         getRedis(() => {
//             res(a)
//         }, 6000)
//     });
// }).then((data) => {
//     console.log(data + "KKKK");
//     return new Promise((res) => {
//         getRedis(() => {
//             res(a)
//         }, 1000)
//     });
// }).then((data) => {
//     console.log(data + "JJJJ")
// });

// const pr = new Promise((res,rej) => {
//     console.log(sdiusabui);
//     getRedis(() => {
//         res(a)
//     }, 5000)
// });

// pr.then(()=>{
//     console.log("Hello")
// },()=>{
//     console.log("Hello1")
// })
// pr.then(()=>{
//     console.log(c)
// })
// .catch((data)=>{
//     console.log(data);
//     console.log("LLL")
// })

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