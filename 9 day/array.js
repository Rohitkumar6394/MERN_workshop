// arrays 

//  let numbers=[1,3,5,6]
// numbers.forEach((index,element)=>console.log(index,element))


// let changed=numbers.map((number)=>number*number)
// console.log(changed);

// reduce 

// let sum=numbers.reduce((some,element)=>some+element)
// some=0 ,element=1
// some=15
// console.log(sum);

// some 
// let numbers=[1,3,5,6,45,78]
// let even=numbers.some((n)=>n%2==0)
// console.log(even);

// every

// let positive=numbers.every.every((n)=>n>0)
// console.log(positive);


// filter 
// let numbers=[1,3,5,6,45,-78]
// let even=numbers.filter((n)=>n%2==0)
// console.log(even);

// let greater=numbers.find((n)=>n>10)
// console.log(greater);

// findIndex

// let greater=numbers.findIndex(n=>n>10)
// console.log(greater);

// let numbers=[1,3,5,6,45,78]
// numbers.push(66)
// console.log(numbers);
// numbers.pop()
// console.log(numbers);
// numbers.unshift(0)
// console.log(numbers);

// let content=["hello","hii","world"]
// let changed=content.splice(1,1,"bye")
// console.log(content);
// content.splice(1,0,"hlo")
// console.log(content);

// let arr1=[2,4,6,7]
// let arr2=[3,34,6,7]
// let arr3=arr1.concat(arr2)
// console.log(arr3);

// find the missing from given array 
// let number=[1,2,3,4,6,7,9]
// for(i=1;i<=number.lenght+1;i++){
//    if(i==number[i-1]){
//      continue
//    }
//    else 
//     console.log(i)
//     break
// }
// find the 2 missing from given array 

// let numbers=[1,2,3,4,6,8,9]
// let missing=[]
// for(i=1;i<=numbers.length+2;i++){
//    if(!numbers.includes(i)){
//      missing.push(i)
//    }
// }
// console.log(missing);

// two sum 
// input [1,2,4,5,6,8],10 


// let numbers= [1,2,3,4,5,6,7,8,]
// const twoSum=(list,sum)=>{
//     for(let i=0;i<list.length;i++){
//         for(let j=i+1;j<list.length;j++)
//             if(list[i]+list[j]==sum){
//                 return [i,j]
//             }
//     }
//     return []
// }
// console.log(twoSum([1,2,3,4,5,6,8],10))


// move all zeros to end 
// [1,2,0,6,0,6,0]==>[1,2,6,6,0,0,0]


  // move all the zeroes to the end 
// input : [1,32,0,0,42,44,2,5,2,0]
// function moveZeroesToEnd(arr) {
//     let result = [];
//     let zeroCount = 0;
//     for (let num of arr) {
//         if (num == 0) {
//             zeroCount++;
//         } else {
//             result.push(num);
//         }
//     }
//     while (zeroCount) {
//         result.push(0);
//         zeroCount--;
//     }
//     return result;
// }

// const input = [1,32,0,0,42,44,2,5,2,0];
// console.log(moveZeroesToEnd(input));

// let maxSum=-Infinity
// let nums = [2,-4,-4,6,-5,0,-3,5,9]
// for(let i=0;i<nums.length;i++){
//     let sum = 0
//     for(j=i+1;j<nums.length;j++){
//         sum=nums[j]
//         if(maxSum<sum) maxSum=sum 
//     }
// }
// console.log(maxSum)




// arr=[1,2,3,4,]==>[4,1,2,3]
// right rotate by one place 

// let arr=[1,2,3,4,]
// const rightRotateByOne=(array) =>{
//   if (array.length === 0)
//     return array;
//   let last = array.pop();
//   array.unshift(last);
//   return array;
// }

// console.log(rightRotateByOne(arr));


// product except itself/
// [101,102,103,104,1,2,3,104,105,5,6,7] 
           


// const productExceptSelf = (arr)=>{
//   const n = arr.length;
//   const result = new Array(n).fill (1)
   

//   // calculate prefix product 
//   let prefix  = 1;
//   for (let i = 0; i < n; i++){
//     result[i] = prefix;
//     prefix *= arr[i]
//    }
//    let suffix =1;
//    for(let i = n-1; i>=0; i--) {
//     result[i] *= suffix ;
//     suffix *= arr [1];
//    }
//    return result;
//   }
//   const input = [101,102,103,104,1,2,3,104,105,5,6,7];
// console.log(productExceptSelf(input));
let n=[101,102,103,1,2,3,4,104,105,5,6,7] 
n.sort((a,b)=>(a-b))
//console.log (n);
let length=1
let maxLength=0
for(let i=1;i<n.length;i++){
  if(n[i]==n[i-1]+1){
    length++
}else length=1

if(length>maxLength){
  maxLength=length
}

}
console.log(maxLength);