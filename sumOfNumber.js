const sumOfNumber = (num) => {
 let num1 = 0 ; let num2 = 0 ; 
 while(num>0){
    num1 = Math.floor(num%10);
    num2 = num2 + num1;
    num = Math.floor(num/10);
 }
 return num2;
}

console.log(sumOfNumber(123));