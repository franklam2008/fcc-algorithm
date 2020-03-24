function diffArray(arr1, arr2) {
    var newArr = [];
    
    function onlyInFirst(first, second) {
    // Looping through an array to find elements that don't exist in another array
      for (var i=0;i<first.length;i++) {
        if (second.indexOf(first[i]) === -1) {
          // Pushing the elements unique to first to newArr
          newArr.push(first[i]);
        }
      }
    }
    
    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);
    
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);



function diffArray(arr1, arr2) {
    return arr1
      .concat(arr2)
      .filter(
          item => !arr1.includes(item) || !arr2.includes(item)
      )
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);



function diffArray(arr1, arr2) {
    return arr1
      .filter(el => !arr2.includes(el))
      .concat(
        arr2.filter(el => !arr1.includes(el))
      )
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


/*diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with one item.
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with two items.
["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return an empty array.
[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
[1, 2, 3, 5], [1, 2, 3, 4, 5] should return an array with one item.
[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return an array with two items.
[], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
[], ["snuffleupagus", "cookie monster", "elmo"] should return an array with three items.
[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].
[1, "calf", 3, "piglet"], [7, "filly"] should return an array with six items.*/