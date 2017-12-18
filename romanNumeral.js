// input- any given number, 

// output- answers should be uppercase, should be letters in Roman numeral form


// solution example:
// 1  identify a number
// 2  array or an object that stores roman numerals
// 3  match number to its roman counterpart
// 4  for loop the romans numerals matches
function convertToRoman(num) {
  var value = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNum = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  var romanized = '';
  
  for (var index = 0; index < value.length; index++) {
    while (value[index] <= num) {
      romanized += romanNum[index];
      num -= value[index];
    }
  }

  return romanized;
}

convertToRoman(36);