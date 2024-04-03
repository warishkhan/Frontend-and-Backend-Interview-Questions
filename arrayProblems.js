// Write a function to find the maximum element in an array.

// 1st way

function findMax(arr) {
    if (arr.length === 0) {
        return null; // Return null if the array is empty
    }
    
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Example usage:
// const array = [3, 7, 2, 9, 5];
// console.log("Maximum element in the array:", findMax(array));

// 2nd way

function findMax(arr) {
    if (arr.length === 0) {
        return null; // Return null if the array is empty
    }
    return Math.max(...arr);
}

// Example usage:
// const array = [3, 7, 2, 9, 5];
// console.log("Maximum element in the array:", findMax(array));

// 3rd way

function findMax(arr) {
    if (arr.length === 0) {
        return null; // Return null if the array is empty
    }
    return arr.reduce((max, current) => Math.max(max, current), arr[0]);
}

// Example usage:
// const array = [3, 7, 2, 9, 5];
// console.log("Maximum element in the array:", findMax(array));

// 4th way

function findMax(arr) {
    if (arr.length === 0) {
        return null; // Return null if the array is empty
    }
    arr.sort((a, b) => a - b); // Sort the array in ascending order
    return arr[arr.length - 1]; // The last element is the maximum
}

// Example usage:
// const array = [3, 7, 2, 9, 5];
// console.log("Maximum element in the array:", findMax(array));

// 2. Write a function to find the minimum element in an array.

// 1st way

function findMin(arr) {
    if (arr.length === 0) {
        return null; // Return null if the array is empty
    }
    
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

// Example usage:
// const array = [3, 7, 2, 9, 5];
// console.log("Minimum element in the array:", findMin(array));

// 2nd way

function findMin(arr) {
    if (arr.length === 0) {
        return null; // Return null if the array is empty
    }
    return Math.min(...arr);
}

// Example usage:
// const array = [3, 7, 2, 9, 5];
// console.log("Minimum element in the array:", findMin(array));

// 3rd way

function findMin(arr) {
    if (arr.length === 0) {
        return null; // Return null if the array is empty
    }
    return arr.reduce((min, current) => Math.min(min, current), arr[0]);
}

// Example usage:
// const array = [3, 7, 2, 9, 5];
// console.log("Minimum element in the array:", findMin(array));

// 4th way

function findMin(arr) {
    if (arr.length === 0) {
        return null; // Return null if the array is empty
    }
    arr.sort((a, b) => a - b); // Sort the array in ascending order
    return arr[0]; // The first element is the minimum
}

// Example usage:
// const array = [3, 7, 2, 9, 5];
// console.log("Minimum element in the array:", findMin(array));

// 3. Write a function to find the sum of all elements in an array.

// 1st way

function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Example usage:
// const array = [3, 7, 2, 9, 5];
// console.log("Sum of all elements in the array:", findSum(array));

// 2nd way

function findSum(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

// Example usage:
// const array = [3, 7, 2, 9, 5];
// console.log("Sum of all elements in the array:", findSum(array));

// 3rd way

function findSum(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum;
}

// Example usage:
// const array = [3, 7, 2, 9, 5];
// console.log("Sum of all elements in the array:", findSum(array));

// 4th way

function findSum(arr) {
    return eval(arr.join('+'));
}

// Example usage:
// const array = [3, 7, 2, 9, 5];
// console.log("Sum of all elements in the array:", findSum(array));

// 4. Write a function to find the average of all elements in an array.

// 1st way

function findAverage(arr) {
    if (arr.length === 0) {
        return null; // Return null if the array is empty
    }
    
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

// Example usage:
// const array = [3, 7, 2, 9, 5];
// console.log("Average of all elements in the array:", findAverage(array));

// 2nd way

function findAverage(arr) {
    if (arr.length === 0) {
        return null; // Return null if the array is empty
    }
    
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / arr.length;
}

// Example usage:
// const array = [3, 7, 2, 9, 5];
// console.log("Average of all elements in the array:", findAverage(array));

// 3rd way

function findAverage(arr) {
    if (arr.length === 0) {
        return null; // Return null if the array is empty
    }
    
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum / arr.length;
}

// Example usage:
// const array = [3, 7, 2, 9, 5];
// console.log("Average of all elements in the array:", findAverage(array));

// 5. Write a function to reverse an array.

// 1st way

function reverseArray(arr) {
    const length = arr.length;
    for (let i = 0; i < Math.floor(length / 2); i++) {
        const temp = arr[i];
        arr[i] = arr[length - 1 - i];
        arr[length - 1 - i] = temp;
    }
    return arr;
}

// Example usage:
// const array = [3, 7, 2, 9, 5];
// console.log("Reversed array:", reverseArray(array));

// 2nd way

function reverseArray(arr) {
    return arr.reverse();
}

// Example usage:
// const array = [3, 7, 2, 9, 5];
// console.log("Reversed array:", reverseArray(array));

// 3rd way

function reverseArray(arr) {
    return arr.reduceRight((acc, val) => {
        acc.push(val);
        return acc;
    }, []);
}

// Example usage:
// const array = [3, 7, 2, 9, 5];
// console.log("Reversed array:", reverseArray(array));

// 4th way

function reverseArray(arr) {
    return Array.from(arr).reverse();
}

// Example usage:
// const array = [3, 7, 2, 9, 5];
// console.log("Reversed array:", reverseArray(array));

// 6. Write a function to remove duplicate elements from an array.

// 1st way

function removeDuplicates(arr) {
    return arr.filter((value, index) => arr.indexOf(value) === index);
}

// Example usage:
// const array = [3, 7, 2, 9, 5, 7, 3, 9];
// console.log("Array with duplicates removed:", removeDuplicates(array));

// 2nd way

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Example usage:
// const array = [3, 7, 2, 9, 5, 7, 3, 9];
// console.log("Array with duplicates removed:", removeDuplicates(array));

// 3rd way

function removeDuplicates(arr) {
    const uniqueArray = [];
    arr.forEach(element => {
        if (!uniqueArray.includes(element)) {
            uniqueArray.push(element);
        }
    });
    return uniqueArray;
}

// Example usage:
// const array = [3, 7, 2, 9, 5, 7, 3, 9];
// console.log("Array with duplicates removed:", removeDuplicates(array));

// 4th way

function removeDuplicates(arr) {
    const seen = {};
    return arr.filter(item => {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}

// Example usage:
// const array = [3, 7, 2, 9, 5, 7, 3, 9];
// console.log("Array with duplicates removed:", removeDuplicates(array));

// 5th way

function removeDuplicates(arr) {
    const seen = {};
    return arr.map(item => {
        return seen.hasOwnProperty(item) ? undefined : (seen[item] = item);
    }).filter(item => item !== undefined);
}

// Example usage:
// const array = [3, 7, 2, 9, 5, 7, 3, 9];
// console.log("Array with duplicates removed:", removeDuplicates(array));


// 7.Write a function to check if an array contains a specific element.

// 1st way

function containsElement(arr, element) {
    return arr.includes(element);
}

// Example usage:
// const array = [3, 7, 2, 9, 5];
// const element = 7;
// console.log("Array contains element", element + ":", containsElement(array, element));

// 2nd way

function containsElement(arr, element) {
    return arr.indexOf(element) !== -1;
}

// Example usage:
// const array = [3, 7, 2, 9, 5];
// const element = 7;
// console.log("Array contains element", element + ":", containsElement(array, element));

// 3rd way

function containsElement(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
    return false;
}

// Example usage:
// const array = [3, 7, 2, 9, 5];
// const element = 7;
// console.log("Array contains element", element + ":", containsElement(array, element));

// 4th way 

function containsElement(arr, element) {
    return arr.filter(item => item === element).length > 0;
}

// Example usage:
// const array = [3, 7, 2, 9, 5];
// const element = 7;
// console.log("Array contains element", element + ":", containsElement(array, element));

// 5th way 

function containsElement(arr, element) {
    return arr.map(item => item === element).reduce((acc, curr) => acc || curr, false);
}

// Example usage:
// const array = [3, 7, 2, 9, 5];
// const element = 7;
// console.log("Array contains element", element + ":", containsElement(array, element));

// 8. Write a function to sort an array in ascending order.

// 1st way

function sortAscending(arr) {
    return arr.slice().sort((a, b) => a - b);
}

// Example usage:
// const array = [3, 7, 2, 9, 5];
// console.log("Sorted array in ascending order:", sortAscending(array));

// 2nd way

function sortAscending(arr) {
    return arr.reduce((acc, val) => {
        if (acc.length === 0) return [val];
        for (let i = 0; i < acc.length; i++) {
            if (val < acc[i]) {
                acc.splice(i, 0, val);
                return acc;
            }
        }
        acc.push(val);
        return acc;
    }, []);
}

// Example usage:
// const array = [3, 7, 2, 9, 5];
// console.log("Sorted array in ascending order:", sortAscending(array));

// 3rd way

function sortAscending(arr) {
    const sortedArray = [];
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        const min = Math.min(...arr);
        sortedArray.push(min);
        arr.splice(arr.indexOf(min), 1);
    }
    return sortedArray;
}

// Example usage:
// const array = [3, 7, 2, 9, 5];
// console.log("Sorted array in ascending order:", sortAscending(array));

// 4th way

function sortAscending(arr) {
    const length = arr.length;
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example usage:
// const array = [3, 7, 2, 9, 5];
// console.log("Sorted array in ascending order:", sortAscending(array));

// 9. Write a function to sort an array in descending order.

// 1st way

function sortDescending(arr) {
    const length = arr.length;
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example usage:
// const array = [3, 7, 2, 9, 5];
// console.log("Sorted array in descending order:", sortDescending(array));

// 2nd way

function sortDescending(arr) {
    return arr.slice().sort((a, b) => a - b).reverse();
}

// Example usage:
// const array = [3, 7, 2, 9, 5];
// console.log("Sorted array in descending order:", sortDescending(array));


// 10. Write a function to merge two sorted arrays into a single sorted array.

// 1st way

function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

// Example usage:
// const array1 = [1, 3, 5, 7];
// const array2 = [2, 4, 6, 8];
// console.log("Merged sorted array:", mergeSortedArrays(array1, array2));

// 2nd way

function mergeSortedArrays(arr1, arr2) {
    return arr1.concat(arr2).sort((a, b) => a - b);
}

// Example usage:
// const array1 = [1, 3, 5, 7];
// const array2 = [2, 4, 6, 8];
// console.log("Merged sorted array:", mergeSortedArrays(array1, array2));

// 3rd way

function mergeSortedArrays(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}

// Example usage:
// const array1 = [1, 3, 5, 7];
// const array2 = [2, 4, 6, 8];
// console.log("Merged sorted array:", mergeSortedArrays(array1, array2));



// 11.Write a function to rotate elements of an array to the left by a given number of positions.

// 1st way

function rotateLeft(arr, positions) {
    const n = arr.length;
    const normalizedPositions = positions % n; // Normalize positions to handle rotations greater than array length
    
    // Slice and concatenate the array to perform rotation
    return arr.slice(normalizedPositions).concat(arr.slice(0, normalizedPositions));
}

// Example usage:
// const array = [1, 2, 3, 4, 5];
// const rotatedArray = rotateLeft(array, 2);
// console.log("Array after rotating left by 2 positions:", rotatedArray);

// 2nd way

function rotateLeft(arr, positions) {
    const n = arr.length;
    const normalizedPositions = positions % n;
    const removed = arr.splice(0, normalizedPositions);
    arr.push(...removed);
    return arr;
}

// Example usage:
// const array = [1, 2, 3, 4, 5];
// const rotatedArray = rotateLeft(array, 2);
// console.log("Array after rotating left by 2 positions:", rotatedArray);

// 3rd way

function rotateLeft(arr, positions) {
    const n = arr.length;
    const normalizedPositions = positions % n;
    for (let i = 0; i < normalizedPositions; i++) {
        const temp = arr.shift();
        arr.push(temp);
    }
    return arr;
}

// Example usage:
// const array = [1, 2, 3, 4, 5];
// const rotatedArray = rotateLeft(array, 2);
// console.log("Array after rotating left by 2 positions:", rotatedArray);


// 12. Write a function to rotate elements of an array to the right by a given number of positions.

// 1st way 

function rotateRight(arr, positions) {
    const n = arr.length;
    const normalizedPositions = positions % n;
    const rotatedArray = [];

    for (let i = 0; i < n; i++) {
        const newIndex = (i + n - normalizedPositions) % n;
        rotatedArray[newIndex] = arr[i];
    }

    return rotatedArray;
}

// Example usage:
// const array = [1, 2, 3, 4, 5];
// const rotatedArray = rotateRight(array, 2);
// console.log("Array after rotating right by 2 positions:", rotatedArray);

// 2nd way

function rotateRight(arr, positions) {
    const n = arr.length;
    const normalizedPositions = positions % n;
    return arr.slice(n - normalizedPositions).concat(arr.slice(0, n - normalizedPositions));
}

// Example usage:
// const array = [1, 2, 3, 4, 5];
// const rotatedArray = rotateRight(array, 2);
// console.log("Array after rotating right by 2 positions:", rotatedArray);

// 3rd way

function rotateRight(arr, positions) {
    const n = arr.length;
    const normalizedPositions = positions % n;
    const removed = arr.splice(n - normalizedPositions, normalizedPositions);
    arr.unshift(...removed);
    return arr;
}

// Example usage:
// const array = [1, 2, 3, 4, 5];
// const rotatedArray = rotateRight(array, 2);
// console.log("Array after rotating right by 2 positions:", rotatedArray);


// 13. Write a function to find the index of a specific element in an array.

// 1st way

function findIndex(arr, element) {
    return arr.indexOf(element);
}

// Example usage:
// const array = [3, 7, 2, 9, 5];
// const element = 7;
// console.log("Index of element", element + ":", findIndex(array, element));

// 2nd way

function findIndex(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1; // Element not found
}

// Example usage:
// const array = [3, 7, 2, 9, 5];
// const element = 7;
// console.log("Index of element", element + ":", findIndex(array, element));

// 3rd way

function findIndex(arr, element) {
    return arr.findIndex(item => item === element);
}

// Example usage:
// const array = [3, 7, 2, 9, 5];
// const element = 7;
// console.log("Index of element", element + ":", findIndex(array, element));

// 14. Write a function to remove an element by index from an array.

// 1st way

function removeElementByIndex(arr, index) {
    if (index >= 0 && index < arr.length) {
        arr.splice(index, 1);
    }
    return arr;
}

// Example usage:
// let array = [3, 7, 2, 9, 5];
// const indexToRemove = 2;
// console.log("Array before removal:", array);
// console.log("Removing element at index", indexToRemove);
// array = removeElementByIndex(array, indexToRemove);
// console.log("Array after removal:", array);

// 2nd way

function removeElementByIndex(arr, index) {
    return arr.filter((_, i) => i !== index);
}

// Example usage:
// let array = [3, 7, 2, 9, 5];
// const indexToRemove = 2;
// console.log("Array before removal:", array);
// console.log("Removing element at index", indexToRemove);
// array = removeElementByIndex(array, indexToRemove);
// console.log("Array after removal:", array);

// 3rd way

function removeElementByIndex(arr, index) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (i !== index) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

// Example usage:
// let array = [3, 7, 2, 9, 5];
// const indexToRemove = 2;
// console.log("Array before removal:", array);
// console.log("Removing element at index", indexToRemove);
// array = removeElementByIndex(array, indexToRemove);
// console.log("Array after removal:", array);

// 15. Write a function to insert an element at a specific index in an array.

// 1st way

function insertElementAtIndex(arr, index, element) {
    if (index >= 0 && index <= arr.length) {
        arr.splice(index, 0, element);
    }
    return arr;
}

// Example usage:
// let array = [3, 7, 9, 5];
// const indexToInsert = 2;
// const elementToInsert = 2;
// console.log("Array before insertion:", array);
// console.log("Inserting element", elementToInsert, "at index", indexToInsert);
// array = insertElementAtIndex(array, indexToInsert, elementToInsert);
// console.log("Array after insertion:", array);


// 2nd way

function insertElementAtIndex(arr, index, element) {
    if (index < 0 || index > arr.length) return arr;

    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === index) {
            newArray.push(element);
        }
        newArray.push(arr[i]);
    }
    if (index === arr.length) {
        newArray.push(element);
    }
    return newArray;
}

// Example usage:
// let array = [3, 7, 9, 5];
// const indexToInsert = 2;
// const elementToInsert = 2;
// console.log("Array before insertion:", array);
// console.log("Inserting element", elementToInsert, "at index", indexToInsert);
// array = insertElementAtIndex(array, indexToInsert, elementToInsert);
// console.log("Array after insertion:", array);


// 3rd way

function insertElementAtIndex(arr, index, element) {
    if (index < 0 || index > arr.length) return arr;

    return [...arr.slice(0, index), element, ...arr.slice(index)];
}

// Example usage:
// let array = [3, 7, 9, 5];
// const indexToInsert = 2;
// const elementToInsert = 2;
// console.log("Array before insertion:", array);
// console.log("Inserting element", elementToInsert, "at index", indexToInsert);
// array = insertElementAtIndex(array, indexToInsert, elementToInsert);
// console.log("Array after insertion:", array);


// 16. Write a function to split an array into chunks of a specified size.

// 1st way

function chunkArray(arr, size) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}

// Example usage:
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log("Array chunks:", chunkArray(array, 3));

// 2nd way

function chunkArray(arr, size) {
    const chunks = [];
    while (arr.length) {
        chunks.push(arr.splice(0, size));
    }
    return chunks;
}

// Example usage:
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log("Array chunks:", chunkArray(array, 3));


// 17. Write a function to flatten a nested array.

// 1st way

function flattenArray(arr) {
    let flattened = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            flattened = flattened.concat(flattenArray(item));
        } else {
            flattened.push(item);
        }
    });
    return flattened;
}

// Example usage:
// const nestedArray = [1, [2, [3, 4]], 5, [6]];
// console.log("Flattened array:", flattenArray(nestedArray));

// 2nd way

function flattenArray(arr) {
    return arr.reduce((acc, item) => {
        return acc.concat(Array.isArray(item) ? flattenArray(item) : item);
    }, []);
}

// Example usage:
// const nestedArray = [1, [2, [3, 4]], 5, [6]];
// console.log("Flattened array:", flattenArray(nestedArray));


// 3rd way

function flattenArray(arr) {
    return arr.flat(Infinity);
}

// Example usage:
// const nestedArray = [1, [2, [3, 4]], 5, [6]];
// console.log("Flattened array:", flattenArray(nestedArray));


// 18. Write a function to check if two arrays are equal.

// 1st way

function arraysAreEqual(arr1, arr2) {
    return arr1.toString() === arr2.toString();
}

// Example usage:
// const array1 = [1, 2, 3];
// const array2 = [1, 2, 3];
// console.log("Are the arrays equal?", arraysAreEqual(array1, array2));


// 2nd way

function arraysAreEqual(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

// Example usage:
// const array1 = [1, 2, 3];
// const array2 = [1, 2, 3];
// console.log("Are the arrays equal?", arraysAreEqual(array1, array2));

// 3rd way 

function arraysAreEqual(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}

// Example usage:
// const array1 = [1, 2, 3];
// const array2 = [1, 2, 3];
// console.log("Are the arrays equal?", arraysAreEqual(array1, array2));


// 19. Write a function to find the union of two arrays.

// 1st way

function arrayUnion(arr1, arr2) {
    const unionSet = new Set([...arr1, ...arr2]);
    return Array.from(unionSet);
}

// Example usage:
// const array1 = [1, 2, 3];
// const array2 = [3, 4, 5];
// console.log("Union of arrays:", arrayUnion(array1, array2));

// 2nd way

function arrayUnion(arr1, arr2) {
    const unionSet = new Set();
    arr1.forEach(element => unionSet.add(element));
    arr2.forEach(element => unionSet.add(element));
    return Array.from(unionSet);
}

// Example usage:
// const array1 = [1, 2, 3];
// const array2 = [3, 4, 5];
// console.log("Union of arrays:", arrayUnion(array1, array2));

// 3rd way

function arrayUnion(arr1, arr2) {
    const unionArray = [...arr1];
    arr2.forEach(element => {
        if (!unionArray.includes(element)) {
            unionArray.push(element);
        }
    });
    return unionArray;
}

// Example usage:
// const array1 = [1, 2, 3];
// const array2 = [3, 4, 5];
// console.log("Union of arrays:", arrayUnion(array1, array2));


// 20. Write a function to find the intersection of two arrays.

// 1st way

function arrayIntersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const intersection = arr2.filter(element => set1.has(element));
    return intersection;
}

// Example usage:
// const array1 = [1, 2, 3, 4];
// const array2 = [3, 4, 5, 6];
// console.log("Intersection of arrays:", arrayIntersection(array1, array2));


// 2nd way

function arrayIntersection(arr1, arr2) {
    const intersection = [];
    for (let element of arr1) {
        if (arr2.includes(element)) {
            intersection.push(element);
        }
    }
    return intersection;
}

// Example usage:
// const array1 = [1, 2, 3, 4];
// const array2 = [3, 4, 5, 6];
// console.log("Intersection of arrays:", arrayIntersection(array1, array2));


// 3rd way

function arrayIntersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const intersection = [];
    arr2.forEach(element => {
        if (set1.has(element)) {
            intersection.push(element);
        }
    });
    return intersection;
}

