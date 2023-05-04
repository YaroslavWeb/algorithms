"use strict";
const numbers = [3, 9, 2, 1, 7, 8, 6, 0, 4, 3];
function bubbleSort(arr) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort(numbers));
