//Solution-1
function capitalize(str) {
    if (!str) { throw "One input expected"; return; } let words = [];
    for (let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    } return words.join(' ');
}
console.log(capitalize('jack john'));

//Solution-2
function capitalize2(str) {
    if (!str) return;
    let result = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] == ' ') result += str[i].toUpperCase();
        else result += str[i];
    } return result;
}
console.log(capitalize2('jack john'));