//Solution-1
function anagrams(stringA, stringB) {
    if (!stringA || !stringB) { throw "Two input string parameters are mandatory."; return; }
    const aCharMap = buildCharMap(stringA), bCharMap = buildCharMap(stringB);
    if (Object.keys(aCharMap).length != Object.keys(bCharMap).length) return false;
    for (let char in aCharMap) { if (aCharMap[char] != bCharMap[char]) return false; }
    return true;
}
function buildCharMap(str) {
    if (!str) return;
    const charMap = {}; str = str.replace(/[^\w]/g, '').toLowerCase();
    for (let char of str) { console.log('charMap[char] ', charMap[char]); charMap[char] = charMap[char] + 1 || 1; }
    return charMap;
}
console.log(anagrams('abc', 'cba'));
console.log(anagrams('Elbow', 'Below'));


//Solution-2
function anagrams2(stringA, stringB) {
    if (!stringA || !stringB) { throw "Two input string parameters are mandatory."; return; }
    return cleanString(stringA) == cleanString(stringB);
}
function cleanString(str) {
    if (!str) return;
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}
console.log(anagrams2('abc', 'cba'));
console.log(anagrams2('Elbow', 'Below'));
