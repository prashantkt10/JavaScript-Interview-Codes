function fizzbuzz(lastnum) {
    if (!lastnum) return false;
    for (let num = 1; num <= lastnum; num++) {
        if (num % 3 == 0 && num % 5 == 0) return 'fizzbuzz';
        else if (num % 3 == 0) return 'fizz';
        else if (num % 5 == 0) return 'buzz';
        else return num;
    }
} console.log(fizzbuzz(15));