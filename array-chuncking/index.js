//Method - 1
function chunkArray(array, size) {
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

chunkArray([1, 2, 3, 4, 5], 3);



//Method - 2
function chunkArray(array, size) {
    let chunked = [];

    for (let element of array) {
        const last = chunked[chunked.length - 1];

        if (!last || last.length === size)
            chunked.push([element]);
        else
            last.push(element);
    }
    console.log(chunked);
    return chunked;
}

chunkArray([1, 2, 3, 4, 5], 4);



//Method-3
function chunkArray(array, size) {
    const chunked = [];
    let index = 0;

    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }
    console.log(chunked);
}

chunkArray([1, 2, 3, 4, 5], 4);