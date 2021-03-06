//functions exploration:

// function addElems(num1, num2, count) {
//
//     return count/num1+num2;
// }
//
// addElems(2,4,43)
//
// console.log(addElems);

let getMax = function(arr) {
    let max = arr[0];
    for(let i = 0; i <= arr.length; i++) {
        if(arr[i+1] >= arr[i]) {
            max = arr[i+1];
        }
    }
}



// Here what there is given>>>
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

//solution
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

//////////////////////////////////-------------------------------------->


// ToDo:

function display1(){

    const pr = new Promise( (res,rej)=>{
        setTimeout(() => {
            res();
            console.log(1);
        }, 4000);

    });
    return pr
    // pr.then( ()=>{
    //     cb()
    // });

};

function display2(){
    setTimeout(() => {
        console.log(2)
    }, 3000);
};

// function display3(){
//     setTimeout(() => {
//         console.log(3)
//     }, 1000);
// };

function display(){
    display1().then(()=>{
        display2();
    });
    // display2();
    // display3();



};

display();
/////////////////////////////////////////////////////////////////

// ToDo:
function display1(){

    const pr = new Promise( (res,rej)=>{
        setTimeout(() => {
            res();
            console.log(1);
        }, 4000);

    });
    return pr
    // pr.then( ()=>{
    //     cb()
    // });

};

function display2(){

    return new Promise((res,rej)=>{
        setTimeout(() => {
            res()
            console.log(2)
        }, 3000);
    });
};

function display3(){
    setTimeout(() => {
        console.log(3)
    }, 1000);
};

function display(){
    display1().then(()=>{
        display2().then(()=>{
            display3()
        });
    });
    // display2();
    // display3();
};

display()


// ToDo:


function display1(){

    return new Promise((res)=>{
        setTimeout(() => {
            res();
            console.log(1)
        }, 4000);
    });

};

function display2(){
    return new Promise((res)=>{
        setTimeout(() => {
            res()
            console.log(2)
        }, 3000);
    });
};

function display3(){
    return new Promise((res)=>{
        setTimeout(() => {
            console.log(3)
        }, 1000);
    });
};

async function display(){
    await display1();
    await display2();
    await display3();
};

display()

/////////////////////////////////////////////////////////////////

// ToDo:
function display1(a){

    return new Promise((res)=>{
        setTimeout(() => {
            res(a);
            console.log(1)
        }, 4000);
    });

};

function display2(b){
    return new Promise((res)=>{
        setTimeout(() => {
            res(b+2)
            console.log(2)
        }, 3000);
    });
};

function display3(){
    return new Promise((res)=>{
        setTimeout(() => {
            console.log(3)
        }, 1000);
    });
};

async function display(){
    const f = await display1(4);
    console.log('f',f)
    // await display2();
    const f2 = await display2(f);
    await display3();
};

display()

///////////////////////////////////////////////