// Remove All Digits From a String
// input: "BHDS2HD5443"

let str = "BHDS2HD5443";
let result = '';
// for (let i = 0; i < str.length; i++) {
//     if (!(str[i] >= '0' && str[i] <= '9')) {
//         result += str[i];
//     }
// }
// console.log(result); // Output: "BHDSHD"
for(let i of str) {
    if (i.toLowerCase() ==i.toUpperCase()) {
        continue; // This means it's a digit
    }
    else {
        result += i;
    }
}
console.log(result); // Output: "BHDSHD"
