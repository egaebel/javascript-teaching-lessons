const crypto = require("crypto");

function myTextManipulation3(baseText, wordsToReplacementCandidatesMap) {
    let newBaseText = "";
    let baseTextSplitOnWhitespace = baseText.split(/\s/);
    let numReplacements = 0;
    for (wordIndex in baseTextSplitOnWhitespace) {
        let word = baseTextSplitOnWhitespace[wordIndex];
        let lowerWord = word.toLowerCase();
        if (lowerWord in wordsToReplacementCandidatesMap) {
            let randomIndex = crypto.randomInt(wordsToReplacementCandidatesMap[lowerWord].length);
            newBaseText = newBaseText + wordsToReplacementCandidatesMap[lowerWord][randomIndex] + " ";
            numReplacements += 1;
        } else {
            newBaseText += word;
            newBaseText += " ";
        }
    }
    console.log("In myTextManipulation3: made '%d' replacements!", numReplacements);
    return newBaseText.trim();
}

function myTextManipulation2(baseText, wordToReplace, replacementCandidatesArray) {
    let newBaseText = "";
    let baseTextSplitOnWhitespace = baseText.split(/\s/);
    let numReplacements = 0;
    for (wordIndex in baseTextSplitOnWhitespace) {
        let word = baseTextSplitOnWhitespace[wordIndex];
        if (word.toLowerCase() === wordToReplace.toLowerCase()) {
            let randomIndex = crypto.randomInt(replacementCandidatesArray.length);
            newBaseText = newBaseText + replacementCandidatesArray[randomIndex] + " ";
            numReplacements += 1;
        } else {
            newBaseText += word;
            newBaseText += " ";
        }
    }
    console.log("In myTextManipulation2: made '%d' replacements!", numReplacements);
    return newBaseText.trim();
}

function myTextManipulation1(baseText, wordToReplace, replacementWord) {
    let newBaseText = "";
    let baseTextSplitOnWhitespace = baseText.split(/\s/);
    let numReplacements = 0;
    for (wordIndex in baseTextSplitOnWhitespace) {
        let word = baseTextSplitOnWhitespace[wordIndex];
        if (word.toLowerCase() === wordToReplace.toLowerCase()) {
            newBaseText = newBaseText + replacementWord + " ";
            numReplacements += 1;
        } else {
            newBaseText += word;
            newBaseText += " ";
        }
    }
    console.log("In myTextManipulation1: made '%d' replacements!", numReplacements);
    return newBaseText.trim();
}

let testBaseText = "The Internet has exploded with blogs, writing, social media, online shopping, cryptocurrency etc. But, the public is often left asking is the Internet worth it? Does the good provided by the positive aspects of the Internet overcome the scams, lies, disinformation, and other harmful content that the Internet doles out to anyone like a gumball machine?"

// let testNewBaseText = myTextManipulation1(testBaseText, "internet", ["mall"]);
// let testNewBaseText = myTextManipulation2(
//     testBaseText,
//     "internet",
//     ["footlocker", "shoe market", "nike company", "adidas compan", "rebok company"]);
let testNewBaseText = myTextManipulation3(
    testBaseText,
    {
        "internet": ["footlocker", "shoe market", "nike company", "adidas compan", "rebok company"],
        "online shopping": ["terrorism", "rampant consumerism", "exploitation"],
        "provided": ["delivered", "conveyed"]
    });
console.log("\nWent from: '" + testBaseText + "'\n\nTo: '" + testNewBaseText + "'\n");