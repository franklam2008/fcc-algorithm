function findElement(arr, func) {
  let num = 0;
  for(var i=0;i<arr.length;i++){
    if(func(arr[i])){
      return arr[i]
    }
  }
  return undefined;
}
function findElement(arr, func) {
  let ans;
  arr.forEach(num => {(func(num) && ans === undefined) ? ans = num : null })
  return ans
}
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });
/**findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.
Basic Algorithm Scripting: Finders Keepers
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.*/
