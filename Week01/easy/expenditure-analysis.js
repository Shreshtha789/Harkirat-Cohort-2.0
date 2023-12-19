/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

  transactions.forEach(transaction => {
    const { category, price } = transaction;
    //console.log(category,price);
    categoryTotals[category] = (categoryTotals[category] || 0) + price;
    //console.log(categoryTotals);
    //console.log(categoryTotals[category]);
  });
  //console.log(categoryTotals);
  const result = Object.keys(categoryTotals).map(category => ({
    category,
    totalSpent: categoryTotals[category]
  }));

  return result;
}

//
/*
const transactions = [
  { itemName: 'Item1', category: 'Groceries', price: 50, timestamp: '2023-01-01' },
  { itemName: 'Item2', category: 'Electronics', price: 200, timestamp: '2023-01-02' },
  { itemName: 'Item3', category: 'Groceries', price: 30, timestamp: '2023-01-03' },
  { itemName: 'Item4', category: 'Electronics', price: 150, timestamp: '2023-01-04' },
  { itemName: 'Item5', category: 'Clothing', price: 80, timestamp: '2023-01-05' },
  { itemName: 'Item6', category: 'Groceries', price: 20, timestamp: '2023-01-06' }
];

const result = calculateTotalSpentByCategory(transactions);
console.log(result);
*/

module.exports = calculateTotalSpentByCategory;
