function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line

  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log(myVar);
var myVar="dsfds";

// Now remove the console log line to pass the test
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line

  var outerWear ="sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();