// Example usage:
// const array1 = [1, 2, 3, 4];
// const array2 = [3, 4, 5, 6];
// console.log("Intersection of arrays:", arrayIntersection(array1, array2));


// 21. Write a function to find the difference between two arrays.

// 1st way

function arrayDifference(arr1, arr2) {
    return arr1.filter(element => !arr2.includes(element));
}

// Example usage:
// const array1 = [1, 2, 3, 4];
// const array2 = [3, 4, 5, 6];
// console.log("Difference between arrays:", arrayDifference(array1, array2));

// 2nd way

function arrayDifference(arr1, arr2) {
    const set2 = new Set(arr2);
    return arr1.filter(element => !set2.has(element));
}

// Example usage:
// const array1 = [1, 2, 3, 4];
// const array2 = [3, 4, 5, 6];
// console.log("Difference between arrays:", arrayDifference(array1, array2));

// 3rd way

function arrayDifference(arr1, arr2) {
    const difference = [];
    for (let element of arr1) {
        if (!arr2.includes(element)) {
            difference.push(element);
        }
    }
    return difference;
}

// Example usage:
// const array1 = [1, 2, 3, 4];
// const array2 = [3, 4, 5, 6];
// console.log("Difference between arrays:", arrayDifference(array1, array2));


// 22. Write a function to find the symmetric difference between two arrays.

