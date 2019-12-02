function palindrome(str) {
    if (!str || !str.length) return false;
    return str.split('').every((char, i) => {
        console.log(char, str[str.length - i - 1], i, str.length - i - 1);
        return char === str[str.length - i - 1];
    });
} console.log(palindrome(process.argv[2]));