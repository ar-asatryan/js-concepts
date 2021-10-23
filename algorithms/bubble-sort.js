function bubbleSort(arr, length) {
    var i, j, temp;
    var swapped;
    for (i = 0; i < length - 1; i++)
    {
        swapped = false;
        for (j = 0; j < length - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                // swap arr[j] and arr[j+1]
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        // IF no two elements were
        // swapped by inner loop, then break
        if (swapped == false)
            break;
    }
}

function printArray (arr, size) {
    for(let i = 0; i < size; i++) {
        console.log(arr[i] + " ");
    }
}

const arr = [ 64, 34, 25, 12, 22, 11, 90 ];
const length = arr.length;

bubbleSort(arr, length);
console.log("Sorted array via Bubble Sort: ");
printArray(arr, length);

