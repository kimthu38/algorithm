var chars = '123';

function checkAndAppendValidData(pre, next, result) {
    // if (s.length) {
    //     for (var i = 0; i < s.length; i++) {
    let x = pre.concat(next);
    let y = next.concat(pre);
    if (!(result.some(el => el === x))) {
        result.push(x);
    }
    if (!(result.some(el => el === y))) {
        result.push(y);
    }
    console.log(x, y);
    //     }
    // }
}

function sumRecursionString(chars) {
    var result = [];
    var fn = function (key, s) {
        checkAndAppendValidData(key, s, result);
        // s = chars;
        for (var i = 0; i < s.length; i++) {
            // checkAndAppendValidData(key, s.replace(key, ''), result);
            // console.log(s[i], s.replace(s[i], ''));
            // checkAndAppendValidData(s[i], s.replace(s[i], ''), result);
            // console.log(s[i]);

            // let x = s[i].concat(s.replace(s[i],''));
            // let y = s.replace(s[i],'').concat(s[i]);
            // if (!(result.some(el => el === x))) {
            //     result.push(x);
            // }
            // if (!(result.some(el => el === y))) {
            //     result.push(y);
            // }
            // console.log(x,y);
            // var fn = function(key, s)
            fn(key.concat(s[i]), s.replace(s[i],''));

            // if (!key) {
            //     result.push(s);
            // }
            // if (result.indexOf(key.concat(fn(s[0], s.replace(s[0], ''))) < 0)) {
            //     result.push(key.concat(fn(s[0], s.replace(s[0], ''))));
            // }

        }
    }
    fn('', chars);
    return result;
}

console.log(sumRecursionString(chars));
