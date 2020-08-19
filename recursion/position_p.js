var chars = '123';

// function checkAndAppendValidData(pre, next, result) {
//     let x = pre.concat(next);
//     let y = next.concat(pre);
//     if (!(result.some(el => el === x))) {
//         result.push(x);
//     }
//     if (!(result.some(el => el === y))) {
//         result.push(y);
//     }
// }

function posRecursion(chars) {
    var result = [];
    var fn = function (key, s) {
        if (!s.length) {
            result.push(key);
            console.log(s);
        }
        for (var i = 0, splitS = s.split(""); i < s.length; i++) {
            // console.log(s);
            fn(key + s[i], splitS.filter((_, j) => j !== i).join(""));
        }
    }
    fn('', chars);
    return result;
}

console.log(posRecursion(chars));
