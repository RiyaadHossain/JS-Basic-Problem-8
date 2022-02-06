// 1.Write a Function which outputs the sum of a input number using 'recursion'.

function sumRecursion(n) {
  if (n <= 1) {
    return 1;
  }

  return n + sumRecursion(n - 1);
}

let sumResult = sumRecursion(5);
// console.log(sumResult);

// Explanation:

/* sumRecursion(5) = return n + sumRecursion(n - 1)
     5 + sumRecursion(4)
     5 + 4 + sumRecursion(3)      
     5 + 4 + 3 + sumRecursion(2)      
     5 + 4 + 3 + 2 + sumRecursion(1) = return 1     
     5 + 4 + 3 + 2 + 1     
     
 */

// 2.Write a Function which outputs the Factorial of a input number using 'recursion'.

function multiplyRecursion(n) {
  if (n <= 1) {
    return 1;
  }

  return multiplyRecursion(--n) * n;
}

// console.log(multiplyRecursion(5));

// 3.Search some specific Products from an Array of total Products

let allProducts = [
  { name: "Apple Watch", price: 3400 },
  { name: "Asus Laptop", price: 14200 },
  { name: "Xiaomi Phone", price: 14000 },
  { name: "Samsung Watch", price: 4200 },
  { name: "Lenevo Laptop", price: 8400 },
];

function search(products, searchKey) {
  let result = [];
  for (const x of products) {
    // The Following method little bit tricky
    if (x.name.includes(searchKey)) {
      result.push(x.name);
    }
  }
  return result;
}

let searchResult = search(allProducts, "Asus Laptop");

// console.log(searchResult);

// 4.Usage of "break" & "continue" Statement

let elecProducts = [
  { name: "Apple Watch", price: 34000 },
  { name: "Asus Laptop", price: 14200 },
  { name: "Xiaomi Phone", price: 14000 },
  { name: "Samsung Watch", price: 4200 },
  { name: "Lenevo Laptop", price: 8400 },
  { name: "Lenevo Wathc", price: 2200 },
  { name: "Lenevo Phone", price: 2400 },
  { name: "Mac Book", price: 96000 },
];

// Break Statement

function myFunc(allProducts, priceRange) {
  let result = [];

  for (const x of allProducts) {
    if (x.price < priceRange) {
      // break statement will break the entire loop
      break;
    }
    result.push(x.name);
  }
  return result;
}

// console.log(myFunc(elecProducts, 30000));

// Continue Statement

function myFunc2(allProducts, priceRange) {
  let result = [];

  for (const x of allProducts) {
    if (x.price < priceRange) {
      // continue statement will skip the current iteration
      continue;
    }
    result.push(x.name);
  }
  return result;
}

console.log(myFunc2(elecProducts, 15000));

// 5. Observe the following Code and its Output

const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
  if (i == 5) {
    continue;
  }
  // console.log(array[i]);
}
