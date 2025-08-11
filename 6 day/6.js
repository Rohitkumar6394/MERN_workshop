// count Number of words (without  .split)
Input: "I am learning JavaScript"
// Output: 4


let sentence = "I am learning JavaScript";
let word = ""  
let w_count = 0;
for (let i of sentence) {
    if (i !=' ') {
        word+= i;
        // console.log(i);
    } else if(word) {
        w_count++;
        word = "";
    }
}

console.log(w_count + 1); // Output: 4