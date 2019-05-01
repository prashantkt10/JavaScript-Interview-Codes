function reverseInt(num) {
    if (parseInt(num) < 0) {
        return parseInt(num.toString().split('').reverse().join(''));
    }
    return parseInt(num.toString().split('').reverse().join(''));
}

if (process.argv[2])
    console.log(reverseInt(process.argv[2]));