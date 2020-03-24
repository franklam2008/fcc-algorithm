function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    var oarr1=[]
    var oarr2=[]
    var oarr3=[]
    for(var i=0;i<arr1.length;i++){oarr1.push(arr1[i][1]) }
    for(var i=0;i<arr2.length;i++){oarr2.push(arr2[i][1])}

    for(var i=0;i<arr1.length;i++){
      for(var j=0;j<arr1.length;j++){
        if(oarr2[i]===oarr1[j]){
          arr1[j][0]+=arr2[i][0];
          arr2[i]=null
        }
      }
    }
    for(var i=0;i<arr2.length;i++){
      if(arr2[i]!==null){
        arr1.push(arr2[i])
      }
    }
    console.log(oarr1)
    console.log(oarr2)
    console.log(oarr3)
    console.log(arr2)
    return arr1.sort(function (a, b) {
        if (a[1] > b[1]) {
            return 1;
        }
        if (a[1] < b[1]) {
            return -1;
        }
        return 0;
    });;
}

function updateInventory(arr1, arr2) {

  // Variable for location of product
  var index;

  // A helper method to return the index of a specified product (undefined if not found)
  var getProductIndex = function (name) {
      for (var i = 0; i < this.length; i++) {
          if (this[i][1] === name) {
              return i;
          }
      }
      return undefined;
  }

  // For each item of the new Inventory
  for (var i = 0; i < arr2.length; i++) {

      // Invoke our helper function using arr1 as this
      index = getProductIndex.call(arr1, arr2[i][1]);

      // If the item doesn't exist
      if (index === undefined) {
          // Push the entire item
          arr1.push(arr2[i]);
      } else {
          // Add the new quantity of the current item
          arr1[index][0] += arr2[i][0];
      }

  }

  // Sort alphabetically, by the product name of each item
  arr1.sort(function (a, b) {
      if (a[1] > b[1]) {
          return 1;
      }
      if (a[1] < b[1]) {
          return -1;
      }
      return 0;
  });

  return arr1;
}
function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!

  var index;
  var arrCurInvName = []; // Names of arr1's items
  var arrNeInvName = []; // Names of arr2's items

  // Same as using two for loops, this takes care of increasing the number of stock quantity.
  arr1.map(function(item1) {
    return arr2.map(function(item2) {
      if (item1[1] === item2[1]) {
        item1[0] = item1[0] + item2[0]; //Increase number of stock
      }
    });
  });

  // Get item's name for new Inventory
  arr2.map(function(item) {
    arrNeInvName.push(item[1]);
  });

  // Get item's name for Current Inventory
  arr1.map(function(item) {
    arrCurInvName.push(item[1]);
  });

  // Add new inventory items to current inventory.
  arrNeInvName.map(function(item) {
    if (arrCurInvName.indexOf(item) === -1) {
      index = arrNeInvName.indexOf(item);
      arr1.push(arr2[index]);
    }
  });

  // Sort the array alphabetically using the second element of the array as base.
  arr1.sort(function(currItem, nextItem) {

    //Ternary function to avoid using if else
    return currItem[1] > nextItem[1] ? 1 : -1;
  });

  return arr1;
}

function updateInventory(arr1, arr2) {
  var flag = 0;
  arr2.forEach(function(item) {
    flag = 0;
    arr1.forEach(function(list) {
      // If the product is already present, increase the quantity
      if(item[1] === list[1]) {
        list[0] += item[0];
        flag = 1;
      }
    });
    //If not already present, add the product
    if(flag === 0)
      arr1.push(item);
  });

  //Return the sorted inventory in alphabetical order by product name
  return arr1.sort(function(a, b) {
    return a[1] > b[1] ? 1 : -1;
  });
}

// Example inventory lists

//The function updateInventory should return an array.
//updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) //should return an array with a length of 6.
//updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) //should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].
//updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []) //should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].
updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) //should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].
//updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]])// should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].