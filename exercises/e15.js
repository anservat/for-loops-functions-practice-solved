// EXERCISE 15
// Please, read the exercise-info/concat.md to get the initial data of what is the expected result of this exercise.
// concatArrays(['d', 'r', 'a'], ['f', 'y']) => ['d', 'r', 'a', 'f', 'y']
// NOTE: You can NOT use the array.concat() method in your code


CONCAT NOT ALLOWED 

export function concatArrays(arr1, arr2) {
  var concatenatedArray = [];

  for (var i = 0; i < arr1.length; i++) {
    concatenatedArray.push(arr1[i]);
  }

  for (var j = 0; j < arr2.length; j++) {
    concatenatedArray.push(arr2[j]);
  }

  return concatenatedArray;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-15"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
