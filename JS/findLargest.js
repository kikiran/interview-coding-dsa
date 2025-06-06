function findLarget(arr) {
    let largest = -Infinity;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }

    return largest;
}

const result = findLarget([10, 4, 33, -89, 89, 333])
console.log(result);