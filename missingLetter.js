// Get the 1st letter = firstChar
// Check if next character is the next character in the alphabet.
// Check if  another character is available
// Repeat line 2 with the next character
// Else
// Return undefined
// Else
// Return expected (missing) character

function fearNotLetter(str) {
  var firstLetter = str[0];
  
//   console.log(firstLetter.charCodeAt(0));
//   console.log("code for q is", "q".charCodeAt(0));
  for (var i=0; i < str.length - 1; i++){  
//     console.log(str[i]);
    if (str.charCodeAt(i + 1) === str.charCodeAt(i) + 1) {
      console.log('next character is the next alphabetically');
    } else {
      console.log('found missing char');
      return String.fromCharCode(str.charCodeAt(i) + 1);
    } 
   } 
  return undefined;
}

fearNotLetter("abcde");