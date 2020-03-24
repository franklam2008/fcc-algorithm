function sumFibs(num) {
    var ans=0;
    var arr=[1,1,2];
    var newarr=[1,1,2]
    const isOdd = (num) => num % 2;
    for(var i=3;i<=num;i++){
      arr[i]=arr[i-1]+arr[i-2]
      newarr[i]=arr[i-1]+arr[i-2]
      if(arr[i]>num){
        arr.pop();
        newarr.pop();
        break
      }
      if(!isOdd(arr[i])){newarr[i]=0}
    };
    newarr[2]=0;
    for(var j=0;j<newarr.length;j++){
      ans+=newarr[j];
    };

    console.log(arr)
    console.log(newarr)
      return ans;
  }

  //sumFibs(1)// should return a number.
  //sumFibs(1000) //should return 1785.
  //sumFibs(4000000) //should return 4613732.
  //sumFibs(4) //should return 5.
  //sumFibs(10) //should return 10.
  sumFibs(75024) //should return 60696.
  //sumFibs(75025) //should return 135721. */
  //https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers/
