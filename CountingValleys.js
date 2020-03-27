function countingValleys(n, s) {
  let valley = 0;
  let current = 0;
  s = typeof s === "string" ? s.split("") : s;
  s.map(dir => {
    if (dir === "D") {
      current--;
    } else {
      current++;
    }
    if (current === 0 && dir === "U") {
      valley++;
    }
  });
  console.log(s);
  return valley;
}

// countingValleys(8, "UDDDUDUU"); // 1 ✅
// countingValleys(12, "DDUUDDUDUUUD"); // 2 ✅
// countingValleys(1, "DU"); // 0 ✅
// countingValleys(2, " DU"); // 1 ✅
// countingValleys(3, "DDU"); // 0 ✅
// countingValleys(100001, "DDU"); // 0 ✅
countingValleys(20, "DDUUDDUUDDUUDDUUDDUU"); // 5 ✅
// countingValleys(10, "UUUUUDUUUU");
