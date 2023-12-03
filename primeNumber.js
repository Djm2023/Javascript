function primeNumber(num) {
  let isPrime = true;
  if (num < 1) {
    console.log(`${num} is not prime.Provide positive integer`);
  }
  if (num === 1) {
    isPrime = false;
  }
  if (num === 2) {
    isPrime = true;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(`${num} is a prime number `);
  } else {
    console.log(`${num} is not a prime number`);
  }
}
primeNumber(6);
