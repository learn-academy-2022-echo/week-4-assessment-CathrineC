// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe("shuffleWords", () => {
    it("returns the remaining content of an array shuffled", () => {
        expect(colors1.length-1).toEqual(shuffleWords(colors1).length)
        expect(shuffleWords(colors1)).not.toEqual(["blue", "green", "yellow", "pink"])

        expect(colors2.length-1).toEqual(shuffleWords(colors2).length)
        expect(shuffleWords(colors2)).not.toEqual(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"])

    })
})
            // FAIL  ./code-challenges.test.js
            // shuffleWords
            //   ✕ returns the remaining content of an array shuffled (2 ms)
            // ● shuffleWords › returns the remaining content of an array shuffled
            //   ReferenceError: shuffleWords is not defined


// b) Create the function that makes the test pass.

// PSEUDO CODE:
// - Create a function called shuffleWords
// - Input: can take an array of strings
// - reverse the elements in the array so that the first element goes to the end of the array
// - once the array is reversed, the new last element can be deleted from the array, using .pop()
// - needs to return an array of words (used .sort()) and needs a parameter to shuffle the words inside the array
// - to shuffle the elements inside the array, the placement of the elements needs to be in random order (used Math.Random() - 0.5) --->0.5 needs to be less than 1
// - Expected Output: Return the remaining elements in the array shuffled.

const shuffleWords = (colors) => {
    colors.reverse().pop()
    colors.sort(function(){
        return Math.random() - 0.5
    }) 
    return colors
}

            // PASS  ./code-challenges.test.js
            // shuffleWords
            //   ✓ returns the remaining content of an array shuffled (2 ms)

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = {upVotes: 13, downVotes: 2}
// Expected output: 11
const votes2 = {upVotes: 2, downVotes: 33}
// Expected output: -31

describe("totalVotes", () => {
    it("returns the net total of votes", () => {
        expect(totalVotes(votes1)).toEqual(11)
        expect(totalVotes(votes2)).toEqual(-31)
    })
})
            // FAIL  ./code-challenges.test.js
            //   totalVotes
            //     ✕ returns the net total of votes (1 ms)
            //   ● totalVotes › returns the net total of votes
            //     ReferenceError: shuffleWords is not defined

// b) Create the function that makes the test pass.

// PSEUDO CODE:
// - create a function called totalVotes
// - Input: object with numbers as values
// - gather the values in an array
// - deduct the value on index 1 from the value on index 0
// - Return the net total of votes

const totalVotes = (number) => {
    let votes = Object.values(number)
    return votes[0] - votes[1]
}
            // PASS  ./code-challenges.test.js
            // totalVotes
            //   ✓ returns the net total of votes (2 ms)

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

describe("noDoubleValues", () => {
    it("returns one array with no duplicate values", () => {
        expect(noDoubleValues(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
    })
})

            // FAIL  ./code-challenges.test.js
            // noDoubleValues
            //   ✕ returns one array with no duplicate values (1 ms)
            // ● noDoubleValues › returns one array with no duplicate values
            //   ReferenceError: noDoubleValues is not defined

// b) Create the function that makes the test pass.

// PSEUDO CODE:
// - create a function called noDoubleValues
// - Inpput: take in 2 arrays of strings
// - combine the elements of the 2 given arrays 
// - create an empty array the will store the combined elements
// - check the each element in the array
// - filter the elements that has the same value 
// - create a variable that will store the filtered elements
// - return an array with no duplicate values
// - STRETCH: instead of using .concat() to combine the 2 given arrays, make use of the spread operator using [...]

// FIRST ANSWER:
// const noDoubleValues = (arrOne, arrTwo) => {
//     let twoArr = arrOne.concat(arrTwo);
//     let combined = twoArr.filter((data, dupData) => 
//     twoArr.indexOf(data) === dupData)
//     return combined;
// }
            // PASS  ./code-challenges.test.js
            // noDoubleValues
            // ✓ returns one array with no duplicate values (1 ms)

// STRETCH: Use the spread operator to pass in a dynamic number of arguments.
const noDoubleValues = (arrOne, arrTwo) => {
    let twoArr = [...arrOne, ...arrTwo];
    let combined = twoArr.filter((data, dupData) => 
    twoArr.indexOf(data) === dupData)
    return combined;
}
            // PASS  ./code-challenges.test.js
            // noDoubleValues
            //   ✓ returns one array with no duplicate values (2 ms)

