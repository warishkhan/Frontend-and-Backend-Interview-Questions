function removeNonAlphanumeric(str) {
    console.log("Input string:", str);
    const withoutNonAlphanumeric = str.replace(/[^a-zA-Z0-9]/g, '');
    console.log("String without non-alphanumeric characters:", withoutNonAlphanumeric);
    return withoutNonAlphanumeric;
}

removeNonAlphanumeric("Hello! How are you? 123");