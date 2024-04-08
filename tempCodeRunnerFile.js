function longestConsecutiveSequence(arr) {
    arr.sort((a, b) => a - b);
    let longestSequence = 0;
    let currentSequence = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1] + 1) {
            currentSequence++;
        } else if (arr[i] !== arr[i - 1]) {
            longestSequence = Math.max(longestSequence, currentSequence);
            currentSequence = 1;
        }
    }

    return Math.max(longestSequence, currentSequence);
}

const arr = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutiveSequence(arr));