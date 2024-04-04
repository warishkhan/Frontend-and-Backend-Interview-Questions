// 1. Write a function to reverse a string.

// 1st way

function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage:
// const string = "hello";
// console.log("Reversed string:", reverseString(string));

// 2nd way

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Example usage:
// const string = "hello";
// console.log("Reversed string:", reverseString(string));

// 3rd way

function reverseString(str) {
    return str.split('').reduce((reversed, char) => char + reversed, '');
}

// Example usage:
// const string = "hello";
// console.log("Reversed string:", reverseString(string));


// 2. Write a function to check if a string is a palindrome.

// 1st way

function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    
    // Compare the cleaned string with its reverse
    return cleanStr === cleanStr.split('').reverse().join('');
}

// Example usage:
// const string1 = "A man, a plan, a canal, Panama";
// console.log(`"${string1}" is a palindrome:`, isPalindrome(string1));

// const string2 = "racecar";
// console.log(`"${string2}" is a palindrome:`, isPalindrome(string2));

// const string3 = "hello";
// console.log(`"${string3}" is a palindrome:`, isPalindrome(string3));

// 2nd way

function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const len = cleanStr.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
        if (cleanStr[i] !== cleanStr[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

// Example usage:
// const string1 = "A man, a plan, a canal, Panama";
// console.log(`"${string1}" is a palindrome:`, isPalindrome(string1));

// const string2 = "racecar";
// console.log(`"${string2}" is a palindrome:`, isPalindrome(string2));

// const string3 = "hello";
// console.log(`"${string3}" is a palindrome:`, isPalindrome(string3));



// 3. Write a function to check if a string contains only digits.

// 1st way

function containsOnlyDigits(str) {
    return /^\d+$/.test(str);
}

// Example usage:
// console.log(containsOnlyDigits("12345")); // true
// console.log(containsOnlyDigits("123abc")); // false

// 2nd way

function containsOnlyDigits(str) {
    for (let char of str) {
        if (char < '0' || char > '9') {
            return false;
        }
    }
    return true;
}

// Example usage:
// console.log(containsOnlyDigits("12345")); // true
// console.log(containsOnlyDigits("123abc")); // false


// 4. Write a function to check if a string contains only letters.

// 1st way

function containsOnlyLetters(str) {
    return /^[a-zA-Z]+$/.test(str);
}

// Example usage:
// console.log(containsOnlyLetters("abcdef")); // true
// console.log(containsOnlyLetters("abc123")); // false


// 2nd way

function containsOnlyLetters(str) {
    for (let char of str) {
        if (!(char >= 'a' && char <= 'z') && !(char >= 'A' && char <= 'Z')) {
            return false;
        }
    }
    return true;
}

// Example usage:
// console.log(containsOnlyLetters("abcdef")); // true
// console.log(containsOnlyLetters("abc123")); // false


// 5. Write a function to count the number of vowels in a string.

// 1st way

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Example usage:
// const string = "Hello World";
// console.log("Number of vowels in the string:", countVowels(string));

// 2nd way

function countVowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

// Example usage:
// const string = "Hello World";
// console.log("Number of vowels in the string:", countVowels(string));


// 6. Write a function to count the number of consonants in a string.

// 1st way

function countConsonants(str) {
    const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
    let count = 0;
    for (let char of str) {
        if (consonants.includes(char)) {
            count++;
        }
    }
    return count;
}

// Example usage:
// const string = "Hello World";
// console.log("Number of consonants in the string:", countConsonants(string));

// 2nd way

function countConsonants(str) {
    const matches = str.match(/[bcdfghjklmnpqrstvwxyz]/gi);
    return matches ? matches.length : 0;
}

// Example usage:
// const string = "Hello World";
// console.log("Number of consonants in the string:", countConsonants(string));

// 7. Write a function to find the longest word in a string.

// 1st way

function longestWord(str) {
    // Remove punctuation marks and split the string into an array of words
    const words = str.replace(/[^\w\s]/g, '').split(' ');

    // Initialize variables to store the longest word and its length
    let longest = '';
    let maxLength = 0;

    // Iterate through each word in the array
    for (let word of words) {
        // If the current word is longer than the longest word found so far
        if (word.length > maxLength) {
            // Update the longest word and its length
            longest = word;
            maxLength = word.length;
        }
    }

    return longest;
}

// Example usage:
// const string = "The quick brown fox jumps over the lazy dog";
// console.log("Longest word in the string:", longestWord(string));

// 2nd way

function longestWord(str) {
    const words = str.replace(/[^\w\s]/g, '').split(' ');
    
    // Using reduce to find the longest word
    return words.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, '');
}

// Example usage:
// const string = "The quick brown fox jumps over the lazy dog";
// console.log("Longest word in the string:", longestWord(string));


// 8. Write a function to capitalize the first letter of each word in a string.

// 1st way

function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Example usage:
// const string = "the quick brown fox";
// console.log("Capitalized string:", capitalizeWords(string));

// 2nd way

function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Example usage:
// const string = "the quick brown fox";
// console.log("Capitalized string:", capitalizeWords(string));

// 3rd way

function capitalizeWords(str) {
    let capitalizedStr = '';
    let capitalizeNext = true;

    for (let char of str) {
        if (char === ' ') {
            capitalizeNext = true;
            capitalizedStr += char;
        } else {
            if (capitalizeNext) {
                capitalizedStr += char.toUpperCase();
                capitalizeNext = false;
            } else {
                capitalizedStr += char;
            }
        }
    }

    return capitalizedStr;
}

// Example usage:
// const string = "the quick brown fox";
// console.log("Capitalized string:", capitalizeWords(string));


// 9. Write a function to convert a string to title case.

// 1st way

function toTitleCase(str) {
    return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
}

// Example usage:
// const string = "the quick brown fox";
// console.log("Title cased string:", toTitleCase(string));


// 10. Write a function to remove all whitespace from a string.

// 1st way

function removeWhitespace(str) {
    return str.replace(/\s/g, '');
}

// Example usage:
// const string = "The quick brown fox";
// console.log("String without whitespace:", removeWhitespace(string));

// 2nd way

function removeWhitespace(str) {
    return str.split(' ').join('');
}

// Example usage:
// const string = "The quick brown fox";
// console.log("String without whitespace:", removeWhitespace(string));

// 3rd way

function removeWhitespace(str) {
    let result = '';
    for (let char of str) {
        if (char !== ' ') {
            result += char;
        }
    }
    return result;
}

// Example usage:
// const string = "The quick brown fox";
// console.log("String without whitespace:", removeWhitespace(string));


// 11. Write a function to find the first non-repeated character in a string.

// 1st way

function firstNonRepeatedChar(str) {
    const charCount = {};
    
    // Count the frequency of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Find the first non-repeated character
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (charCount[char] === 1) {
            return char;
        }
    }
    
    // If all characters are repeated
    return null;
}

