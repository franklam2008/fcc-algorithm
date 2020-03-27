function minimumAbsoluteDifference(arr) {
  let ans
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0;j<arr.length; j++) {
      let temp = Math.abs(arr[i] - arr[j])
      if(temp===0){
        break
      }
      if (ans === undefined || ans > temp) {
        ans = temp
      }
    }
  }
  return ans
}
minimumAbsoluteDifference([1, -3, 71, 68, 17])