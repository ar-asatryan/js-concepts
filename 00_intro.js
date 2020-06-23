'use strict';
//
// console.log(num);
// var num = 1;
//
//
// try{
//     a = 5
// }catch (e) {
//     console.log(e)
// }
// console.log("Hello")
// "use strict"
// function f() {
// "use strict";
    // ToDo: min>> 25:40 - (JavaScript from scratch)
// a = 8;
// }
// f()
// x = 5;
//
// console.log(5);
// function strictFunction(){
//"use strict";
// let y = 10;
// delete y;

// function i(a,a) {
//     console.log(a)
// };
//
// i(15,10)

// const u = {
//     name1 : "Levon",
//     name2 : "Ararat",
// };
//
// Object.freeze(u);
// //sealed
//
// u.name1 = "isdbfds";
//
//
// console.log(u)

// const package = 5;
//
// console.log(package)

// function f(x, o) {
//     with (o) {
//         console.log(x);
//     }
// }
//
//     eval("console.log('this is executed by eval()')");
//
//     function f1() {
//         console.log(this)
//     }
//
//     f1()
// };
//
// strictFunction();
// let a = 5;
//
// delete a;
//
//
// const u = {
//     name1 : "Levon",
//     name2 : "Ararat",
// };
//
// Object.freeze(u);
//
// u.name1 = "isdbfds";
//
//
// console.log(u);
//
// const package = 5;
//
// console.log(package);
//
//
// function f(x, o) {
//     with (o) {
//         console.log(x);
//     }
// }
//
// function f1() {
//     console.log(this)
// }
//
// f1()
//
// let gg;
// var hh;
// console.log(hh)
// hh = 5;
// console.log(gg);
// gg = 10;
//
// const ll = 55;
//
// function p() {
//     var u = 89;
// }
//
// try {
//     var p
// }
// catch (e) {
//     console.log(e)
// };
//
// {
//     let oo = 77;
// };
//
// const PORT = 5000;
//
// let isDisplayed = true;
//
// let mm = 5;
//
// "hello";
// 'hello';
// `hello`;
//
// //null ==> 0x123
//
// let jj = NaN;
// console.log(jj.u)
//
//
// console.log(typeof null)

// Number("5");
// +"5";
//
// undefined => Nan;
// null => 0;
// true/false => 1/0;
// string => 25,NaN,0

// console.log(+"")


// Boolean();
// !"hello";
//
// console.log(Boolean("Hello"));
// console.log(Boolean("0"));
// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean([false]));

//String();
// ""  + 25;
//
// Object.prototype.toString = function(){
//     return "Hello156"
// }
//
// console.log(String("-1"));
// console.log(String(false));
// console.log(String(undefined));
// console.log(String(null));
// console.log(String({}));
// console.log(String());


// console.log( (7 || 5) && 8)

// + - / * % ** ^

console.log(Number.prototype);


//console.log(Math.)

Math.sqrt(625)

console.log(Math.sqrt(49))
console.log(Math.pow(4,2))


// == === > < >= <=
//
// console.log(""+4)
//
//
// console.log(typeof (""**4) );
//
// let h = 5;
//
// console.log(h++);
// console.log(h)

// console.log("4" >= 4);

// console.log(null == undefined)


// || && !

// console.log({} || 5);

const obj = {
    name : "Ararat",
    "surname" : "Asatryan",
    "place of life" : "Masis",
};
//
// for(let prop in obj){
//
//     console.log(typeof prop);
//     console.log(obj["place of life"])
// };
//
// function f(y) {
//     "use strict"
//     console.log(this);
//     console.log(y)
// };
// // obj.hh = f;
// f();
// // obj.hh();
// f.call(obj,"Hello");
// f.apply(obj,["Hello"]);
// const ooo = f.bind(obj,"Hello");
// ooo();

// Function.prototype.myBind = myBind;
//
// function myBind(obj) {
//     return function () {
//         console.log(this)
//     }
// };
//
// function f() {
//
// };
//
// const h = f.myBind();
//
// h()

// function myBind(func,obj) {
//     return function(){
//         func.call(obj)
//     }
// };
//
// function f() {
//     console.log(this)
// };
//
// const kkk = myBind(f,obj);
//
// kkk()

// {
//     bool : false
// }

// const a = new Boolean(false);
// const j = false;
// console.log(a);

const actions = {
    run(){
        console.log(this.name + " is Running")
    },
    hh : "Hello",
    set hh1(hh){
        this.hh = hh;
    }
};

function Animal(name = "animal",age = 0) {
    this.name = name;
    this.age = age;
};


Animal.prototype = actions;

const rabbit = new Animal("rabbit",77);
const lion = new Animal();

rabbit.run();

lion.run();
lion.hh1 = "yufbsudbu";
console.log(lion.hh);

console.log(rabbit.hh);
// const rabbit = {
//     name : "rabbit",
//     age : 1
// };
//
// const lion = {
//     name : "lion",
//     age : 3
// };
//
// rabbit.__proto__ = animal;
// lion.__proto__ = animal;
// rabbit.run();
// lion.run();