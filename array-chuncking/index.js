//Method-1
function chunkarray(array, size) {
    let tempArray = [];
    for (let x = 0; x < array.length;) {
        let internalArray = [];
        for (y = x; y < x + size; y++) {
            if (array[y])
                internalArray.push(array[y]);
        }
        tempArray.push(internalArray);
        x = x + size;
    }
    console.log(tempArray);
}

chunkarray([1, 2, 3, 4, 5], 3);