// Example usage:
// const string = "abacabad";
// console.log("First non-repeated character:", firstNonRepeatedChar(string));

// 2nd way

function firstNonRepeatedChar(str) {
    const charCount = new Map();
    
    // Count the frequency of each character
    for (let char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    // Find the first non-repeated character
    for (let char of str) {
        if (charCount.get(char) === 1) {
            return char;
        }
    }
    
    // If all characters are repeated
    return null;
}

// Example usage:
// const string = "abacabad";
// console.log("First non-repeated character:", firstNonRepeatedChar(string));


// 12. Write a function to check if two strings are anagrams of each other.

// 1st way

function areAnagrams(str1, str2) {
    // If the lengths of the strings are different, they cannot be anagrams
    if (str1.length !== str2.length) {
        return false;
    }
    
    // Sort both strings and compare them
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    
    return sortedStr1 === sortedStr2;
}

// Example usage:
// const string1 = "listen";
// const string2 = "silent";
// console.log("Are they anagrams?", areAnagrams(string1, string2));

// 2nd way

function areAnagrams(str1, str2) {
    // If the lengths of the strings are different, they cannot be anagrams
    if (str1.length !== str2.length) {
        return false;
    }
    
    // Count the frequency of characters in both strings
    const charCount1 = {};
    const charCount2 = {};
    
    for (let char of str1) {
        charCount1[char] = (charCount1[char] || 0) + 1;
    }
    
    for (let char of str2) {
        charCount2[char] = (charCount2[char] || 0) + 1;
    }
    
    // Compare the frequency of characters in both strings
    for (let char in charCount1) {
        if (charCount1[char] !== charCount2[char]) {
            return false;
        }
    }
    
    // If all characters have the same frequency, the strings are anagrams
    return true;
}

// Example usage:
// const string1 = "listen";
// const string2 = "silent";
// console.log("Are they anagrams?", areAnagrams(string1, string2));


// 13. Write a function to remove duplicate characters from a string.

// 1st way

function removeDuplicates(str) {
    // Convert the string to an array to utilize Set
    const charArray = str.split('');
    
    // Create a Set from the array to remove duplicates
    const uniqueChars = new Set(charArray);
    
    // Convert the Set back to a string
    return [...uniqueChars].join('');
}

// Example usage:
// const string = "hello";
// console.log("String without duplicates:", removeDuplicates(string));

// 2nd way

function removeDuplicates(str) {
    const charCount = {};
    let result = '';
    
    for (let char of str) {
        // If the character hasn't been encountered yet, add it to the result
        if (!charCount[char]) {
            result += char;
            charCount[char] = true;
        }
    }
    
    return result;
}

// Example usage:
// const string = "hello";
// console.log("String without duplicates:", removeDuplicates(string));

// 3rd way

function removeDuplicates(str) {
    let result = '';
    
    for (let i = 0; i < str.length; i++) {
        // If the current character is not already in the result, add it
        if (result.indexOf(str[i]) === -1) {
            result += str[i];
        }
    }
    
    return result;
}

// Example usage:
// const string = "hello";
// console.log("String without duplicates:", removeDuplicates(string));


// 14. Write a function to check if a string contains a specific substring.

// 1st way

function containsSubstring(str, substr) {
    return str.includes(substr);
}

// Example usage:
// const string = "hello world";
// const substring = "world";
// console.log("Does the string contain the substring?", containsSubstring(string, substring));

// 2nd way

function containsSubstring(str, substr) {
    return str.indexOf(substr) !== -1;
}

// Example usage:
// const string = "hello world";
// const substring = "world";
// console.log("Does the string contain the substring?", containsSubstring(string, substring));

// 3rd way

function containsSubstring(str, substr) {
    for (let i = 0; i <= str.length - substr.length; i++) {
        if (str.substring(i, i + substr.length) === substr) {
            return true;
        }
    }
    return false;
}

// Example usage:
// const string = "hello world";
// const substring = "world";
// console.log("Does the string contain the substring?", containsSubstring(string, substring));


// 15. Write a function to find the index of the first occurrence of a substring in a string.

// 1st way

function findSubstringIndex(str, substr) {
    return str.indexOf(substr);
}

// Example usage:
// const string = "hello world";
// const substring = "world";
// console.log("Index of the first occurrence:", findSubstringIndex(string, substring));

// 2nd way

function findSubstringIndex(str, substr) {
    for (let i = 0; i <= str.length - substr.length; i++) {
        if (str.substring(i, i + substr.length) === substr) {
            return i;
        }
    }
    return -1;
}

// Example usage:
// const string = "hello world";
// const substring = "world";
// console.log("Index of the first occurrence:", findSubstringIndex(string, substring));


// 16. Write a function to replace all occurrences of a substring in a string with another substring.

// 1st way

function replaceAllOccurrences(str, substr, newSubstr) {
    return str.replace(new RegExp(substr, 'g'), newSubstr);
}

// Example usage:
// const string = "hello hello world";
// const substring = "hello";
// const newSubstring = "hi";
// console.log("String after replacement:", replaceAllOccurrences(string, substring, newSubstring));

// 2nd way

function replaceAllOccurrences(str, substr, newSubstr) {
    return str.split(substr).join(newSubstr);
}

// Example usage:
// const string = "hello hello world";
// const substring = "hello";
// const newSubstring = "hi";
// console.log("String after replacement:", replaceAllOccurrences(string, substring, newSubstring));

// 3rd way

function replaceAllOccurrences(str, substr, newSubstr) {
    let result = '';
    let lastIndex = 0;
    let index = str.indexOf(substr);
    
    while (index !== -1) {
        result += str.substring(lastIndex, index) + newSubstr;
        lastIndex = index + substr.length;
        index = str.indexOf(substr, lastIndex);
    }
    
    result += str.substring(lastIndex);
    return result;
}

// Example usage:
// const string = "hello hello world";
// const substring = "hello";
// const newSubstring = "hi";
// console.log("String after replacement:", replaceAllOccurrences(string, substring, newSubstring));


// 17. Write a function to reverse words in a sentence.

// 1st way

function reverseWords(sentence) {
    return sentence.split(' ').reverse().join(' ');
}

// Example usage:
// const sentence = "hello world";
// console.log("Reversed words in the sentence:", reverseWords(sentence));


// 2nd way

function reverseWords(sentence) {
    const words = sentence.split(' ');
    let reversedSentence = '';
    for (let i = words.length - 1; i >= 0; i--) {
        reversedSentence += words[i] + ' ';
    }
    return reversedSentence.trim();
}

// Example usage:
// const sentence = "hello world";
// console.log("Reversed words in the sentence:", reverseWords(sentence));


// 3rd way

function reverseWords(sentence) {
    let reversedSentence = '';
    let word = '';
    for (let char of sentence) {
        if (char === ' ') {
            reversedSentence = word + ' ' + reversedSentence;
            word = '';
        } else {
            word += char;
        }
    }
    reversedSentence = word + ' ' + reversedSentence;
    return reversedSentence.trim();
}

// Example usage:
// const sentence = "hello world";
// console.log("Reversed words in the sentence:", reverseWords(sentence));

// 18. Write a function to remove all punctuation from a string.

// 1st way

function removePunctuation(str) {
    return str.replace(/[^\w\s]/g, '');
}

// Example usage:
// const string = "Hello, World!";
// console.log("String without punctuation:", removePunctuation(string));

// 2nd way

function removePunctuation(str) {
    return str.split('').filter(char => /[^\w\s]/.test(char) === false).join('');
}

// Example usage:
// const string = "Hello, World!";
// console.log("String without punctuation:", removePunctuation(string));


// 3rd way

function removePunctuation(str) {
    let result = '';
    for (let char of str) {
        if (char.match(/[a-z0-9\s]/i)) {
            result += char;
        }
    }
    return result;
}

// Example usage:
// const string = "Hello, World!";
// console.log("String without punctuation:", removePunctuation(string));



// 19. Write a function to check if a string is a valid email address.

// 1st way

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Example usage:
// const email = "example@example.com";
// console.log("Is the email valid?", isValidEmail(email));

// 2nd way

function isValidEmail(email) {
    return email.indexOf('@') !== -1 && email.indexOf('.') !== -1;
}

// Example usage:
// const email = "example@example.com";
// console.log("Is the email valid?", isValidEmail(email));


// 3rd way

function isValidEmail(email) {
    let atFound = false;
    let dotFound = false;
    for (let char of email) {
        if (char === '@') {
            atFound = true;
        }
        if (char === '.' && atFound) {
            dotFound = true;
        }
    }
    return atFound && dotFound;
}

// Example usage:
// const email = "example@example.com";
// console.log("Is the email valid?", isValidEmail(email));


// 20. Write a function to mask sensitive information in a string (e.g., credit card numbers, social security numbers).

// 1st way

function maskSensitiveInfo(str) {
    const sensitiveInfoLength = str.length - 4;
    const maskedPart = '*'.repeat(sensitiveInfoLength);
    return maskedPart + str.slice(-4);
}

// Example usage:
// const sensitiveInfo = "1234567890";
// console.log("Masked info:", maskSensitiveInfo(sensitiveInfo));

// 2nd way

function maskSensitiveInfo(str, mask = '*') {
    const sensitiveInfoLength = str.length - 4;
    const maskedPart = mask.repeat(sensitiveInfoLength);
    return maskedPart + str.slice(-4);
}

// Example usage:
// const sensitiveInfo = "1234567890";
// console.log("Masked info:", maskSensitiveInfo(sensitiveInfo, '#'));


// 3rd way

function maskSensitiveInfo(str) {
    let maskedInfo = '';
    for (let i = 0; i < str.length; i++) {
        if (i < str.length - 4) {
            maskedInfo += '*';
        } else {
            maskedInfo += str[i];
        }
    }
    return maskedInfo;
}

// Example usage:
// const sensitiveInfo = "1234567890";
// console.log("Masked info:", maskSensitiveInfo(sensitiveInfo));



// 21. Write a function to convert a string to camel case.

// 1st way

function toCamelCase(str) {
    return str.split(/[_-]/).map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

// Example usage:
// console.log(toCamelCase("hello_world")); // Output: helloWorld

// 2nd way

function toCamelCase(str) {
    return str.replace(/[_-](.)/g, (_, char) => char.toUpperCase());
}

// Example usage:
// console.log(toCamelCase("hello_world")); // Output: helloWorld

// 3rd way

function toCamelCase(str) {
    let camelCase = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '_' || str[i] === '-') {
            camelCase += str[i + 1].toUpperCase();
            i++;
        } else {
            camelCase += str[i];
        }
    }
    return camelCase;
}

