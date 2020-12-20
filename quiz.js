// ToDo: 01

switch(1) {
    case 2 : console.log(2); break;
    default: console.log(15);
    case 4: console.log(20)
}

// ToDo: 02

// Promise.reject()
//     .then(() => {
//         console.log('then1')
//     })
//     .catch(() => {
//         console.log('catch')
//     })
//     .then(() => {
//         console.log('then2')
//     })

// ToDo: 03

Promise.resolve()
    .then(() => {
        setTimeout(() => {
            console.log('setTimeout 1')
        }, 0)
    })
    .then(() => {
        console.log('then')
    })
setTimeout(() => {
    console.log('setTimeout 2')
}, 0)