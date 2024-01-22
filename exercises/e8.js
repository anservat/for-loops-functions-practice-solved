
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  // Your code goes here...
  // Using reduce to find the account with the greatest balance
  const greatestBalanceAccount = array.reduce((maxBalanceAccount, currentAccount) => {
    return currentAccount.balance > maxBalanceAccount.balance ? currentAccount : maxBalanceAccount;
  }, array[0]);

  // Returning the result in an array
  return [greatestBalanceAccount];
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
