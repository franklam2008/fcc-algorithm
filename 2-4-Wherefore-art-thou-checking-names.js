function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    var counts=0
    var keynames=  Object.keys(source);
    for(var i=0;i<collection.length;i++){
      
      if(collection[i][keynames[0]]===source[keynames[0]]&&collection[i][keynames[1]]===source[keynames[1]]&&collection[i][keynames[2]]===source[keynames[2]]){
        counts+=1;
        arr.push(collection[i]);
      }
      
      
    };
    
  
  //source[j].keynames[i]===source[i]
    console.log("collection = ",collection);
    console.log("counts = ",counts);
    console.log("keynames = ",keynames);
    console.log("keynames[0] = ",keynames[0]);
    console.log("collection[0] = ",collection[0]);
    console.log("source = ",source);
    console.log("source[last] = ",source['last']);
  
    // Only change code above this line
    return arr;
  }
  
  //whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) //should return [{ first: "Tybalt", last: "Capulet" }].
  //whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) //should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].
  //whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) //should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
  //whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) //should return [{ "apple": 1, "bat": 2, "cookie": 2 }].
  //whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) //should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].
  whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 2, "c": 999}) //should return []