// Example usage:
// console.log(toCamelCase("hello_world")); // Output: helloWorld


// 22. Write a function to convert a string to snake case.

// 1st way

function toSnakeCase(str) {
    return str.toLowerCase().replace(/\s+/g, '_');
}

// Example usage:
// console.log(toSnakeCase("Hello World")); // Output: hello_world

// 2nd way

function toSnakeCase(str) {
    return str.split(' ').join('_').toLowerCase();
}

// Example usage:
// console.log(toSnakeCase("Hello World")); // Output: hello_world

// 3rd way

function toSnakeCase(str) {
    let snakeCase = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            snakeCase += '_';
        } else {
            snakeCase += str[i].toLowerCase();
        }
    }
    return snakeCase;
}

// Example usage:
// console.log(toSnakeCase("Hello World")); // Output: hello_world


// 23. Write a function to convert a string to kebab case.

// 1st way

function toKebabCase(str) {
    return str.toLowerCase().replace(/\s+/g, '-');
}

// Example usage:
// console.log(toKebabCase("Hello World")); // Output: hello-world

// 2nd way

function toKebabCase(str) {
    return str.split(' ').join('-').toLowerCase();
}

// Example usage:
// console.log(toKebabCase("Hello World")); // Output: hello-world


// 3rd way

function toKebabCase(str) {
    let kebabCase = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            kebabCase += '-';
        } else {
            kebabCase += str[i].toLowerCase();
        }
    }
    return kebabCase;
}

