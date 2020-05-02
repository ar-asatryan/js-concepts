'use strict';
//Given an array, find max value

let arr = [23, 14, 53, 4, 0, 56, 7, 0, 19, 3];

let max = arr[0];
for(let i = 0; i <= arr.length; i++) {

    if(arr[i] >= max){
        max = arr[i];
    }

}

console.log('max is:', max)

