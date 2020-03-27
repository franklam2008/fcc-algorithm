function dropElements(arr, func) {
    var newarr=[]
    for(var i=0;i<arr.length;i++){
      if(!func(arr[i])){
        arr.splice(i,1," ");
      }else{
        break;
      }
    }
    for(var j=arr.length-1;j>=0;j--){
      if(arr[j]===" "){
        arr.splice(j,1);
      }
    }
    console.log(func(3))
    // Drop them elements.
    return arr;
}

//dropElements([1, 2, 3], function (n) { return n < 3; });
//dropElements([1, 2, 3, 4], function(n) {return n >= 3;})// should return [3, 4].
//dropElements([0, 1, 0, 1], function(n) {return n === 1;})// should return [1, 0, 1].
//dropElements([1, 2, 3], function(n) {return n > 0;})// should return [1, 2, 3].
dropElements([1, 2, 3, 4], function(n) {return n > 5;})// should return [].
//dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) //should return [7, 4].
//dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) //should return [3, 9, 2]. */
//https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it/