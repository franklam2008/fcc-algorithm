function substrCount(n, s) {
  let ans = n
  s = s.split('')
  for(let i=0;i<n;i++){
    if(s[i]===s[i+1]){//pair
      ans++
    }
    if(s[i-1]===s[i+1]&&s[i]!==s[i+1]){//middle diff 3
      ans++
    }
    if(s[i]===s[i+1]&&s[i]!==s[i+2]&&s[i]===s[i+3]&&s[i]===s[i+4]){//middle diff 5
      ans++
    }
    if(s[i]===s[i+1]&&s[i]===s[i+2]){//3 of kind
      ans++
    }
    if(s[i]===s[i+1]&&s[i]===s[i+2]&&s[i]===s[i+3]){//4 of kinds
      ans++
    }
    if(s[i]===s[i+1]&&s[i]===s[i+2]&&s[i]===s[i+3]&&s[i]===s[i+4]){//5 of kinds
      ans++
    }
  }
  console.log(s[2]===s[3])
  console.log(s)
  console.log(ans)
  return ans
}
function substrCount(n, s) {
  let history = [];
  let historyCount = 0;

  // historyItem = [current, occurrence]
  let historyItem = [s[0], 1];

  let palindromicCount = 0;

  for (let i = 1; i < n; i++)
    if (s[i] == historyItem[0]) historyItem[1]++;
    else {
      // Calcuate all strings that can be formed with the same character
      // Count total substrings  -> n * (n + 1) / 2 for
      palindromicCount += (historyItem[1] * (historyItem[1] + 1)) / 2;

      if (historyCount == 2) {
        // Calcuate all strings that can be formed with the same character except middle character
        if (history[0][0] == historyItem[0] && history[1][1] == 1)
          palindromicCount += Math.min(history[0][1], historyItem[1]);

        history.shift();
        historyCount--;
      }

      history.push(historyItem);
      historyCount++;
      historyItem = [s[i], 1];
    }

  palindromicCount += (historyItem[1] * (historyItem[1] + 1)) / 2;

  if (historyCount == 2)
    if (history[0][0] == historyItem[0] && history[1][1] == 1)
      palindromicCount += Math.min(history[0][1], historyItem[1]);

  return palindromicCount;
}
