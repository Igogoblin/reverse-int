module.exports = function reverse(n) {
    if (n < 0) {
        let a = n * -1;
        return Number(a.toString().split("").reverse().join(""));
    }
    return Number(n.toString().split("").reverse().join(""));
};
