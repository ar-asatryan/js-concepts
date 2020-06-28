
// ToDo:
const arr = [
    {
        cb: ()=>{console.log('element 1:')},
        time: 2000
    },{
        cb: ()=>{console.log('element 2:')},
        time: 3000
    },{
        cb: ()=>{console.log('element 3:')},
        time: 1000
    }
];

function promiseChaining(arr) {
    const prX = new Promise((res,rej)=>{
        setTimeout(()=>{
            arr[0].cb();
            res()
        },arr[0].time)
    });

    prX.then(()=>{
        arr[1].cb();
    });

}

promiseChaining(arr)












//console.log(global)