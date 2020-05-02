//functions exploration:

function addElems(num1, num2, count) {

    return count/num1+num2;
}

addElems(2,4,43)

console.log(addElems);

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

