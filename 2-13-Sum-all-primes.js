function sumPrimes(num) {
    var ans=0;
    for(var i=2;i<=num; i++){
      if(isPrime(i)){
        ans+=i;
      }
    }
  function isPrime(num) {
    var YN=true;
     for(var i = 2; i < num; i++){
       if(num % i === 0) {
         YN= false;
       }
      }
   return YN;
  }


     return ans;
}

    sumPrimes(10);

// 2nd method if isPrime
    function isPrime(n) {
      return !(Array(n + 1).join(1).match(/^1?$|^(11+?)\1+$/));
    }

  /**sumPrimes(10) should return a number.
sumPrimes(10) should return 17.
sumPrimes(977) should return 73156. */
