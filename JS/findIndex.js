function findIndex(arr, x) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == x) {
            return i;
        }

        return -1;
    }
}


const result = findIndex([2, 8, 6, 3, 9], 2);
console.log(result);