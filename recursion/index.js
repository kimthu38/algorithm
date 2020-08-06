const arr = [1, 3, 9, 2, 4, 10];


function sumRecursionString(chars) {
    var result = [];
    var f = function (pre, arr) {
        for (var i = 0; i < arr.length; i++) {
            // pre = (pre +',' + arr[i]);
            let tmp = (pre + ',' + arr[i]).split(',');
            console.log(tmp);
            if (tmp.reduce((a, b) => Number(a) + Number(b)) == 15) {
                result.push(tmp);
            }
            f(pre + ',' + arr[i], arr.slice(i + 1));
        }
    }
    f('', chars);
    return result;
}

function sumRecursionNumber(chars) {
    var result = [];
    var f = function (pre, arr) {
        for (var i = 0; i < arr.length; i++) {
            // let tmp = (pre +','+ arr[i]).split(',');
            console.log(pre);
            let a = [...pre.push(arr[i])]
            ;
            console.log(pre);
            if (a && a.length && a.reduce((a, b) => Number(a) + Number(b)) == 15) {
                result.push(a);
            }
            f(a, arr.slice(i + 1)).bind(pre);
        }
    }
    f([], chars);
    return result;
}

// console.log(sumRecursionString(arr));
console.log(sumRecursionNumber(arr));
