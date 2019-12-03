function anagrams(stringA, stringB) {
    if (!stringA || !stringB) { throw "Two input string parameters are mandatory."; return; }
    const aCharMap = buildCharMap(stringA), bCharMap = buildCharMap(stringB);
    if (Object.keys(aCharMap).length != Object.keys(bCharMap).length) return false;
    for (let char in aCharMap) { if (aCharMap[char] != bCharMap[char]) return false; }
    return true;
}
function buildCharMap(str) {
    if (!str) { return; } const charMap = {};
    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) charMap[char] = charMap[char] + 1 || 1;
    return charMap;
}

console.log(anagrams('abc', 'cba'));
console.log(anagrams('Elbow', 'Below'));