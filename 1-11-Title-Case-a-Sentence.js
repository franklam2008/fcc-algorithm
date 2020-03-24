function titleCase(str) {
  var newstr=str.toLowerCase().split('')
  var arr=[0]
  for(var i=0;i<str.length;i++){
    if(str[i]===" ")
    arr.push(i+1)
  }

  for(var i=0;i<arr.length;i++){
    newstr[arr[i]]=str[arr[i]].toUpperCase()
  }
  newstr=newstr.join("")
  console.log(arr)
  console.log(newstr)
  return newstr;
}

titleCase("I'm a little tea pot");
/*titleCase("I'm a little tea pot") should return a string.
titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.
titleCase("sHoRt AnD sToUt") should return Short And Stout.
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout.


Basic Algorithm Scripting: Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code.*/
