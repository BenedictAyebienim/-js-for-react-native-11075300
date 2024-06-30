// arrayManipulation.js

// Function to process an array of numbers
function processArray(numbers) {
    return numbers.map(num => {
        if (num % 2 === 0) {
            return num * num; // Square even numbers
        } else {
            return num * 3; // Triple odd numbers
        }
    });
}


// Function to format an array of strings based on an array of numbers
function formatArrayStrings(strings, numbers) {
    if (strings.length !== numbers.length) {
        throw new Error("The length of strings and numbers arrays must be the same");
    }

    return strings.map((str, index) => {
        if (numbers[index] % 2 === 0) {
            return str.toUpperCase(); // Capitalize string if the number is even
        } else {
            return str.toLowerCase(); // Convert string to lowercase if the number is odd
        }
    });
}