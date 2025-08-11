// Find the first non-Repeating Character in a String
// Input: "aabbcde "
// Output: "c"

// let str = "aabbcde "
// for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     let isRepeating = false;

//     for (let j = 0; j < str.length; j++) {
//         if (i !== j && char === str[j]) {
//             isRepeating = true;
//             break;
//         }
//     }

//     if (!isRepeating) {
//         console.log("First non-repeating character is: " + char);
//         break;
//     }

// }
 
let word= "aabbaccad ";
let w = ""; 
for (let i of word){
    if (i == w[w.length - 1]){
        // continue; // Skip if the character is the same as the last one
        w = w.slice(0,w.length - 1); // Remove the last character
    }
    else {
        w += i; // Add the character to the result
    }   

}
console.log(w) // Output: "c" (first non-repeating character)
