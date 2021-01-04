var list1 = [1, 2, 4, 5, 6, 8, 9, 11, 15], list2 = [1, 3, 4, 5, 6, 9, 14, 19, 22];
var pointer1 = 0, pointer2 = 0;
var sortedList = [];

while (true) {
    if (list1[pointer1] == list2[pointer2]) {
        sortedList.push(list1[pointer1]);
        pointer1 += 1;
        pointer2 += 1
    }
    else if (list1[pointer1] < list2[pointer2]) {
        sortedList.push(list1[pointer1]);
        pointer1 += 1;
    }
    else if (list2[pointer2] < list1[pointer1]) {
        sortedList.push(list2[pointer2]);
        pointer2 += 1;
    }
    else break;
}

console.log('sortedList: ', sortedList);