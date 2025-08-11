// function hello() {
//     return "hello"
// }
//     console.log(hello);

  

// const hii =function(){
//     return "hii"
// }
// console.log(hii())

// const world=()=>{
//     return "world"
// }
// // world()
// console.log(world());


// const addition=(a=5,b=5)=>{
    // return a+b
// }
// console.log(addition(4,3))

// console.log(2+ addition)

// global variable

// const hii ="hello"
// const print=()=>{
//     const local="im local variable"
//     console.log(hii)

// }
// print()
// console.log(local);


// Number based problem
// let  number =1234
// console.log(number%10)
//  number=Math.floor(number/10)
// console.log(number)


// let number = 1234
// let count=0
// while(number>0){
//     number = Math.floor(number/10)
//     count++
// }
// console.log(count);

// Find sum of digit 
// number=1234==>1+2+3+4=>10

// let number = 1234
// let sum=0
// while(number>0){
//     let digit = number % 10;     
//     sum += digit;                
//     number = Math.floor(number / 10);
// }
// console.log(sum )


// Check given number is palindrome or not 

// let number = 1234
// let reverse =0
// let temp=number
// while (temp>0){
//     let digit = temp%10
//     number = reverse * 10 + digit;
//     temp= Math.floor(temp/10)
// }
 
// console.log((number==reverse))

// repeatedly sums the digit of a number utill a single digit result;

// let number = 5456;

// while (number >= 10) {
//     let sum = 0;
//     while (number > 0) {
//         sum += number % 10; // Add last digit
//         number = Math.floor(number / 10);  
//     number = sum; // Repeat with new sum
//  }
// }

// console.log("Single digit result:", number); 

// Harshad number 
// divide by sum of its digits 

//   let number = 18;
// let temp = number;
// let sum = 0;

// // Step 1: Find sum of digits
// while (temp > 0) {
//     sum += temp % 10; // get last digit and add
//     temp = Math.floor(temp / 10); // remove last digit
// }

// // Step 2: Check divisibility
// if (number % sum === 0) {
//     console.log(number + " is a Harshad number.");
// } else {
//     console.log(number + " is not a Harshad number.");
// }

// Armstrong number 
// 123=>1**3+3**===123


// let number = 1234
// let temp = number
// let sum = 0
// let digits = number.toString().length
// while (temp > 0) {
//     let digit = temp % 10
//     sum += Math.pow(digit, digits)
//     temp = Math.floor(temp / 10)
// }
// if (sum === number) {
//     console.log(number + " is an Armstrong number.")
// } else {
//     console.log(number + " is not an Armstrong number.")
// }



// Find sum of even number and add number from number 
// 12345678==>even= 2+4+6+8; odd= 1+3+5+7


// Find given number is prime or not 

// let number = 11;
// let isPrime=true;

// if(number<=1){
//     isPrime=false;
// }else {
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
// }
// if (isPrime) {
//     console.log(number + "is prime number")
// }else{
    // console.log(number + "is not prime number")
// }
// const prime=(number)=>{
//     for(i=2;i<(number/2)+1;i++){
//         if(number%i==0){
//             return "not a prime"
//         }
//     }
//     return "its a prime number"
// }
// console.log(prime(13))

// const perfect = ( number)=>{
//     let sum=0
//     for(i=0;i<number;i++){
//         if (number%i==0){
//             sum+=i
//         }
//     }
//     if(sum==number) {
//         return "perfect number"
//     }

// }
// console.log(perfect(6))


//  strong number 
// sum of digit factorial equal the number 




//  strong number 
// sum of digit factorial equal the number

// const isStrongNumber = (number) => {
//     let sum = 0;
//     let temp = number;

//     // Helper function to calculate factorial
//     const factorial = (n) => {
//         let fact = 1;
//         for (let i = 2; i <= n; i++) {
//             fact *= i;
//         }
//         return fact;
//     };

//     while (temp > 0) {
//         let digit = temp % 10;
//         sum += factorial(digit);
//         temp = Math.floor(temp / 10);
//     }

//     return sum === number ? "strong number" : "not a strong number";
// };

// console.log(isStrongNumber(145)); // 145 is a strong number (1! + 4! + 5! =

