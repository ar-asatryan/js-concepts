//connected to an index.html file for browser practicing !
'use strict';

console.log(num);
var num = 1;

setTimeout( function() {
    console.log('console output')
}, 2000);


for(let i = 1; i <= 25; i++) {

    if(i%3 == 0 && i%5 == 0) {
        console.log('5');
    } else if (i % 3 == 0) {
        console.log('3');
    } else if (i%5 == 0) {
        console.log("3 and 5")
    }else {
        console.log(i)
    }
}
console.log('=================>')
console.log(typeof {});
console.log(typeof []);
console.log(typeof function() {});
console.log(Boolean({}))
console.log(Boolean([]))
console.log(Boolean(function(){}))


console.log()