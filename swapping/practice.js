function swapArrayElements(arr, index1, index2) {
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        console.error("Invalid indices provided for swapping.");
        return;
    }


    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

// Example usage:
let myArray = [1, 2, 3, 4, 5];
console.log("Original Array:", myArray);

// Swap elements at index 1 and 3
swapArrayElements(myArray, 1, 3);
console.log("Array after swapping elements at index 1 and 3:", myArray);