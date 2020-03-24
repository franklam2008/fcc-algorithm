function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var temp = 0;
    for (var i=min; i <= max; i++){
        temp += i;
    }
  return(temp);
}

sumAll([1, 4]);


function sumAll(arr) {
    // Buckle up everything to one!
  
    // Using ES6 arrow function (one-liner)
    var sortedArr = arr.sort((a,b) => a-b);
    var firstNum = arr[0];
    var lastNum = arr[1];
    // Using Arithmetic Progression summing formula
  
    var sum = (lastNum - firstNum + 1) * (firstNum + lastNum) / 2;
    return sum;
  }



function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++){
        sum += i;
    }
  return sum;
}

sumAll([1, 4]);

/*sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45.*/