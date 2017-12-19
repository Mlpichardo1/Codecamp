// Check numbers 2 through input -1
// 	Check if the input is divisible by number
// 		Not prime (return false)
// 	If not divisible
// 		Repeat with next number

// Is prime (return true)

function isPrime(num) {
 for (var n = 2; n < num; n++) {
   if (num % n == 0) {
     return false;
   } 
 }
  return true; 
}

function sumPrimes(num) {
  var total = 2;
  for (var n = 3; n <= num; n++) {
    if (isPrime(n)) {
      total += n;
    }
  }
  return total;
}

sumPrimes(10);