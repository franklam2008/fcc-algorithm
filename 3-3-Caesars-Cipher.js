function rot13(str) { // LBH QVQ VG!
  var arr = [];
  var newarr = [];
  var newstr = "";
  var rotf = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  var rots = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M']
  arr = str.split("");
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < 27; j++) {
      if (arr[i] === rotf[j]) {newarr[i] = rots[j];};
      if (arr[i] === " ") {newarr[i] = " ";};
      if (arr[i] === "!") {newarr[i] = "!";};
      if (arr[i] === "?") {newarr[i] = "?";};
      if (arr[i] === ".") {newarr[i] = ".";};
    };
  };
  newstr = newarr.join("");
  return newstr;
}


// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
/*rot13("SERR PBQR PNZC") should decode to FREE CODE CAMP
rot13("SERR CVMMN!") should decode to FREE PIZZA!
rot13("SERR YBIR?") should decode to FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG. */
