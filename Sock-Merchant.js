function sockMerchant(n, ar) {
  function findPairs(ar, find, pairs) {
    if (ar.length > 0) {
      let newArr = ar;

      if (newArr.indexOf(find) > -1) {
        pairs++;
        newArr = [
          ...newArr.slice(0, newArr.indexOf(find)),
          ...newArr.slice(newArr.indexOf(find) + 1)
        ];
      }
      return findPairs(newArr.slice(1), newArr[0], pairs);
    }

    return pairs;
  }
  const min = 1;
  const max = 100;

  ar = typeof ar === "string" ? ar.split(" ") : ar;

  if (
    ar.length >= min &&
    ar.length <= max &&
    n === parseInt(n, 0) &&
    n >= min &&
    n <= max &&
    n === ar.length
  ) {
    return findPairs(ar.slice(1), ar[0], 0);
  }

  // if does not meet criteria return 0
  return 0;
}