// 1st way

function symmetricDifference(arr1, arr2) {
    const diff1 = arr1.filter(element => !arr2.includes(element));
    const diff2 = arr2.filter(element => !arr1.includes(element));
    return diff1.concat(diff2);
}

// Example usage:
// const array1 = [1, 2, 3, 4];
// const array2 = [3, 4, 5, 6];
// console.log("Symmetric difference between arrays:", symmetricDifference(array1, array2));


// 23. Write a function to find the second largest element in an array.

// 1st way

function secondLargest(arr) {
    const sortedArr = arr.sort((a, b) => b - a);
    return sortedArr[1];
}

// Example usage:
// const array = [5, 2, 9, 3, 7];
// console.log("Second largest element:", secondLargest(array));

// 2nd way

function secondLargest(arr) {
    const max = Math.max(...arr);
    const filteredArr = arr.filter(num => num !== max);
    return Math.max(...filteredArr);
}

// Example usage:
// const array = [5, 2, 9, 3, 7];
// console.log("Second largest element:", secondLargest(array));


// 3rd way

function secondLargest(arr) {
    let largest = arr[0];
    let secondLargest = -Infinity;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

// Example usage:
// const array = [5, 2, 9, 3, 7];
// console.log("Second largest element:", secondLargest(array));


// 24. Write a function to find the second smallest element in an array.

// 1st way

function secondSmallest(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    return sortedArr[1];
}

// Example usage:
// const array = [5, 2, 9, 3, 7];
// console.log("Second smallest element:", secondSmallest(array));

// 2nd way

function secondSmallest(arr) {
    const min = Math.min(...arr);
    const filteredArr = arr.filter(num => num !== min);
    return Math.min(...filteredArr);
}

// Example usage:
// const array = [5, 2, 9, 3, 7];
// console.log("Second smallest element:", secondSmallest(array));


// 25. Write a function to find the kth smallest element in an unsorted array.

// 1st way

function kthSmallest(arr, k) {
    const sortedArr = arr.sort((a, b) => a - b);
    return sortedArr[k - 1];
}

// Example usage:
// const array = [5, 2, 9, 3, 7];
// const k = 3;
// console.log(`The ${k}th smallest element is:`, kthSmallest(array, k));


// 2nd way 

class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1;
        let parentIndex;
        while (currentIndex > 0) {
            parentIndex = Math.floor((currentIndex - 1) / 2);
            if (this.heap[currentIndex] < this.heap[parentIndex]) {
                [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
                currentIndex = parentIndex;
            } else {
                break;
            }
        }
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        const minValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return minValue;
    }

    heapifyDown() {
        let currentIndex = 0;
        let leftChildIndex, rightChildIndex, minIndex;
        while (true) {
            leftChildIndex = 2 * currentIndex + 1;
            rightChildIndex = 2 * currentIndex + 2;
            minIndex = currentIndex;
            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[minIndex]) {
                minIndex = leftChildIndex;
            }
            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[minIndex]) {
                minIndex = rightChildIndex;
            }
            if (minIndex !== currentIndex) {
                [this.heap[currentIndex], this.heap[minIndex]] = [this.heap[minIndex], this.heap[currentIndex]];
                currentIndex = minIndex;
            } else {
                break;
            }
        }
    }
}

