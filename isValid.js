function isValid(s) {
  let ans = 'YES';
  let obj = {}
  let diff = 0
  s = s.split('')
  s.map(letter => {
    if (!obj.hasOwnProperty(letter)) { obj[letter] = 1 }
    else {
      obj[letter] += 1
    }
  })
  let firstCount = 0;
  for (let count in obj) {
    if (firstCount === 0) {
      firstCount = obj[count]
    }
    if(firstCount!==obj[count]){
      diff++
    }
  }
  if (diff > 1) { ans = 'NO' }
  return ans
}
isValid('aabbcd')
