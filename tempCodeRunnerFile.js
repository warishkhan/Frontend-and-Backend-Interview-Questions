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
const array = [1, 2, 3, 1, 2, 1, 3, 4, 5, 5, 5];
console.log("Mode(s) of the array:", mode(array));