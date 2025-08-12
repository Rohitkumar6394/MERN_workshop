function evenSumPairs(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if ((arr[i] + arr[j]) % 2 === 0) {
                res.push([arr[i], arr[j]]);
            }
        }
    }
    return res;
}

console.log(evenSumPairs([1, 2, 3, 4])); // [[1, 3], [2, 4]]