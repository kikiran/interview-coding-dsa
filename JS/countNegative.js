function findNegative(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      return i;
    }

    return "No Negative";
  }
}

const result = findNegative([2, 8, 6, 3, 9]);
console.log(result); 
 