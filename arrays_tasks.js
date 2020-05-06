'use strict';

//Given an array, find max value
let arr = [23, 14, 53, 4, 0, 56, 7, -49, 0, 19, 3];

let max = arr[0];
for(let i = 0; i <= arr.length; i++) {

    if(arr[i] >= max){
        max = arr[i];
    }

}

//console.log(arr)
//console.log('max is:', max)

//find the max value with function declaration
function getMax(arr) {
    let max = arr[0];

    for(let i = 0; i <= arr.length; i++) {
        if(arr[i] >= max) {
            max = arr[i];
        }
    }
    return max;
}

console.log('max value is:', getMax(arr));


//find the min value from the given array

const getMin = function(arr) {
  let min = arr[0];
  for (let i = 0; i <= arr.length; i++) {
      if (arr[i] <= min) {
          min = arr[i];
      }
  }
  return min;
};

console.log('min value is:', getMin(arr));

//


