// EXERCISE 16
// Please, read the exercise-info/flat.md to get the initial data of what is the expected result of this exercise.

// # ARRAY FLAT

// The **flat()** creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// ```JS
// const arr1 = [0, 1, 2, [3, 4]];
// console.log(arr1.flat());
// // expected output: Array [0, 1, 2, 3, 4]


// ```

// For this exercise we want you to build a flattenArray() function that solves the same task 
// for the depth of 1 with **for loops ONLY**.

// a flattenArray() function should
// • Take 2 arrays as arguments
// • Return a single array of arguments' arrays values

// flatArrays([['d', 'r'], 'z', 'b', ['f', 'y']]) => ['d', 'r', 'z', 'b', 'f', 'y']
// NOTE: You can NOT use the array.flat() method in your code

export function flatArrays(array) {
  return array.reduce((acc, item) => {
    if (Array.isArray(item)) {
        return [...acc, ...flatArrays(item)];
    } else {
        return [...acc, item];
    }
  }, []);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function