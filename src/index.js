module.exports = function reverse (n) {
    var v = Math.abs(n);
    v = String(v).split('').reverse().map(Number);
    return v.join('');
}
