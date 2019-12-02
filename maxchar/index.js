function countMaxChars(inputStr) {
    if (!inputStr) return false;
    let charMap = {}, maxChar = '', maxCharCount = 0;
    for (let char of inputStr)
        charMap[char] ? charMap[char]++ : charMap[char] = 1;
    for (let char in charMap) {
        if (charMap[char] > maxCharCount) {
            maxCharCount = charMap[char];
            maxChar = char;
        }
    } return [maxChar, maxCharCount];
} console.log(countMaxChars(process.argv[2]));