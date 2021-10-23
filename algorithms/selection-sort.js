function swap(arr, x, y) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

function selectionSort(arr, length) {
    let i, j, minIndex;
    // One by one move boundary of unsorted subarray
    for (i = 0; i < length - 1; i++)
    {
        // Find the minimum element in unsorted array
        minIndex = i;
        for (j = i + 1; j < length; j++)
        if (arr[j] < arr[minIndex])
            minIndex = j;
        // Swap the found minimum element with the first element
        swap(arr, minIndex, i);
    }
}

function printArray(arr, size) {
    for (let i = 0; i < size; i++)
        console.log(arr[i] + " ");
}

const arr = [64, 25, 12, 22, 11];
const length = arr.length;

selectionSort(arr, length);
console.log("Sorted array via Selection Sort: ");
printArray(arr, length);