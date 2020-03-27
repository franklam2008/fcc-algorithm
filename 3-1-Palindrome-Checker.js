// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker
function palindrome(str) {
  // Good luck!
var arr=[];
var newarr=[];
var ans=true;
str=str.replace(/[^A-Za-z0-9]/g, '')
str=str.toLowerCase();
  for(var i=0;i<str.length;i++){
  arr[i]= str[i];
  if(arr[i]!==' '){
  newarr.push(arr[i]);
  };
};

var a=newarr.length/2;
var b =0;
for(var j=0;j<a;j++){
  if(newarr[j]===newarr[newarr.length-1-j]){
    ans=true;
  }else{
    ans=false;
    break;
  };
  b+=1
};
  console.log(ans);
  
  return ans;
};
function palindrome(str) {
  const arr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase().split('')
  let reverse = [...arr].reverse()

  for (let i = 0; i < reverse.length; i++) {
    if (reverse[i] !== arr[i]) {
      return false
    }
  }

  return true
}

palindrome("A man, a plan, a canal. Panama");
palindrome("eye");


/*palindrome("eye") should return a boolean.
palindrome("eye") should return true.
palindrome("_eye") should return true.
palindrome("race car") should return true.
palindrome("not a palindrome") should return false.
palindrome("A man, a plan, a canal. Panama") should return true.
palindrome("never odd or even") should return true.
palindrome("nope") should return false.
palindrome("almostomla") should return false.
palindrome("My age is 0, 0 si ega ym.") should return true.
palindrome("1 eye for of 1 eye.") should return false.
palindrome("0_0 (: /-\ :) 0-0") should return true.
palindrome("five|\_/|four") should return false. */