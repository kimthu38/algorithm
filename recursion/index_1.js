 var arr = [1, 3, 9, 2, 4, 10];


function sumRecursion(array) {
    var result = [];
    var f = function (pre, arr) {
        for (var i = 0; i < arr.length; i++) {
            if (pre.length > 0) {
                if (pre.concat(arr[i]).reduce((a, b) => Number(a) + Number(b)) == 15) {
                    // check exist
                    if (!result.some(el => el.sort().join("") === pre.sort().join(""))) {
                        result.push(pre.concat(arr[i]));
                    }
                }
            }
            f(pre.concat(arr[i]), arr.slice(i + 1));
        }
    }
    f([], array);
    return result;
}


console.log(sumRecursion(arr));
