var mainArray = [];
for (let x = 0; x < 10; x++) {
    mainArray.push(Math.floor(Math.random() * (10 - 0 + 1)) + 0);
}

function mergeSortTwoList(list1, list2) {
    var sortedList = [];
    while (list1.length && list2.length) {
        if (list1[0] < list2[0]) sortedList.push(list1.shift());
        else sortedList.push(list2.shift());
    }
    return sortedList.concat(list1.slice()).concat(list2.slice());
}

function splitList(list) {
    if (list.length <= 1) return list;
    var mid = Math.floor(list.length / 2);
    var start = list.slice(0, mid);
    var end = list.slice(mid);
    return mergeSortTwoList(splitList(start), splitList(end));
}

console.log(splitList(mainArray));