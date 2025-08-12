// 5. Kaprekar Number
// A number n is Kaprekar if: n^2 can be split into two parts that sum to n.
// Example: 45 → 45² = 2025 → 20 + 25 = 45

function isKaprekar(n) {
    if (n === 1) return true; // 1 is a Kaprekar number
    let sq = (n * n).toString();
    let len = sq.length;
    for (let i = 1; i < len; i++) {
        let left = parseInt(sq.substring(0, i)) || 0;
        let right = parseInt(sq.substring(i)) || 0;
        if (right > 0 && left + right === n) {
            return true;
        }
    }
    return false;
}

console.log("Kaprekar 45:", isKaprekar(45)); // true
console.log("Kaprekar 9:", isKaprekar(9));   // true
console.log("Kaprekar 10:", isKaprekar(10)); // false

// Automorphic Number
// A number is automorphic if its square ends in the same digits as the number.
// Example: 76 → 76² = 5776 → ends with 76

function isAutomorphic(n) {
    let sq = (n * n).toString();
    return sq.endsWith(n.toString());
}

console.log("Automorphic 76:", isAutomorphic(76)); // true
console.log("Automorphic 25:", isAutomorphic(25)); //