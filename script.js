// Challenge 1: Create a for loop to print all the even numbers till 100 in the console.
for(var i = 0; i<=100; i++) 
  if(i%2==0){
console.log(i);
  }

// Challenge 2: Create a while loop to print all the odd numbers till 100 in the console.
for (let i = 1; i < 100; i+=2) {
  console.log(i);
 }

// Challenge 3: Create a do while loop to print all the multiples of 3 till 100 in the console.
let number = 3;

do {
  console.log(number);
  number += 3;
} while (number <= 100);

// Challenge 4: Create a for loop to print all the prime numbers till 100 in the console.
function printPrimesUntil(n) {
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

printPrimesUntil(100);

