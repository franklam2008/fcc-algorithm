var Person = function(firstAndLast) {
  var fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};

var bob = new Person('Bob Ross');




//Object.keys(bob).length //should return 6.
//bob instanceof Person// should return true.
//bob.firstName //should return undefined.
//bob.lastName //should return undefined.
//bob.getFirstName() //should return "Bob".
bob.getLastName() //should return "Ross".
//bob.getFullName() //should return "Bob Ross".
//bob.getFullName() //should return "Haskell Ross" after bob.setFirstName("Haskell").
//bob.getFullName() //should return "Haskell Curry" after bob.setLastName("Curry").
//bob.getFullName() //should return "Haskell Curry" after bob.setFullName("Haskell Curry").
//bob.getFirstName() //should return "Haskell" after bob.setFullName("Haskell Curry").
//bob.getLastName() //should return "Curry" after bob.setFullName("Haskell Curry"). */