function kthSmallest(arr, k) {
    const minHeap = new MinHeap();
    arr.forEach(num => minHeap.insert(num));
    let result;
    for (let i = 0; i < k; i++) {
        result = minHeap.extractMin();
    }
    return result;
}

// Example usage:
// const array = [5, 2, 9, 3, 7];
// const k = 3;
// console.log(`The ${k}th smallest element is:`, kthSmallest(array, k));


// 3rd way 

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function partition(arr, left, right) {
    const pivot = arr[Math.floor((left + right) / 2)];
    let i = left;
    let j = right;
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSelect(arr, left, right, k) {
    if (left === right) {
        return arr[left];
    }
    const pivotIndex = partition(arr, left, right);
    if (k === pivotIndex) {
        return arr[k];
    } else if (k < pivotIndex) {
        return quickSelect(arr, left, pivotIndex - 1, k);
    } else {
        return quickSelect(arr, pivotIndex, right, k);
    }
}

function kthSmallest(arr, k) {
    if (k < 1 || k > arr.length) {
        return null;
    }
    return quickSelect(arr, 0, arr.length - 1, k - 1);
}

// Example usage:
// const array = [5, 2, 9, 3, 7];
// const k = 3;
// console.log(`The ${k}th smallest element is:`, kthSmallest(array, k));



// 26. Write a function to find the kth largest element in an unsorted array.

// 1st way 

function kthLargest(arr, k) {
    const sortedArr = arr.sort((a, b) => b - a);
    return sortedArr[k - 1];
}

// Example usage:
// const array = [5, 2, 9, 3, 7];
// const k = 3;
// console.log(`The ${k}th largest element is:`, kthLargest(array, k));



// 27. Write a function to remove falsy values from an array (e.g., false, null, 0, "", undefined, and NaN).

// 1st way 

function removeFalsy(arr) {
    return arr.filter(Boolean);
}

// Example usage:
// const array = [false, 0, "", null, undefined, NaN, 42, "hello"];
// console.log("Array with falsy values removed:", removeFalsy(array));

// 2nd way

function removeFalsy(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            result.push(arr[i]);
        }
    }
    return result;
}

