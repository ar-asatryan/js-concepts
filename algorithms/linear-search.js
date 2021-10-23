function linearSearch(arr, length, searchedElem) {
    let i;
    for (i = 0; i < length; i++)
        if (arr[i] == searchedElem)
            return i;
    return -1;
}

// Test the code:

let arr = [ 2, 3, 4, 10, 40 ];
let searchedElem = 10;
let length = arr.length;
// Function call
let result = linearSearch(arr, length, searchedElem);
(result == -1)
    ? console.log("Element is not present in array")
    : console.log("Element is present at index: " + result);