// ToDo: 1.

let redisObj = {
    data1: {
        "what": "redis data",
        "type": "object",
        "isOkay": true
    },
    data2: 'redis_data2'
};

let data;

function getRedis(cb,time) {
    setTimeout( () => {
        data = redisObj.data1;
        cb()
    }, time)
}

console.log("value of data: (case1)", data)


getRedis(() => {
    console.log("value of data: (case2)", data);
    getRedis(() => {
        console.log("value of data: (case3)",data);
    }, 2000);
}, 1000);


// ToDo: 2. Via Callback>>

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
getDataFromRedis(data, logData);
logData(data);

// ToDo: 3. Via Promise>>

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

// ToDo: 4. via Async/Await


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

// ToDo: START INTERVIEW>>>


/////////////////////////////////////
// ToDo: N1
async function getData(url) {

    return new Promise( (res) => {
        const timerX = setTimeout( () => {
            res("data "+ url);
        }, 3000);
        setTimeout( ()=>{
            res("Got_Data");
            clearInterval(timerX);
        }, 1000);
    });
}


(async function f1() {
    const arr = ["google.com", "github.com", "nodejs.org"];
    const data = await Promise.all(arr.map(elem => getData(elem)));
    console.log(data);

})();
///////////////////////////////////////

//ToDo: N2
async function getData(url) {

    return new Promise( (res) => {
        const timerX = setTimeout( () => {
            res(null);
        }, 3000);

    });

    const pr2 = new Promise( ()=>{
        setTimeout( ()=>{
            res("Got_Data");

        }, 1000);
    });

}


(async function f1() {
    const arr = ["google.com", "github.com", "nodejs.org"];
    const data = await Promise.all(arr.map(elem => getData(elem)));
    console.log(data);

})();

///////////////////////////////////////////////////////////

// ToDo: N3


async function getData(url) {

    return new Promise( (res) => {
        const timerX = setTimeout( () => {
            res("get data");
        }, 3000);

    });
}


(async function f1() {
    const arr = ["google.com", "github.com", "nodejs.org"];


    const arrPromises = [Promise.all(arr.map(elem => getData(elem))),
        new Promise((res)=>{
            setTimeout(()=>{
                res(null)
            }, 2000)
        })];

    const data = await Promise.race(arrPromises);
    console.log(data);

})();

//////////////////////////////////////////////////////////////
