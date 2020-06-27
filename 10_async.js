// ToDo: 1.

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


// ToDo: 2.

//console.log(redisObj.data);

let a;

function getDataFromRedis (value,cb) {
    setTimeout(() => {
        value = redisObj.data1;
        cb && cb(value);
    }, 2000)
}

function logData (value) {
    console.log(value)
}

//getDataFromRedis(a);
getDataFromRedis(a, logData);
logData(a);

// ToDo: 3.

const redisObj = {
    data1: 'redis_data1',
    data2: 'redis_data2'
};

let a;

function getRedisData(cb, value) {

    const pr = new Promise( (res, rej) => {
        setTimeout(()=>{
            value = redisObj.data1;
            res(value);
        },2000)
    });

    pr.then( () => {
        cb(value);
    });
}

function logData(value) {
    console.log(`get the value of the ${value}`);
}

getRedisData(logData, a);

// ToDo: 4.


const redisObj = {
    data1: 'redis_data1',
    data2: 'redis_data2'
};

let a;

async function getRedisData(cb,value) {
    const promiseX = new Promise( (res, rej) => {
        setTimeout( () => {
            value = redisObj.data1;
            res();
        }, 1000)}
    );

    await promiseX;
    cb(value);
}

function logData(value) {
    console.log(value)
}

getRedisData(logData, a)
