function sumSquareDifference(number) {
  // Good luck!
  var ans=0
  var firstsum=0
  var secondsum=0
  for(var i=1;i<=number;i++){
    firstsum+=Math.pow(i,2)
    secondsum+=i
  }
  secondsum=Math.pow(secondsum,2)
  console.log(firstsum,secondsum)
  console.log(Math.pow(1,2))
  return secondsum-firstsum;
}

sumSquareDifference(10);
/*sumSquareDifference(10) should return 2640.
sumSquareDifference(20) should return 41230.
sumSquareDifference(100) should return 25164150.

Project Euler: Problem 6: Sum square difference
The sum of the squares of the first ten natural numbers is,

1^2 + 2^2 + ... + 10^2 = 385

The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)^2 = 55^2 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/
