function nthPrime(number) {
  var arr=[]
  var i=2
  function isPrime(num) {
    var YN=true;
     for(var i = 2; i < num; i++){
        if(num % i === 0) {
          YN= false;
        }
      }
   return YN;
  }
  while(arr.length<number){
      if(isPrime(i)){
        arr.push(i);
      }
    i++;
  }

  return arr[arr.length-1];
}

function nthPrime(number) {
    var primes = [2];
    var i = 3;
    var j = 2;
    var maxPrimes = number;

    // while primes is less than the sought after number
    while ( primes.length < maxPrimes ) {
        // while i divided by j has a remainder,
        // indicating it could still be a prime
        while ( i % j !== 0 ) {
            j++;
            // if we're reached the point where j === i,
            // then it must be a prime
            if ( j === i ) {
                primes.push( i );
                break;
            }
        }

        // otherwise, increment i and reset j;
        i++;
        j = 2;

    }
 return primes[primes.length-1];

}
console.log(nthPrime(1000));
