const accounts = [];

function createAccount() {
  const name = prompt("Enter your name:");
  const initialBalance = parseFloat(prompt("Enter your initial balance:"));
  
  if (isNaN(initialBalance)) {
    console.error("Invalid balance.");
    return;
  }

  if (initialBalance < 0) {
    console.error("Initial balance cannot be negative.");
    return;
  }

  const account = {
    name: name,
    balance: initialBalance,
  };

  accounts.push(account);

  console.log(`Account created for ${name}.`);
}

function deposit() {
  const name = prompt("Enter your name:");
  const amount = parseFloat(prompt("Enter the amount to deposit:"));

  if (isNaN(amount)) {
    console.error("Invalid amount.");
    return;
  }

  if (amount < 0) {
    console.error("Deposit amount cannot be negative.");
    return;
  }

  const account = findAccount(name);

  if (!account) {
    console.error("Account not found.");
    return;
  }

  account.balance += amount;

  console.log(`Deposited ${amount} to ${name}'s account.`);
}

function withdraw() {
  const name = prompt("Enter your name:");
  const amount = parseFloat(prompt("Enter the amount to withdraw:"));

  if (isNaN(amount)) {
    console.error("Invalid amount.");
    return;
  }

  if (amount < 0) {
    console.error("Withdrawal amount cannot be negative.");
    return;
  }

  const account = findAccount(name);

  if (!account) {
    console.error("Account not found.");
    return;
  }

  if (account.balance < amount) {
    console.error("Insufficient balance.");
    return;
  }

  account.balance -= amount;

  console.log(`Withdrew ${amount} from ${name}'s account.`);
}

function viewBalance() {
  const name = prompt("Enter your name:");
  const account = findAccount(name);

  if (!account) {
    console.error("Account not found.");
    return;
  }

  console.log(`${name}'s account balance: ${account.balance}`);
}

function findAccount(name) {
  return accounts.find(account => account.name === name);
}

function main() {
  while (true) {
    const choice = prompt(`
      1. Create account
      2. Deposit
      3. Withdraw
      4. View balance
      5. Quit
    `);

    switch (choice) {
      case "1":
        createAccount();
        break;

      case "2":
        deposit();
        break;

      case "3":
        withdraw();
        break;

      case "4":
        viewBalance();
        break;

      case "5":
        console.log("Exiting...");
        return;

      default:
        console.error("Invalid choice.");
        break;
    }
  }
}

main();
