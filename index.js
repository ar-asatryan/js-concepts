console.log('start')
//
let redisObj = {
    data1: 'red_data1',
    data2: 'red_data2'
};

let a;

function getRedis(cb,time) {
    setTimeout( () => {
        a = redisObj.data1;
        cb()
    }, time)
}

console.log("value of a: (case1)", a)


getRedis(() => {
    console.log("value of a: (case2)", a);
    getRedis(() => {
        console.log("value of a: (case3)",a);
    }, 3000);
}, 2000);