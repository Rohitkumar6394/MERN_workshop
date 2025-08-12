// 6. Magic Number
// A number is magic if the recursive sum of its digits becomes 1.

function isMagicNumber(n) {
    while (n > 9) {
        let sum = 0;
        while (n > 0) {
            sum += n % 10;
            n = Math.floor(n / 10);
        }
        n = sum;
    }
    return n === 1;
}

console.log("Magic 19:", isMagicNumber(19)); // true
console.log("Magic 1234:", isMagicNumber(1234));
console.log("Magic 38:", isMagicNumber(38)); // true
// console.log("Magic 10:", isMagicNumber(10)); // false
// console.log("Magic 7:", isMagicNumber(7)); // false
// console.log("Magic 999:", isMagicNumber(999)); // true
// console.log("Magic 100:", isMagicNumber(100)); // false
// console.log("Magic 1:", isMagicNumber(1)); // true
// console.log("Magic 0:", isMagicNumber(0)); // false