// Example usage:
// console.log(toKebabCase("Hello World")); // Output: hello-world


// 24. Write a function to truncate a string to a specified length and append ellipsis ("...") if necessary.

// 1st way

function truncateString(str, maxLength) {
    if (str.length <= maxLength) {
        return str;
    } else {
        return str.substring(0, maxLength) + '...';
    }
}

// Example usage:
// console.log(truncateString("Lorem ipsum dolor sit amet", 10)); // Output: Lorem ipsu...

// 2nd way

function truncateString(str, maxLength) {
    if (str.length <= maxLength) {
        return str;
    } else {
        return str.slice(0, maxLength) + '...';
    }
}

// Example usage:
// console.log(truncateString("Lorem ipsum dolor sit amet", 10)); // Output: Lorem ipsu...


// 3rd way

function truncateString(str, maxLength) {
    return (str.length <= maxLength) ? str : str.substring(0, maxLength) + '...';
}

// Example usage:
// console.log(truncateString("Lorem ipsum dolor sit amet", 10)); // Output: Lorem ipsu...


// 4th way

function truncateStringManually(str, maxLength) {
    // Check if the length of the string is greater than the specified maximum length
    if (str.length > maxLength) {
        // Extract the portion of the string up to the maximum length
        var truncatedString = str.substring(0, maxLength);
        // Append ellipsis
        truncatedString += '...';
        // Return the truncated string with ellipsis
        return truncatedString;
    } else {
        // If the length is not greater, return the original string
        return str;
    }
}

