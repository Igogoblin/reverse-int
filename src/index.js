module.exports = function reverse(n) {
    // if (n < 0) {
    //     let a = n * -1;
    //     return Number(a.toString().split("").reverse().join(""));
    // }
    return n < 0
        ? +(n * -1).toString().split("").reverse().join("")
        : +n.toString().split("").reverse().join("");
};
