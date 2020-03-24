function multiplesOf3and5(number) {
  // Good luck!
  var ans=0;

  for(var i=3; i<number;i++){
    if(i%3===0||i%5===0){
      ans+=i
    }
  }


  console.log(ans);
  return true;
}

multiplesOf3and5(1000);
/*multiplesOf3and5(1000) should return 233168.

multiplesOf3and5(49) should return 543.

multiplesOf3and5(19564) should return 89301183.

Your function is not returning the correct result using our tests values.

Project Euler: Problem 1: Multiples of 3 and 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below the provided parameter value number.*/
