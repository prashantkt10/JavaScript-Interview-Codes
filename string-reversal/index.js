(() => {
    //Method-1
    if (process.argv[2].toString()) {
        console.log(process.argv[2].toString().split('').reverse().join(''));
        // debugger;
    }

    // debugger;
    //Method-2
    if (process.argv[2]) {
        let reversed = '';

        for (let char of process.argv[2].toString()) {
            console.log(reversed);
            // console.log(char);
            reversed = char + reversed;
        }
        console.log(reversed);
    }

    //Method-3
    if (process.argv[2]) {
        console.log(process.argv[2].toString().split('').reduce((rev, char) => { return char + rev }, ''));
    }
})();