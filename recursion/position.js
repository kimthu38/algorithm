var chars = '123';

function checkAndAppendValidData(pre, next, result) {
    let x = pre.concat(next);
    let y = next.concat(pre);
    if (!(result.some(el => el === x))) {
        result.push(x);
    }
    if (!(result.some(el => el === y))) {
        result.push(y);
    }
}

function posRecursion(chars) {
    var result = [];
    var fn = function (key, s) {
        checkAndAppendValidData(key, s, result);
        for (var i = 0; i < s.length; i++) {
            fn(key.concat(s[i]), s.replace(s[i],''));
        }
    }
    fn('', chars);
    return result;
}

console.log(posRecursion(chars));
