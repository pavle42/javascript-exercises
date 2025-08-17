const fibonacci = function(num) {
    if (num == 0) return 0;
    if (num < 0) return "OOPS";

    let lastTwo = [1, 1];
    let current = 1;

    for (let i = 2; i < num; i++) {
        current = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1];
        lastTwo[1] = current;
    }

    return current;
};

// Do not edit below this line
module.exports = fibonacci;
