function addTogether() {
  var ans = 0;
  var arr = [];
  var kk = 0
  var jj = 0
  if (arguments.length === 1) {
    kk = arguments[0]
    if (typeof kk !== 'number') { return undefined }
    return function (num) {
      jj = num;
      if (typeof jj !== 'number') { return undefined }
      return kk + jj;
    }
  }
  for (var i = 0; i < arguments.length; i++) {
    arr[i] = arguments[i]
    if (typeof arr[i] !== 'number') { return undefined }
    ans += arr[i]
  };

  console.log(arguments.length)
  console.log(arr)
  console.log(kk)
  console.log(jj)
  return ans;
}

function addTogether() {
  var args = new Array(arguments.length);
  //Storing the arguments in an array
  for (var i = 0; i < args.length; ++i) {
    args[i] = arguments[i];
  }
  //Check for the arguments length
  if (args.length == 2) {
    //If there are two arguments,check for the type of both arguments
    //Use typeof to check the type of the argument(both should be numbers)
    if (typeof args[0] !== 'number' || typeof args[1] !== 'number') {
      return undefined;
    }
    return args[0] + args[1];
  }
  //When only one argument is provided
  if (args.length == 1) {
    a = args[0];
    //Check the  argument using typeof 
    if (typeof a !== 'number') {
      return undefined;
    }
    else {
      //Making use of closures 
      return function (b) {
        //Checking the second argument 
        if (typeof b !== 'number') {
          return undefined;
        }
        else
          return a + b;
      };
    }
  }
}

//jshint esversion: 6
function addTogether() {
  var args = Array.from(arguments);
  return args.some(n => typeof n !== 'number') ?
    undefined :
    args.length > 1 ?
      args.reduce((acc, n) => acc += n, 0) :
      (n) => typeof n === "number" ?
        n + args[0] :
        undefined;
}


//addTogether(2, 3) //should return 5.
addTogether(2)(3) //should return 5.
  //addTogether("http://bit.ly/IqT6zt") //should return undefined.
  //addTogether(2, "3") //should return undefined.
  //addTogether(2)([3]) //should return undefined.*/
