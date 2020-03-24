function largestPrimeFactor(number) {
  // Good luck!
  var num=7000

  var ans=0
  var arr=[]

  for(var i=2;i<=num; i++){

    if(isPrime(i)){
      if(number%i===0){
        number=number/i
        arr.push(i)
      }
    }
  }


  function isPrime(n) {
  return !(Array(n + 1).join(1).match(/^1?$|^(11+?)\1+$/));
}

  console.log(arr)
  console.log(number)
  return arr[arr.length-1];
}


function largestPrimeFactor(number) {
  // Good luck!
var target = number;
var i = 2;
while(i<target) {
	while(target%i === 0) {
		(function(newtarget) {
      console.log(newtarget);
			target = newtarget;
		})
    (target / i)
	}
	i++;
}
console.log(target);
return target
}

function largestPrimeFactor(number) {
  // Good luck!
var target = number;
var i = 2;
while(i<target) {
	while(target%i === 0) {
    target= target / i;
	}
	i++;
}
console.log(target);
return target
}
largestPrimeFactor(600851475143);

/*largestPrimeFactor(2) should return 2.
largestPrimeFactor(3) should return 3.
largestPrimeFactor(5) should return 5.
largestPrimeFactor(7) should return 7.
largestPrimeFactor(13195) should return 29.
largestPrimeFactor(600851475143) should return 6857.


Project Euler: Problem 3: Largest prime factor
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/
