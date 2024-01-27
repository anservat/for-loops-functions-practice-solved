// EXERCISE 3
// Make sure to solve two parts beneath

/**
 * PART 1
 * Return the average value for the given array of numbers.
 * Example: getAverage([22, 45, 4, 65]) => 34
 * */

export function getAverage(array) {
  var average = 0;

  for (var i = 0; i < array.length; i++) {
    var currentNum = array[i];
    average += currentNum;
  }

  average = average / array.length;
  return average;
}

var averageResult = getAverage([22, 45, 4, 65]);
console.log(averageResult);

/**
 * PART 2
 * Create a getStringSum(str) function that returns the sum of any integers that are in the string.
 * Example1: getStringSum("GH2U87A") => 17
 * Example2: getStringSum("GHIUJUHSG") => 0
 * */

export function getStringSum(str) {
  var totalSum = 0;

  for (var char of str) {
    if (!isNaN(parseInt(char))) {
      totalSum += parseInt(char);
    }
  }
  return totalSum;
}

var result1 = getStringSum("GH2U87A");
var result2 = getStringSum("GHIUJUHSG");

console.log(result1);
console.log(result2);

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
