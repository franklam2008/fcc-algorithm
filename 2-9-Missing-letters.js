function fearNotLetter(str) {
    var arr = str.split("");
    var ans = '';
    var check = "abcdefghijklmnopqrstuvwxyz";
    var checkarr = check.split("");
    var first = check.indexOf(arr[0]);
    var last = check.indexOf(arr[arr.length - 1]);
    var newarr = [];
    for (var i = 0; i <= last - first; i++) {
        newarr.push(checkarr[first + i]);
    }
    for (var j = 0; j < newarr.length; j++) {
        for (var k = 0; k < arr.length; k++) {
            if (newarr[j] === arr[k]) { newarr.splice(j, 1); }
        }
    }
    if (newarr.length !== 0) { ans = newarr.toString(); }
    else { ans = undefined; }
    return ans;
};

function fearNotLetter(str) {

    for (var i = 0; i < str.length; i++) {
        /* code of current character */
        var code = str.charCodeAt(i);

        /* if code of current character is not equal to first character + no of iteration
        hence character has been escaped */
        if (code !== str.charCodeAt(0) + i) {

            /* if current character has escaped one character find previous char and return */
            return String.fromCharCode(code - 1);
        }
    }
    return undefined;
}

// Adding this solution for the sake of avoiding using 'for' and 'while' loops.
// See the explanation for reference as to why. It's worth the effort.

function fearNotLetter(str) {
    var compare = str.charCodeAt(0), missing;

    str.split('').map(function (letter, index) {
        if (str.charCodeAt(index) == compare) {
            ++compare;
        } else {
            missing = String.fromCharCode(compare);
        }
    });

    return missing;
}
function fearNotLetter(str) {
    var allChars = '';
    var notChars = new RegExp('[^' + str + ']', 'g');

    for (var i = 0; allChars[allChars.length - 1] !== str[str.length - 1]; i++)
        allChars += String.fromCharCode(str[0].charCodeAt(0) + i);

    return allChars.match(notChars) ? allChars.match(notChars).join('') : undefined;
}

//fearNotLetter("abce") //should return "d".
//fearNotLetter("abcdefghjklmno") //should return "i".
//fearNotLetter("stvwx") //should return "u".
fearNotLetter("bcdf") //should return "e".
//fearNotLetter("abcdefghijklmnopqrstuvwxyz") //should return undefined.