// Example usage:
// console.log(truncateStringManually("Lorem ipsum dolor sit amet", 10)); // Output: Lorem ipsu...



// 25. Write a function to find the longest common prefix among an array of strings.

// 1st way

function longestCommonPrefix(strs) {
    if (strs.length === 0) return '';

    // Assume the first string as the initial prefix
    let prefix = strs[0];

    // Iterate through each string in the array
    for (let i = 1; i < strs.length; i++) {
        // Iterate through each character of the current string and compare with the prefix
        while (strs[i].indexOf(prefix) !== 0) {
            // If the prefix doesn't match the beginning of the current string, remove one character from the end of the prefix
            prefix = prefix.substring(0, prefix.length - 1);
            // If the prefix becomes empty, return an empty string
            if (prefix.length === 0) return '';
        }
    }

    // Return the longest common prefix
    return prefix;
}

// Example usage:
// console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"


// 2nd way

function longestCommonPrefixVertical(strs) {
    if (strs.length === 0) return '';

    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (i === strs[j].length || strs[j][i] !== char) {
                return strs[0].substring(0, i);
            }
        }
    }
    return strs[0];
}



// 3rd way

function longestCommonPrefixDivideConquer(strs) {
    if (strs.length === 0) return '';
    return divideAndConquer(strs, 0, strs.length - 1);
}

