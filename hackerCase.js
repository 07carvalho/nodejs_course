
function doHackerCase(str) {
    return str
        .replace(/a/ig, '4')
        .replace(/e/ig, '3')
        .replace(/t/ig, '7')
        .replace(/s/ig, '5')
        .replace(/o/ig, '0')
        .replace(/i/ig, '1')
        .replace(/z/ig, '2').toUpperCase();
}

module.exports = {
    doHackerCase
}