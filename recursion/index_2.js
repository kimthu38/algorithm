     var arr = [1, 3, 9, 2, 4, 10];

     function checkAndAppendValidData(pre, result) {
        if (pre.reduce((a, b) => Number(a) + Number(b), 0) === 15) {
            console.log(pre, "<============");
            // check exist
            if (!(result.some(el => el.sort().join("") === pre.sort().join("")))) {
                result.push(pre);
            }
        }
     }

    function sumRecursionString(chars) {
        var result = [];
        var f = function (pre, arr) {
           checkAndAppendValidData(pre, result);
            for (var i = 0; i < arr.length; i++) {
               checkAndAppendValidData(pre, result);
                f(pre.concat(arr[i]), arr.slice(i + 1));
            }
            

        }
        f([], chars);
        return result;
    }

    console.log(sumRecursionString(arr));