// Example usage:
// const array = [false, 0, "", null, undefined, NaN, 42, "hello"];
// console.log("Array with falsy values removed:", removeFalsy(array));

// 3rd way

function removeFalsy(arr) {
    return arr.reduce((acc, val) => {
        if (val) {
            acc.push(val);
        }
        return acc;
    }, []);
}

// Example usage:
// const array = [false, 0, "", null, undefined, NaN, 42, "hello"];
// console.log("Array with falsy values removed:", removeFalsy(array));



// 28. Write a function to remove empty strings from an array.

// 1st way

function removeEmptyStrings(arr) {
    return arr.filter(str => str !== "");
}

// Example usage:
// const array = ["hello", "", "world", "", "openai", ""];
// console.log("Array with empty strings removed:", removeEmptyStrings(array));

// 2nd way 

function removeEmptyStrings(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "") {
            result.push(arr[i]);
        }
    }
    return result;
}

// Example usage:
// const array = ["hello", "", "world", "", "openai", ""];
// console.log("Array with empty strings removed:", removeEmptyStrings(array));

// 3rd way 

function removeEmptyStrings(arr) {
    return arr.reduce((acc, str) => {
        if (str !== "") {
            acc.push(str);
        }
        return acc;
    }, []);
}

// Example usage:
// const array = ["hello", "", "world", "", "openai", ""];
// console.log("Array with empty strings removed:", removeEmptyStrings(array));



