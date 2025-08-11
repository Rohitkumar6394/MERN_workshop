// Remove All Adjacent Duplicates in javascript
// input: "aabbaccad"

// word = "aabbaccad";
// let i = 0;
// while (i < word.length - 1) {
//     if (word[i] === word[i + 1]) {
//         word = word.slice(0, i) + word.slice(i + 2);
//         i = Math.max(0, i - 1); // Move back one step to check for new adjacent duplicates
//     } else {
//         i++;
//     }
// }
let str = "aabbaccad";
let w = "";
for (let i of str) {
    if(i)
