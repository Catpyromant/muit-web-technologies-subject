function calculateTipAndTotal(bill) {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  const total = bill + tip;
  return `The bill was ${bill}, the tip was ${tip}, and the total value ${total}`;
}

// Test data
const bills = [275, 40, 430];
const results = bills.map((bill) => calculateTipAndTotal(bill));

// Printing the results
results.forEach((result) => console.log(result));
