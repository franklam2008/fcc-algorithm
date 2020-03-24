//https://www.freecodecamp.org/forum/t/freecodecamp-algorithm-challenge-guide-sorted-union/16077
function uniteUnique(arr) {
    var ans = [];
    var counts = 0;
    var a1 = arguments[0];
    var newarr = [];
    for (var i = 0; i < arguments.length; i++) {
        newarr = newarr.concat(arguments[i]);
    };
    for (var k = newarr.length - 1; k >= 0; k--) {
        counts += 1;
        for (var j = 0; j < a1.length; j++) {
            if (newarr[k] === a1[j]) {
                newarr.splice(k, 1);
            }
        }
    }
    ans = a1.concat(newarr);

    console.log(arguments[3]);
    console.log(a1);
    console.log(newarr);
    console.log(ans);
    return ans;
};

//jshint esversion:6

function uniteUnique(arr) {

  //make an array out of arguments and flatten it (using the spread operator)
  const args = [].concat(...arguments);

  // create a Set
  return [...new Set(args)];
}

// test here

function uniteUnique() {
  var concatArr = [];
  var i = 0;
  while (arguments[i]){
    concatArr = concatArr.concat(arguments[i]); i++;
  }
  uniqueArray = concatArr.filter(function(item, pos) {
    return concatArr.indexOf(item) == pos;
  });
  return uniqueArray;
}

// test here

//uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) //should return [1, 3, 2, 5, 4].
//uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) //should return [1, 3, 2, [5], [4]].
//uniteUnique([1, 2, 3], [5, 2, 1]) //should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) //should return [1, 2, 3, 5, 4, 6, 7, 8].
