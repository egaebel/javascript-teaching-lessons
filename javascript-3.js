// 1. String length.
// When given a string, count the number of characters in it and return that number.
// Do not use any fields or functions on the string to directly obtain the length.
//
// Example:
// Input: "this is a string"
// Output: 16
//
// Hint: What happens if you index into a string beyond its length? (i.e. "this is a string"[22])
//
// Reference: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
//
function stringLength(s) {
    return -1;
}


// 2. String/character array comparison.
// When given a string, convert it to a character array.
//
// Example:
// Input: "this is a string"
// Output: ["t", "h" "i", "s"," ", "i", "s"," ", "a", " ", "s", "t", "r", "i", "n", "g"]
//
function stringToArray(s) { }


// 3. Join character array.
// When given an array of characters (or any string), return the result of combining all
// of the characters within as a string.
//
// Example:
// Input: ["t", "h", "i", "s"," ", "i", "s"," ", "a", " ", "s", "t", "r", "i", "n", "g"]
// Output: "this is a string"
//
function arrayToString(charArray) { }


// 4. Take a substring from a string.
// When given a string and two numbers indicating the startIndex and endIndex (exclusive),
// return a string containing only the characters between startIndex and endIndex (exclusive).
//
// Example 1:
// Input: "this is a string", 0, 4
// Output: "this"
//
// Example 2:
// Input: "this is a string", 4, 9
// Output: " is a"
//
// Example 3:
// Input: "this is a string", 8, 16
// Output: "a string"
//
function takeSubstring(s, startIndex, endIndex) {
    let substring = "";
    return substring;
}


// 5. Summing numbers.
// When given an array of numbers, return the sum of all those numbers.
//
// Example:
// Input: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384]
// Output: 32,767
//
function sumNum(numArray) { }


// 6. Printing even numbers (modulus operator) (example of usefulness on audio.news).
// Write a function that, when given an arbitrary array of numbers, prints the even ones.
// Write a function that, when given an arbitrary array of numbers, returns an array containing the even ones.
//
// Example:
// Input: [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
// Output: [-10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22]
//
// Reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
//
function printEven(numArray) { }

function getEven(numArray) { }

// 7. Fizz Buzz.
// When given a number, n, count up to that number from 1 and 
// return an array of strings, where each element is either the number
// we iterated over, or
// fizz if it's divisible by 3
// buzz if it's divisible by 5 
// and fizz buzz if it's divisible by 3 and 5.
//
// Example 1:
// Input: n = 3
// Output: ["1","2","Fizz"]
//
// Example 1:
// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
//
// Example 1:
// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
//
// Reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
//
function fizzBuzz(n) { }

// Testing solutions-------------------------------------------------------------
console.log("\n1. String length")
let ret = stringLength("this is a string");
console.log("stringLength(\"this is a string\"): " + ret);

console.log("\n2. String/character array comparison.")
ret = stringToArray("this is a string");
console.log("stringToArray(\"this is a string\"): " + ret);

console.log("\n3. Join character array.")
ret = arrayToString(['t', 'h', 'i', 's', ' ', 'i', 's', ' ', 'a', ' ', 's', 't', 'r', 'i', 'n', 'g']);
console.log("arrayToString(['t', 'h' 'i', 's',' ', 'i', 's',' ', 'a', ' ', 's', 't', 'r', 'i', 'n', 'g']): " + ret);

console.log("\n4. Take a substring from a string.")
ret = takeSubstring("this is a string", 0, 4);
console.log("takeSubstring(\"this is a string\", 0, 4): " + ret);
ret = takeSubstring("this is a string", 4, 9);
console.log("takeSubstring(\"this is a string\", 4, 9): " + ret);
ret = takeSubstring("this is a string", 8, 16);
console.log("takeSubstring(\"this is a string\", 8, 16): " + ret);

console.log("\n5. Summing numbers.")
ret = sumNum([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384]);
console.log("sumNum([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384]): " + ret);

console.log("\n6. Printing even numbers (modulus operator).")
printEven([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]);
ret = getEven([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]);
console.log("getEven([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]): " + ret);

console.log("\n7. Fizz Buzz.")
ret = fizzBuzz(16);
console.log("fizzBuzz(16): " + ret);