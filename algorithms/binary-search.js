// A recursive binary search function.
// It returns location of x in given array arr[left...right] is present, otherwise -1
function binarySearch(arr, left, right, searchedElem) {
    if (right >= left) {
        let mid = left + Math.floor((right - left) / 2);
        // If the element is present at the middle itself
        if (arr[mid] == searchedElem)
            return mid;
        // If element is smaller than mid, then it can only be present in left subarray
        if (arr[mid] > searchedElem)
            return binarySearch(arr, left, mid - 1, searchedElem);
        // Else the element can only be present in right subarray
        return binarySearch(arr, mid + 1, right, searchedElem);
    }
    // We reach here when element is not present in array
    return -1;
}

let arr = [ 2, 3, 4, 10, 40 ];
let searchedElem = 40;
let length = arr.length
let result = binarySearch(arr, 0, length - 1, searchedElem);
(result == -1)
    ? console.log( "Element is not present in array")
    : console.log("Element is present at index: " +result);