function divideAndConquer(strs, left, right) {
    if (left === right) {
        return strs[left];
    } else {
        const mid = Math.floor((left + right) / 2);
        const leftPrefix = divideAndConquer(strs, left, mid);
        const rightPrefix = divideAndConquer(strs, mid + 1, right);
        return commonPrefix(leftPrefix, rightPrefix);
    }
}

function commonPrefix(left, right) {
    const minLen = Math.min(left.length, right.length);
    for (let i = 0; i < minLen; i++) {
        if (left.charAt(i) !== right.charAt(i)) {
            return left.substring(0, i);
        }
    }
    return left.substring(0, minLen);
}



// 26. Write a function to find the longest common suffix among an array of strings.

// 1st way

function longestCommonSuffix(strs) {
    if (strs.length === 0) return '';

    let suffix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].slice(-suffix.length) !== suffix) {
            suffix = suffix.substring(1);
            if (suffix.length === 0) return '';
        }
    }
    return suffix;
}

// Example usage:
// console.log(longestCommonSuffix(["deforestation", "citation", "conviction"])); // Output: "tion"

// 2nd way

function longestCommonSuffixEndsWith(strs) {
    if (strs.length === 0) return '';

    let suffix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (!strs[i].endsWith(suffix)) {
            suffix = suffix.slice(0, -1);
            if (suffix.length === 0) return '';
        }
    }
    return suffix;
}



