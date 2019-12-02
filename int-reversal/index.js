function reverseInt(num) {
    if (!num) return false;
    if (parseInt(num) < 0) {
        return parseInt(num.toString().split('').reverse().join(''));
    } return parseInt(num.toString().split('').reverse().join(''));
} console.log(reverseInt(process.argv[2]));