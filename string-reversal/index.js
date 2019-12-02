(() => {
    //Method-1
    if (!process.argv[2]) return false;
    if (process.argv[2].toString()) {
        console.log('1 ', process.argv[2].toString().split('').reverse().join(''));
    }

    //Method-2
    if (process.argv[2]) {
        let reversed = '';
        for (let char of process.argv[2].toString()) {
            reversed = char + reversed;
        }
        console.log('2 ', reversed);
    }

    //Method-3
    if (process.argv[2]) {
        console.log('3 ', process.argv[2].toString().split('').reduce((rev, char) => { return char + rev }, ''));
    }
})();