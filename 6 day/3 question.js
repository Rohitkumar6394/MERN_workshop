// Find the most frequent character in a string
// Input: "javascript"
// Output: "a" or "s" (depending on the implementation)

// let str = "javascript";
// let  mostFrequentChar = '';
// let maxCount = 0;
// for (let i = 0; i < str.length; i++) {
//     let count = 0;
//     for (let j = 0; j < str.length; j++) {
//         if (str[i] === str[j]) {
//             count++;
//         }
//     }
//     if (count > maxCount) {
//         maxCount = count;
//         mostFrequentChar = str[i];
//     }
// }
// console.log("mostFrequentChar is: " + mostFrequentChar); // Output: "a" or "s"
let word = "javascript";
let count = 0
let letter = "";
for (let i of word) {
    let ltr_count = 0;
    for (let ij of word) {
        if (i === ij) {
            ltr_count++;
        }
    }
    if(count < ltr_count) {
        count = ltr_count;
        letter = i;
    }
}
console.log("mostFrequentChar is: " + letter); // Output: "a" or "s"