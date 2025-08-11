// check if two strings are anagrams

// Input: "listen", "silent"
// output: true


let word1 = "listen";
let word2 = "silent";

let anagrams=true;

if (word1.length !== word2.length) {
    console.log("not anagrams ");
}
else {
     for (let i of word1) {
        if (word2.includes(i)) {
            // anagrams = true;
            continue;
        } else {
            console.log("not anagrams");
            break;
        }
    }
}
console.log("its a anagram")
