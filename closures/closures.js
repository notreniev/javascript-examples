var contar = (function () {
    var contador = 0;
    return function () {
        return contador += 1;
    }
})()