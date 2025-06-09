function findSecondLargest(arr) {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return firstLargest + " " + secondLargest;
}

const result = findSecondLargest([0, 2, 44, 5, 78, 72, 22]);
console.log(result);
