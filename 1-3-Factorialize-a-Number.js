function factorialize(num) {

  var ans=1
  for(var i=1;i<=num;i++){
    ans*=i
  }
  return ans;
}

console.log(factorialize(5));
