function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    var reg = /false|null|NaN|undefined|0/;
    for (var i = arr.length; i >= 0; i--) {
        if (reg.test(arr[i]) || arr[i] === "") {
            arr.splice(i, 1)
        }
    }
    return arr;
}
function bouncer(arr) {
    // Don't show a false ID to this bouncer.
   
    function checkValue(value) {
      if (value) {
        return true
      }
    }
    return arr.filter(value => checkValue(value));
  }
bouncer([7, "ate", "", false, 9]);
/*bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) should return [].
bouncer([1, null, NaN, 2, undefined]) should return [1, 2]. */

//false, null, 0, "", undefined, and NaN.