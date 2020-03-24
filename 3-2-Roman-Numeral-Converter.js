//1	5	10	50	100	500	1000
//I	V	 X 	L	  C   D  	M
//https://www.rapidtables.com/convert/number/how-number-to-roman-numerals.html
// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter
// https://www.youtube.com/watch?v=zITidWBRzls answer
//ans 1,2
//ANS 1
function convertToRoman(num) {
 var str="";

for(var i=0;i<10; i++){
  if(num>=1000){str+="M";num-=1000;};
  if(num>=900&&num<1000){str+="CM";num-=900;};
  if(num>=500&&num<900){str+="D";num-=500;};
  if(num>=400&&num<500){str+="CD";num-=400;};
  if(num>=100&&num<400){str+="C";num-=100;};
  if(num>=90&&num<100){str+="XC";num-=90;};
  if(num>=50&&num<90){str+="L";num-=50;};
  if(num>=40&&num<50){str+="XL";num-=40;};
  if(num>=10&&num<40){str+="X";num-=10;};
  if(num>=9&&num<10){str+="IX";num-=9;};
  if(num>=5&&num<10){str+="V";num-=5;};
  if(num>=4&&num<5){str+="IV";num-=4;};
  if(num>=1&&num<4){str+="I";num-=1;};
};
return str;
};

convertToRoman(36);

//ANS 2
function convertToRoman(num){
  var roman="";
  var romanNumeral=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
  var numbers = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
  for(var i=0; i<numbers.length; i++){
    while(num>=numbers[i]){
      roman= roman+romanNumeral[i];
      num=num-numbers[i];
    }
  }
  return roman;
}
convertToRoman(36);
//.....reverse
function fromRoman(str) {
  var result = 0;
  // the result is now a number, not a string
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  for (var i = 0;i<=decimal.length;i++) {
    while (str.indexOf(roman[i]) === 0){
      result += decimal[i];
      str = str.replace(roman[i],'');
    }
  }
  return result;
}
