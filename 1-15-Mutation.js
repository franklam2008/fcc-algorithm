function mutation(arr) {
    var ans = true
    var newarr = arr[1].split('')
    var reg = newarr.join("?") + "?"
    for (var j = 0; j < newarr.length; j++) {
        var regex = new RegExp(newarr[j], 'i')
        ans = regex.test(arr[0])
        while (ans === false) {
            return ans
        }
    }
    

    console.log(regex)
    console.log(newarr)
    console.log(ans)
    console.log(reg)
    return ans;
}

function mutation(arr) {
    let ans = true;
    arr[1].toLowerCase().split('').forEach(letter => {
      if (!arr[0].toLowerCase().includes(letter)) {
        ans = false
      }
    })
    return ans;
  }
  
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);

/*mutation(["hello", "hey"]) should return false.
Passed
mutation(["hello", "Hello"]) should return true.
Passed
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
Passed
mutation(["Mary", "Army"]) should return true.
Passed
mutation(["Mary", "Aarmy"]) should return true.
Passed
mutation(["Alien", "line"]) should return true.
Passed
mutation(["floor", "for"]) should return true.
Passed
mutation(["hello", "neo"]) should return false.
Passed
mutation(["voodoo", "no"]) should return false.*/