function selfPowers(power, n) {
  // Good luck!
  var ans=0
  var str=""
  var test=0
  for(var i=1;i<=power;i++){
    ans+=Math.pow(i,i)
    console.log('M',Math.pow(i,i))
    if(ans.toString().length>n+1){
      console.log("yes")
      console.log(ans.toString().slice(ans.length-n,ans.length))
      test+=ans.toString().slice(ans.length-n,ans.length)
    }
  }
  console.log(test)
  return ans
}

selfPowers(10, 3);

/*
selfPowers(10, 3) should return 317.
selfPowers(150, 6) should return 29045.
selfPowers(673, 7) should return 2473989.
selfPowers(1000, 10) should return 9110846700.

Project Euler: Problem 48: Self powers
The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.

Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000.
*/
