function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
  
    for(var i=0;i<arr.length;i++){
      arr[i].orbitalPeriod=Math.round(2* Math.PI *Math.pow((Math.pow(earthRadius+arr[i]['avgAlt'], 3)/GM), 0.5));
      delete arr[i].avgAlt;
    }
    //orbitalPeriod=2*3.14*sqrt((earthradius+avgalt)^3/GM)
 
    return arr;
  }
  
  
  function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var a = 2 * Math.PI;
    var newArr = [];
    var getOrbPeriod = function(obj) {
      var c = Math.pow(earthRadius + obj.avgAlt, 3);
      var b = Math.sqrt(c / GM);
      var orbPeriod = Math.round(a * b);
      delete obj.avgAlt;
      obj.orbitalPeriod = orbPeriod;
      return obj;
    };
  
    for (var elem in arr) {
      newArr.push(getOrbPeriod(arr[elem]));
    }
  
    return newArr;
  }

  function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
  
    //Looping through each key in arr object
    for(var prop in arr) {
      //Rounding off the orbital period value
      var orbitalPer = Math.round(2 * Math.PI * Math.sqrt(Math.pow(arr[prop].avgAlt + earthRadius, 3) / GM));
      //deleting the avgAlt property
      delete arr[prop].avgAlt;
      //adding orbitalPeriod property
      arr[prop].orbitalPeriod = orbitalPer;
    }
  
    return arr;
  }

  function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
  
    // Loop through each item in the array arr
    arr.forEach(function(item) {
      // Calculate the Orbital period value
      var tmp = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM));
      //Delete the avgAlt property
      delete item.avgAlt;
      //Add orbitalPeriod property
      item.orbitalPeriod = tmp;
    });
    return arr;
  }
    
  //orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].
  orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) 
  //should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].