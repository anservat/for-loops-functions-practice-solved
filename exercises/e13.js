// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [
// Susan's Account Object,
// Morgan's Account Object
// Joshua's Account Object
// Candy's Account Object,
// Phil's Account Object
// ]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  // Using filter to select accounts with sums of deposits less than 2000 or no deposits
  return array.filter(account => {
    // Using reduce to calculate the sum of deposits (or returning 0 if no deposits)
    const depositsSum = (account.deposits || []).reduce((sum, deposit) => sum + deposit, 0);
    return depositsSum < 2000;
  });
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
