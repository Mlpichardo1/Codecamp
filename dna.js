// 1 split input into a char array,
// 2 get first char = firstChar
// 3 check if firstChar is G
// 	Create pair [G,C]
// 4 else if firstChar is C
// 	Create pair [C,G]
// 5 else if firstChar is T
// 	Create pair [T,A]
// 6 else if
// 	Create pair [A,T]
// End if
// 7 push to DNA Strand
// 8 for loop- repeat step 3 for addition DNA pairs
// 9 Return array of arrays
function pairElement(str) {
	var paired = [];
	var search = function(char) {
		switch (char) {
			case 'A':
				paired.push(['A', 'T']);
				break;
			case 'T':
				paired.push(['T', 'A']);
				break;
			case 'G':
				paired.push(['G', 'C']);
				break;
			case 'C':
				paired.push(['C', 'G']);
				break;
		}
	};
	for (var i = 0; i < str.length; i++) {
		search(str[i]);
	}
	console.log(paired);
	return paired;
}
pairElement("GCG");

// An advanced way below ---->

function pairElement(str) {
   var dnaMap = {C:'G', G:'C', T:'A', A:'T'};
   var paired = [];
  console.log(paired);
  for (var i = 0; i < str.length; i++)
    paired.push([str[i], dnaMap[str[i]]]);
    console.log(paired);
    return paired;
}

pairElement('GCG');