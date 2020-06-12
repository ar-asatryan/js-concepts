

//

console.log('execution', 'Operation1')
console.log('execution', 'Operation2')
console.log('execution', 'Operation3')

setTimeout(function () {
    console.log('setTimeout operation')
},5000)

console.log('execution', 'Operation4')
console.log('execution', 'Operation5')
console.log('execution', 'Operation6')



const funcExpr = function() {};

console.log(typeof funcExpr);


setTimeout( function() {
    console.log('console output')
}, 2000);



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

