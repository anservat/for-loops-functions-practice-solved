
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  // Using filter to select accounts with wrong balances
  return array.filter(account => {
    // Using reduce to calculate the sum of deposits
    const depositsSum = (account.deposits || []).reduce((sum, deposit) => sum + deposit, 0);

    // Using reduce to calculate the sum of withdrawals
    const withdrawalsSum = (account.withdrawals || []).reduce((sum, withdrawal) => sum + withdrawal, 0);

    // Calculating the expected balance
    const expectedBalance = depositsSum - withdrawalsSum;

    // Checking if the balance is different from the expected balance
    return account.balance !== expectedBalance;
  });
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
