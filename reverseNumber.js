const reverseNumber = (num) => {
  let num1 = 0;
  let num2 = 0;
  while (num > 0) {
    num1 = Math.floor(num % 10);
    num2 = num2 * 10 + num1;
    num = Math.floor(num / 10);
  }
  console.log(num2);
};
reverseNumber(12345);
