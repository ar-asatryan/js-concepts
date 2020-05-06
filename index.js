//connected to an index.html file for browser practicing !
'use strict';

console.log(num);
var num = 1;

setTimeout( function() {
    console.log('console output')
}, 2000);


for(let i = 1; i <= 25; i++) {

    if(i%3 == 0 && i%5 == 0) {
        console.log('5');
    } else if (i % 3 == 0) {
        console.log('3');
    } else if (i%5 == 0) {
        console.log("3 and 5")
    }else {
        console.log(i)
    }
}
console.log('=================>')
console.log(typeof {});
console.log(typeof []);
console.log(typeof function() {});
console.log(Boolean({}))
console.log(Boolean([]))
console.log(Boolean(function(){}))


console.log()


function display1(cb2,cb3){
    setTimeout(() => {
        console.log(1)

        cb2(cb3);
    }, 4000);
};

function display2(cb3){
    setTimeout(() => {
        console.log(2)
        cb3()
    }, 3000);
};

function display3(){
    setTimeout(() => {
        console.log(3)
    }, 1000);
};

function display(cb1,cb2,cb3){
    cb1(cb2,cb3);
    // display2();
    // display3();
};

display(display1,display2,display3)