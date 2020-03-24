function smallestCommons(arr) {
    var prime=[2,3,5,7,11,13,17,19,23], primepow=[0,0,0,0,0,0,0,0,0], pptemp=[0,0,0,0,0,0,0,0,0], ans=1, newarr=[], min= Math.min(arr[0],arr[1]), max= Math.max(arr[0],arr[1])
    for( var i = min; i<=max;i++){ newarr.push(i); }
    for( var j = 0; j<newarr.length;j++){
      for(var k=0;k<prime.length;k++){
        while(newarr[j]%prime[k]===0){
          pptemp[k]+=1 
          newarr[j]/=prime[k];
        }
      } //update pow
      for(var m=0;m<pptemp.length;m++){
        if(pptemp[m]>primepow[m]){primepow[m]=pptemp[m];}
        pptemp[m]=0;}
    }
    for(var p=0;p<prime.length;p++){ans*=Math.pow(prime[p],primepow[p]);}
      return ans;
  }
  
  
  
  //smallestCommons([1, 5]) //should return a number.
  //smallestCommons([1, 5]) //should return 60. [2,1,1
  //smallestCommons([5, 1]) //should return 60. [2,1,1
  //smallestCommons([2, 10])//should return 2520. [3,2,1,1
  //smallestCommons([1, 13]) //should return 360360. [3,2,1,1,1,1
  smallestCommons([23, 18]) //should return 6056820. [2,2,1,1,1,0,0,1,1
  
  //https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple/