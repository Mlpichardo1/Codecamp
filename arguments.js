
function addTogether() {
  var numOne = arguments[0];
  if (typeof(numOne) !== "number") {
    return undefined;
  }
  if (arguments.length === 2) {
    return typeof(arguments[1]) === "number" ? numOne + arguments[1] : undefined;
  }
  
  return function(){
    return typeof(arguments[0]) === "number" ? numOne + arguments[0] : undefined;
  };
}

addTogether(2,3);