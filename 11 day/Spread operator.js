//Spread operator

// const arr1 = [1,2, 4,6];
// const arr2 = [2,4,6,8,8]; 
// const copy=arr1
// console.log(copy);
// copy[0]=9
// console.log(copy);
// console.log(...arr1, ...arr2);


// const arr1 = {1: "one", 2: "two", 3: {"fd":"jh"}};
// const copy1 = {...arr1};
// console.log(copy1);
// arr1[3]="three";
// copy1[3["fd"]]="three";
// console.log(copy1);
// console.log(arr1[3]["fd"]);
// console.log(arr1[3]);

// const arr1 = [{"1:"one",2:"two"}
//                    {"3":"three", "4":"four"}]
// const copy1 = [...arr1];
// console.log(copy1); 

// const fun = (a, b, c, d) => {
    // console.log(a)
    // console.log(b)
    // console.log(c)/
    // console.log(d)
// }
// const arr = [1, 2, 3, 4];
// fun(...arr); // Spread operator to pass array elements as argument

// const fun = ({...one})=>{
    // console.log(one);
// }
// fun(one="one",two="two")

// const arr = [1, 2, 3, 4, 5];
// const obj = {one: "hello", two: "hii", three: "bye"};
// const {one,...h}=obj
// console.log(one); // Output: hello
// console.log(h); // Output: { two: 'hii', three: 'bye'

//  const fun = (string, value)=>{
//     console.log(string);
//     console.log(value); 
//  }
//  let hi= " hii hello";
//  let hello = 343
//  console.log(`${fun(`something`j`)}`) wrong