// 27. Write a function to count the occurrences of each character in a string and return the result as an object.

// 1st way

function countCharacters(str) {
    const counts = {};
    for (let char of str) {
        counts[char] = (counts[char] || 0) + 1;
    }
    return counts;
}

// console.log(countCharacters("hello"));

// 2nd way

function countCharactersMap(str) {
    const counts = new Map();
    for (let char of str) {
        counts.set(char, (counts.get(char) || 0) + 1);
    }
    return Object.fromEntries(counts);
}


// 3rd way

function countCharactersReduce(str) {
    return [...str].reduce((counts, char) => {
        counts[char] = (counts[char] || 0) + 1;
        return counts;
    }, {});
}



// 28. Write a function to check if a string is a valid URL.

// 1st way

function isValidURL(str) {
    const pattern = /^(ftp|http|https):\/\/[^ "]+$/;
    return pattern.test(str);
}

// console.log(isValidURL("https://www.example.com"));

// 2nd way

function isValidURL(str) {
    try {
        new URL(str);
        return true;
    } catch (error) {
        return false;
    }
}


// 3rd way

function isValidURL(str) {
    const pattern = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!pattern.test(str)) return false;
    const url = new URL(str);
    return url.protocol === "http:" || url.protocol === "https:" || url.protocol === "ftp:";
}


// 29. Write a function to extract all URLs from a string.

// 1st way

function extractURLsRegex(str) {
    const pattern = /(https?:\/\/[^\s]+)/g;
    const result = str.match(pattern) || [];
    return result;
}

// console.log(extractURLsRegex("Here are some URLs: https://www.example.com and http://example.org"));;

// 2nd way

function extractURLsURLObject(str) {
    const words = str.split(/\s+/);
    return words.filter(word => {
        try {
            new URL(word);
            return true;
        } catch (error) {
            return false;
        }
    });
}


// 3rd way

function extractURLsCombination(str) {
    const pattern = /(?:https?|ftp):\/\/[^\s]+/g;
    return str.match(pattern) || [];
}


// 30. Write a function to find the second most frequent character in a string.

// 1st way

function secondMostFrequentCharacter(str) {
    
    const charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    const sortedChars = Object.keys(charCount).sort((a, b) => charCount[b] - charCount[a]);
    
    let secondMostFreqChar;
    for (let i = 1; i < sortedChars.length; i++) {
        if (charCount[sortedChars[i]] !== charCount[sortedChars[0]]) {
            secondMostFreqChar = sortedChars[i];
            break;
        }
    }
    return secondMostFreqChar;
}

// console.log(secondMostFrequentCharacter("Second most frequent character:"));

// 2nd way

