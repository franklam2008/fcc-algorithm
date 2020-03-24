//https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator/
function telephoneCheck(str) {
  // Good luck!
  var num = str
  var arr = [];
  var newstr = "";
  var ans = false;
  var exp = /(1)?(\(\d{3}\)|\d{3})(-)?(\d{3})(-)?(\d{4})/g;
  num = num.replace(/(\s)/g, '');
  if (exp.test(num)) {
    console.log(num);
    return true
  }
  arr = num.split("");

  console.log(num);
  console.log(arr);
  return ans;
};

telephoneCheck("555 555-5555");
// above working still!~ comeplete for half 

// ans below
function telephoneCheck(str) {
  // Good luck!
  var num = str
  var arr = [];
  var newstr = "";
  var ans = true;
  num = num.replace(/[^0-9()-?]/g, '')
  arr = num.split("");
  if (arr[0] === '-') { ans = false; }
  if (arr[0] === '1') { arr.shift(); }
  if (arr[0] === '(') {
    if (arr[4] !== ')') {
      ans = false;
    }
  } else if (arr[3] === ')') {
    ans = false;
  };
  newstr = arr.join("");
  var newstr1 = newstr.replace(/[^0-9?]/g, '')
  if (newstr1.length !== 10) {
    ans = false;
  };
  console.log(newstr)
  return ans;
};

function telephoneCheck(str) {
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}

function telephoneCheck(str) {
  var re = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})$/;
  return re.test(str);
}

/*telephoneCheck("555-555-5555") should return a boolean.
telephoneCheck("1 555-555-5555") should return true.
telephoneCheck("1 (555) 555-5555") should return true.
telephoneCheck("5555555555") should return true.
telephoneCheck("555-555-5555") should return true.
telephoneCheck("(555)555-5555") should return true.
telephoneCheck("1(555)555-5555") should return true.
telephoneCheck("555-5555") should return false.
telephoneCheck("5555555") should return false.
telephoneCheck("1 555)555-5555") should return false.
telephoneCheck("1 555 555 5555") should return true.
telephoneCheck("1 456 789 4444") should return true.
telephoneCheck("123**&!!asdf#") should return false.
telephoneCheck("55555555") should return false.
telephoneCheck("(6054756961)") should return false
telephoneCheck("2 (757) 622-7382") should return false.
telephoneCheck("0 (757) 622-7382") should return false.
telephoneCheck("-1 (757) 622-7382") should return false
telephoneCheck("2 757 622-7382") should return false.
telephoneCheck("10 (757) 622-7382") should return false.
telephoneCheck("27576227382") should return false.
telephoneCheck("(275)76227382") should return false.
telephoneCheck("2(757)6227382") should return false.
telephoneCheck("2(757)622-7382") should return false.
telephoneCheck("555)-555-5555") should return false.
telephoneCheck("(555-555-5555") should return false.
telephoneCheck("(555)5(55?)-5555") should return false. */

//https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-validate-us-telephone-numbers/16090/18
// Ans above