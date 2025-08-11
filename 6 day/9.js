// countpalindromes 
// input:("aaa")
// output: 6


let word = "aaa";
count = 0;


for(let i = 0; i < word.length; i++) {
    for(let j = i ; j <= word.length; j++) {
        // console.log(i,j)
        if(word.slice(i, j)){
            if(word.slice(i, j) == word.slice(i, j).split('').reverse().join('')) {
                count++;
            }

        }
    }

}
console.log(count); // Output: 6
 