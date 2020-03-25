function largestOfFour(arr) {
var temp=0;
var newarr=[arr[0][0],arr[1][0],arr[2][0],arr[3][0]]
for(var i=0;i<arr.length;i++){
  for(var j=0;j<arr[i].length;j++){
    if(arr[i][j]>newarr[i]){
      newarr[i]=arr[i][j]
    }
  }
}
console.log(arr[3][0])
console.log(newarr)

  return newarr;
}

function largestOfFour(arrs) {
  return arrs.map(arr => {
    let largestNum;
    arr.forEach(num => (num > largestNum || largestNum === undefined) ? largestNum = num : null)
    return largestNum
  })
}

console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
/**largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27, 5, 39, 1001].
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].
largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]) should return [25, 48, 21, -3].
Basic Algorithm Scripting: Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Remember to use Read-Search-Ask if you get stuck. Write your own code.*/
