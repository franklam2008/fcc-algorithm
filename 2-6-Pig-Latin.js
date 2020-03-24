function translatePigLatin(str) {
  var arr=str.split("");
  var newstr="";
  var regex = /[aeiou]/g;
  var vowel = arr[0].match(regex);
  if (vowel !== null) {
    str+="way";
    return str;
  };
  for(var i=0;i<arr.length;i++){
    arr[arr.length-1]=arr.shift();
    vowel = arr[0].match(regex);
    if(vowel !== null){
      break;};
  }
  newstr=arr.join("")
  newstr+="ay";
  return newstr;
}
function translatePigLatin(str) {
  // Create variables to be used
  var pigLatin = '';
  var regex = /[aeiou]/gi;

  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + 'way';

  } else {

    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }

  return pigLatin;
}
  
function translatePigLatin(str) {
  function check(obj) {
      return ['a','i','u','e','o'].indexOf(str.charAt(obj)) == -1 ? check(obj + 1) : obj;
  }

  return str.substr(check(0)).concat((check(0) === 0 ? 'w' : str.substr(0, check(0))) + 'ay');
}
  //translatePigLatin("consonant");
  
  translatePigLatin("california") //should return "aliforniacay".
  //translatePigLatin("paragraphs") //should return "aragraphspay".
  //translatePigLatin("glove") //should return "oveglay".
  //translatePigLatin("algorithm") //should return "algorithmway".
  //translatePigLatin("eight") //should return "eightway".
  //Should handle words where the first vowel comes in the end of the word.
  //Should handle words without vowels.