// 29. Write a function to find the frequency of each element in an array.

// 1st way

function frequencyOfElements(arr) {
    const frequency = {};
    arr.forEach(element => {
        frequency[element] = (frequency[element] || 0) + 1;
    });
    return frequency;
}

// Example usage:
// const array = [1, 2, 3, 1, 2, 1, 3, 4, 5];
// console.log("Frequency of each element:", frequencyOfElements(array));

// 2nd way 

function frequencyOfElements(arr) {
    return arr.reduce((frequency, element) => {
        frequency[element] = (frequency[element] || 0) + 1;
        return frequency;
    }, {});
}

// Example usage:
// const array = [1, 2, 3, 1, 2, 1, 3, 4, 5];
// console.log("Frequency of each element:", frequencyOfElements(array));


// 3rd way 

function frequencyOfElements(arr) {
    const frequency = new Map();
    arr.forEach(element => {
        frequency.set(element, (frequency.get(element) || 0) + 1);
    });
    return Object.fromEntries(frequency);
}

// Example usage:
// const array = [1, 2, 3, 1, 2, 1, 3, 4, 5];
// console.log("Frequency of each element:", frequencyOfElements(array));



// 30. Write a function to find the mode of an array.

// 1st way 

function mode(arr) {
    const frequency = {};
    arr.forEach(element => {
        frequency[element] = (frequency[element] || 0) + 1;
    });
    let maxFrequency = 0;
    let modes = [];
    for (let key in frequency) {
        if (frequency[key] > maxFrequency) {
            modes = [key];
            maxFrequency = frequency[key];
        } else if (frequency[key] === maxFrequency) {
            modes.push(key);
        }
    }
    return modes;
}

