
// EXERCISE 3
// Make sure to solve two parts beneath

/** 
 * PART 1
 * Return the average value for the given array of numbers.
 * Example: getAverage([22, 45, 4, 65]) => 34
 * */

export function getAverage(array) {
  // Your code goes here...
  if (array.length === 0) {
    return 0; // To handle the case when the array is empty
  }

  const sum = array.reduce((acc, num) => acc + num, 0);
  return sum / array.length;
}


/** 
 * PART 2
 * Create a getStringSum(str) function that returns the sum of any integers that are in the string.
 * Example1: getStringSum("GH2U87A") => 17
 * Example2: getStringSum("GHIUJUHSG") => 0
 * */ 

export function getStringSum(str) {
  // Your code goes here...
  function getStringSum(str) {
    // Use a regular expression to match all integers in the string
    const numbers = str.match(/-?\d+/g);
  
    if (!numbers) {
      return 0; // Return 0 if there are no integers in the string
    }
  
    // Sum up the extracted integers
    const sum = numbers.reduce((acc, numStr) => acc + parseInt(numStr, 10), 0);
  
    return sum;
  }
  
  // Example1 usage:
  const result = getStringSum("GH2U87A");
  console.log(result); // Output: 89
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
