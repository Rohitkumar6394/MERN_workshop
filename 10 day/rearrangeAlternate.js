// 2.(rearrangeAlternate([1, 3, -4, 5, -6, -2]));
// Output: [1, -4, 3, -6, 5, -2]

function rearrangeAlternate(arr) {
    let pos = [];
    let neg = [];
    for (let num of arr) {
        if (num >= 0) pos.push(num);
        else neg.push(num);
    }
    let result = [];
    let i = 0, j = 0;
    while (i < pos.length && j < neg.length) {
        result.push(pos[i++]);
        result.push(neg[j++]);
    }
    // Add remaining elements (if any)
    while (i < pos.length) result.push(pos[i++]);
    while (j < neg.length) result.push(neg[j++]);
    return result;
}

console.log(rearrangeAlternate([1, 3, -4, 5, -6, -2])); // [1, -4, 3, -