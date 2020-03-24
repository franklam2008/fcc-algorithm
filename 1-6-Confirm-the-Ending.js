function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var newstr=''
  target=target.split('').reverse().join('')
  for(var i=0;i<target.length;i++){
    newstr+=str[str.length-1-i]
  }
  console.log(str[str.length-1])
  console.log(target.length)
  console.log(target)
  console.log(newstr)
  return newstr===target;
}
function confirmEnding(string, target) {
  // Step 1. Use the substr method
  if (string.substr(-target.length) === target) {

  // What does "if (string.substr(-target.length) === target)" represents?
  // The string is 'Bastian' and the target is 'n'
  // target.length = 1 so -target.length = -1
  // if ('Bastian'.substr(-1) === 'n')
  // if ('n' === 'n')

  // Step 2. Return a boolean (true or false)
    return true;
  } else {
    return false;
  }
}

confirmEnding("Open sesame", "same");
/*
confirmEnding("Bastian", "n") should return true.
confirmEnding("Congratulation", "on") should return true.
confirmEnding("Connor", "n") should return false.
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
confirmEnding("He has to give me a new name", "name") should return true.
confirmEnding("Open sesame", "same") should return true.
confirmEnding("Open sesame", "pen") should return false.
confirmEnding("Open sesame", "game") should return false.
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
confirmEnding("Abstraction", "action") should return true.
Do not use the built-in method .endsWith() to solve the challenge.


Basic Algorithm Scripting: Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

Remember to use Read-Search-Ask if you get stuck. Write your own code.*/
