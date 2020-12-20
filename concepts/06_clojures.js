
function counter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
        return count;
    }
}

let incrCount = counter();
incrCount();
incrCount();
incrCount();


console.log('==========');
function operationFirst(num1) {
    var summ = 48;
    function operationSecond(num2) {
        console.log( num1 + num2);
        console.log( 'summ',summ);
        summ++;
        return summ;
    }
    return operationSecond;
}

let plusValue = operationFirst(12);
plusValue(3);


console.log(plusValue)
console.log(typeof plusValue)

plusValue(10);
plusValue(10);

console.log('===============>')
function adder() {
    let count = 0;
    return function(){
        count++;
        console.log(count);
        return count;
    }
}

const addFunction = adder();
addFunction()
addFunction()
addFunction()
addFunction()


let num1 = 3333;

function f1( ) {

    let num1 = 45;


    return function f2() {
        console.log(num1);
    }

}

const finFunc = f1();

finFunc();









