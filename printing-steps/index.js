//Solution-1
function steps(n) {
    if (!n || Number(n) == 'NaN') return;
    for (let x = 1; x <= n; x++) {
        console.log('#'.repeat(x) + ' '.repeat(n - x));
    }
} steps(12);