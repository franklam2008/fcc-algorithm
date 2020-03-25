function repeatStringNumTimes(str, num) {
  if(num<0){
    return "";
  }
  let newstr=''
  for( let i=0;i<num;i++){
    newstr+=str
  }
  return newstr;
}


console.log(repeatStringNumTimes("abc", 3)
);

/**repeatStringNumTimes("*", 3) should return "***".
Passed
repeatStringNumTimes("abc", 3) should return "abcabcabc".
Passed
repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
Passed
repeatStringNumTimes("abc", 1) should return "abc".
Passed
repeatStringNumTimes("*", 8) should return "********".
Passed
repeatStringNumTimes("abc", -2) should return "".
Passed
The built-in repeat()-method should not be used*/
