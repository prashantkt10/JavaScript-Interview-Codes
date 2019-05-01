function countMaxChars(inputStr) {
    let charMap = {};
    let maxChar = '';
    let maxCharCount = 0;

    for (let char of inputStr)
        charMap[char] ? charMap[char]++ : charMap[char] = 1;

    for (let char in charMap) {
        if (charMap[char] > maxCharCount) {
            maxCharCount = charMap[char];
            maxChar = char;
        }
    }

    return [maxChar, maxCharCount];
}
if (process.argv[2])
    console.log(countMaxChars(process.argv[2].toString()));
