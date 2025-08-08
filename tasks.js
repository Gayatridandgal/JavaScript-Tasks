

// Analyzes a string
function analyzeString(str) {
    let lower = str.toLowerCase();
    let upper = str.toUpperCase();
    let cnt = [...str].filter(ch => ch === 'a').length;
    console.log("Length of the string: " + str.length);
    console.log("Lowercase: " + lower);
    console.log("Uppercase: " + upper);
    console.log("Is 'javascrpt' present: " + (str.includes("javascrpt") ? "Yes" : "No"));
    console.log("Count of 'a': " + cnt);
}

// Array operations
function arrayOperations(arr) {
    console.log("Length of the array: " + arr.length);
    arr.push(7);
    console.log("Array after insertion: " + arr);

    arr.splice(1, 1); // delete at index 1
    console.log("Array after deletion at index 1: " + arr);

    arr.sort((a, b) => a - b); // sort numerically
    console.log("Sorted array: " + arr);

    arr.reverse();
    console.log("Reversed array: " + arr);

    console.log(arr.includes(8) ? "8 is present in the array." : "8 is not present in the array.");

    let index = arr.indexOf(12);
    if (index !== -1) {
        console.log("12 is present at index " + index);
    }

    let doubled = arr.map(x => x * 2);
    console.log("Array after doubling: " + doubled);
}

// Manipulate array of strings
function arrayOfStrings(arr) {
    console.log("Array of strings: " + arr.join(", "));
    arr.push("Eve");
    console.log("After insertion: " + arr);

    let index = arr.indexOf("Doe");
    if (index !== -1) arr.splice(index, 1);
    console.log("After deletion: " + arr);

    arr.sort();
    console.log("Sorted array: " + arr);

    console.log(arr.includes("Alice") ? "Alice is present." : "Alice is not present.");

    let uppercaseNames = arr.map(name => name.toUpperCase());
    console.log("Uppercase names: " + uppercaseNames);
}

// Object definitions
let p1 = {
    Name: "John",
    Age: 30,
    Gender: "Male",
    Occupation: "Engineer"
};

let p2 = {
    Name: "Ajay",
    Age: 23,
    Gender: "Male",
    Occupation: "Youtuber"
};

// Operations on a Set
function setOperations() {
    let mySet = new Set([1, 2, 3]);
    console.log("Set after adding: ", [...mySet]);
    console.log("Size of set: " + mySet.size);
}

// Reverse string
function reverseString(str) {
    let reversed = str.split("").reverse().join("");
    console.log("Reversed string: " + reversed);
}

// Calculator
function calculate(n1, n2, operation) {
    switch (operation) {
        case "add":
            console.log("Sum: " + (n1 + n2));
            break;
        case "subtract":
            console.log("Difference: " + (n1 - n2));
            break;
        case "multiply":
            console.log("Product: " + (n1 * n2));
            break;
        case "divide":
            n2 !== 0 ? console.log("Quotient: " + (n1 / n2)) : console.log("Cannot divide by zero.");
            break;
        default:
            console.log("Invalid operation.");
    }
}

// Promise & async/await
function func() {
    return new Promise((resolve, reject) => {
        let success = true;
        success ? resolve("Promise resolved successfully!") : reject("Promise rejected.");
    });
}

async function asyncFunction() {
    try {
        let result = await func();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

