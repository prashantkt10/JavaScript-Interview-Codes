function palindrome(str) {
    if (!str || !str.length) return false;
    return str.split('').every((char, i) => char === str[str.length - i - 1]);
} console.log(palindrome(process.argv[2]));