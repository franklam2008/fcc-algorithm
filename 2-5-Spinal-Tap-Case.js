function spinalCase(str) {
  var arr = str.split("");
  var newstr = arr[0];
  var reg = /[A-Z]/
  var reg2 = /[a-z]/
  for (var i = 1; i < arr.length; i++) {
    if (reg.test(arr[i]) && reg2.test(arr[i - 1])) { newstr += "-" }
    newstr += arr[i]
  }
  return newstr.replace(/\s|_/g, '-').toLocaleLowerCase();;
}

function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace space and underscore with -
  return str.replace(regex, '-').toLowerCase();
}

function spinalCase(str) {
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  // Split on whitespace and underscores and join with dash
  return str.toLowerCase().split(/(?:_| )+/).join('-');
}


function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
}
// test here

spinalCase("This Is Spinal Tap") //should return "this-is-spinal-tap".
//spinalCase("thisIsSpinalTap") //should return "this-is-spinal-tap".
//spinalCase("The_Andy_Griffith_Show") //should return "the-andy-griffith-show".
//spinalCase("Teletubbies say Eh-oh") //should return "teletubbies-say-eh-oh".
//spinalCase("AllThe-small Things")// should return "all-the-small-things".