function secondMostFrequentCharacterMap(str) {
    console.log("Input string:", str);

    const charCount = new Map();
    for (let char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    const sortedChars = Array.from(charCount.keys()).sort((a, b) => charCount.get(b) - charCount.get(a));
    
    let secondMostFreqChar;
    for (let i = 1; i < sortedChars.length; i++) {
        if (charCount.get(sortedChars[i]) !== charCount.get(sortedChars[0])) {
            secondMostFreqChar = sortedChars[i];
            break;
        }
    }

    console.log("Second most frequent character:", secondMostFreqChar);
    return secondMostFreqChar;
}


// 31. Write a function to find the number of words in a string.

// 1st way

function countWordsSplit(str) {
    console.log("Input string:", str);
    const words = str.split(/\s+/).filter(word => word !== '');
    console.log("Number of words:", words.length);
    return words.length;
}

// Sample string
// const sampleString = "The quick brown fox jumps over the lazy dog.";
// countWordsSplit(sampleString);

// 2nd way

function countWordsRegex(str) {
    console.log("Input string:", str);
    const words = str.match(/\b\w+\b/g) || [];
    console.log("Number of words:", words.length);
    return words.length;
}


// 3rd way

function countWordsManual(str) {
    console.log("Input string:", str);
    let count = 0;
    let inWord = false;
    for (let char of str) {
        if (/\w/.test(char)) {
            if (!inWord) {
                inWord = true;
                count++;
            }
        } else {
            inWord = false;
        }
    }
    console.log("Number of words:", count);
    return count;
}


// 32. Write a function to reverse the order of words in a string.

// 1st way

function reverseWordsSplit(str) {
    const reversedWords = str.split(/\s+/).reverse().join(' ');
    return reversedWords;
}

// console.log(reverseWordsSplit("The quick brown fox"));

// 2nd way

function reverseWordsRegex(str) {
    const reversedWords = str.match(/\b\w+\b/g).reverse().join(' ');
    return reversedWords;
}

// console.log(reverseWordsRegex("The quick brown fox"));

// 3rd way

function reverseWordsManual(str) {
    console.log("Input string:", str);
    const words = str.split(/\s+/);
    const reversedWords = [];
    for (let i = words.length - 1; i >= 0; i--) {
        reversedWords.push(words[i]);
    }
    const reversedString = reversedWords.join(' ');
    console.log("Reversed string:", reversedString);
    return reversedString;
}

// reverseWordsManual("The quick brown fox");


// 33. Write a function to remove HTML tags from a string.

// 1st way 

function removeHTMLTagsRegex(str) {
    console.log("Input string:", str);
    const withoutTags = str.replace(/<[^>]*>/g, '');
    console.log("String without HTML tags:", withoutTags);
    return withoutTags;
}

// removeHTMLTagsRegex("<p>Hello <strong>world</strong></p>");

// 2nd way

function removeHTMLTagsDOMParser(str) {
    console.log("Input string:", str);
    const parser = new DOMParser();
    const doc = parser.parseFromString(str, 'text/html');
    const withoutTags = doc.body.textContent || "";
    console.log("String without HTML tags:", withoutTags);
    return withoutTags;
}

// removeHTMLTagsDOMParser("<p>Hello <strong>world</strong></p>");


// 34. Write a function to check if a string is a valid IPv4 address.

// 1st way

function isValidIPv4Regex(str) {
    console.log("Input string:", str);
    const pattern = /^(\d{1,3}\.){3}\d{1,3}$/;
    const isValid = pattern.test(str) && str.split('.').every(part => parseInt(part) >= 0 && parseInt(part) <= 255);
    console.log("Is valid IPv4 address:", isValid);
    return isValid;
}

// isValidIPv4Regex("192.168.0.1");

// 2nd way

const { isIPv4 } = require('net');

function isValidIPv4Net(str) {
    console.log("Input string:", str);
    const isValid = isIPv4(str);
    console.log("Is valid IPv4 address:", isValid);
    return isValid;
}

// isValidIPv4Net("192.168.0.1");


// 35. Write a function to remove all non-alphanumeric characters from a string.

// 1st way

function removeNonAlphanumeric(str) {
    console.log("Input string:", str);
    const withoutNonAlphanumeric = str.replace(/[^a-zA-Z0-9]/g, '');
    console.log("String without non-alphanumeric characters:", withoutNonAlphanumeric);
    return withoutNonAlphanumeric;
}

// removeNonAlphanumeric("Hello! How are you? 123");


// 2nd way

function removeNonAlphanumericReplaceFixed(str) {
    console.log("Input string:", str);
    const withoutNonAlphanumeric = str.replace(/[^\w]/g, '');
    console.log("String without non-alphanumeric characters:", withoutNonAlphanumeric);
    return withoutNonAlphanumeric;
}

removeNonAlphanumericReplaceFixed("Hello! How are you? 123");


















