// Example usage:
// const array = [1, 2, 3, 1, 2, 1, 3, 4, 5, 5, 5];
// console.log("Mode(s) of the array:", mode(array));


// 2nd way 

function mode(arr) {
    const frequency = arr.reduce((acc, element) => {
        acc[element] = (acc[element] || 0) + 1;
        return acc;
    }, {});
    let maxFrequency = 0;
    let modes = [];
    for (let key in frequency) {
        if (frequency[key] > maxFrequency) {
            modes = [key];
            maxFrequency = frequency[key];
        } else if (frequency[key] === maxFrequency) {
            modes.push(key);
        }
    }
    return modes;
}

// Example usage:
// const array = [1, 2, 3, 1, 2, 1, 3, 4, 5, 5, 5];
// console.log("Mode(s) of the array:", mode(array));


// 3rd way 

function mode(arr) {
    const frequency = new Map();
    arr.forEach(element => {
        frequency.set(element, (frequency.get(element) || 0) + 1);
    });
    let maxFrequency = 0;
    let modes = [];
    frequency.forEach((value, key) => {
        if (value > maxFrequency) {
            modes = [key];
            maxFrequency = value;
        } else if (value === maxFrequency) {
            modes.push(key);
        }
    });
    return modes;
}

// Example usage:
// const array = [1, 2, 3, 1, 2, 1, 3, 4, 5, 5, 5];
// console.log("Mode(s) of the array:", mode(array));

































