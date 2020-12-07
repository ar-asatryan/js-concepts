// ToDo: Here what there is given>>>
function display1(){
    setTimeout(() => {
        console.log(1)
    }, 4000);
};

function display2(){
    setTimeout(() => {
        console.log(2)
    }, 3000);
};

function display3(){
    setTimeout(() => {
        console.log(3)
    }, 1000);
};

function display(){
    display1();
    display2();
    display3();
};

display()
//ToDo: need to print 1 , 2 , 3, one after another !

// Solution>>
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

display(display1,display2,display3);


