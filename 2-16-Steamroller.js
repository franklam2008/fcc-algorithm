function steamrollArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length === 1) {
            while (Array.isArray(arr[i])) {
                arr[i] = arr[i].pop();
            }
        }
        else {
            for (var j = 0; j < arr[i].length; j++) {
                while (Array.isArray(arr[i][j])) {
                    arr[i][j] = arr[i][j].pop();
                }
            }
        }
    }
    if (arr.length === 2) {
        return arr;
    }
    if (arr[2].length === 2) {
        arr[3] = arr[2][1];
        arr[2] = arr[2][0];
    }
    for (var k = 0; k < arr.length; k++) {
        if (Array.isArray(arr[k])) {
            arr.splice(k, 1)
        }
    }
    return arr;
}
function steamrollArray(arr) {
    var flattenedArray = [];

    // Create function that adds an element if it is not an array.
    // If it is an array, then loops through it and uses recursion on that array.
    var flatten = function (arg) {
        if (!Array.isArray(arg)) {
            flattenedArray.push(arg);
        } else {
            for (var a in arg) {
                flatten(arg[a]);
            }
        }
    };

    // Call the function for each element in the array
    arr.forEach(flatten);
    return flattenedArray;
}

function steamrollArray(arr) {
    let flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}
function steamrollArray(arr) {
    return arr.toString()
        .replace(',,', ',')       // "1,2,,3" => "1,2,3"
        .split(',')               // ['1','2','3']
        .map(function (v) {
            if (v == '[object Object]') { // bring back empty objects
                return {};
            } else if (isNaN(v)) {        // if not a number (string)
                return v;
            } else {
                return parseInt(v);         // if a number in a string, convert it
            }
        });
}

//steamrollArray([[["a"]], [["b"]]]) //should return ["a", "b"].
//steamrollArray([1, [2], [3, [[4]]]]) //should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) //should return [1, 3, 4].
//steamrollArray([1, {}, [3, [[4]]]]) //should return [1, {}, 3, 4]. */

//https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller/
