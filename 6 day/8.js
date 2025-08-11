// check if one string is rotation of another
// input: "Hello World again"


let str1 = "Hello";
let str2 = "World";

let str3 = str1 + str1; // Concatenate str1 with itself
if (str3.includes(str2)) {
    console.log("Yes, str2 is a rotation of str1");
}
else {
    console.log("No, str2 is not a rotation of str1");
}
// console.log(str3); // Output: "Hello World againHello World again"