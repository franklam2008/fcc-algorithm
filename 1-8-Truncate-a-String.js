function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (num >= str.length) {
    return str;
  }
  var arr = "";
  arr = str.split("");
  var newstr = "";
  for (var i = 0; i < num; i++) {
    newstr += arr[i];
  }

  console.log(arr);
  newstr += "...";
  return newstr;
}
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length <= num) return str
  return str.substr(0, 8).concat('...');
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);
/*truncateString("A-tisket a-tasket A green and yellow basket", 8) should return "A-tisket...".
truncateString("Peter Piper picked a peck of pickled peppers", 11) should return "Peter Piper...".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-", 1) should return "A...".
truncateString("Absolutely Longer", 2) should return "Ab...".
Basic Algorithm Scripting: Truncate a String
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Remember to use Read-Search-Ask if you get stuck. Write your own code.*/
