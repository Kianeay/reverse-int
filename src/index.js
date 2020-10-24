module.exports = function reverse (n) {
    n = n + "";
    let res = n.split("").reverse().join("");
    
if (res[3] === '-') {
    let result = `${res[0]}${res[1]}${res[2]}`;
    return result;
} else {
    return res;
}

}
