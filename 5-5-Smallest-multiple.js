function smallestMult(n) {
  var i=1;
  var tf=false;
  while(tf===false){
    var itest=true;
    for(var j=1;j<=n;j++){
      if(i%j!==0){itest=false;break;}
      if(itest===false){break;}
    }
    if(itest===true){console.log(i);return i;}
    i++;
  }
}
smallestMult(20);

/**smallestMult(5) should return 60.
smallestMult(10) should return 2520.
smallestMult(20) should return 232792560.

Project Euler: Problem 5: Smallest multiple
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20? */
