function reverse(num) { if (!num) { return; } return num.toString().split('').reverse().join(''); }
function reverseInt(num) {
    if (!num) return false;
    if (parseInt(num) < 0) return parseInt(reverse(num));
    return parseInt(reverse(num));
}
console.log(reverseInt(process.argv[2]));