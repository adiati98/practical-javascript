for (var i = 0; i < 3; i++) {
	console.log('hey');
}

for (var i = 3; i < 9; i += 2) {
	console.log('you');
}

// The loop will be:
// 3 = "you"
// 5 = "you"
// 7 = "you"
// 9 STOP.

for (var i = 0; i < 3; i++) {
	console.log(i);
}

// Looping over array

var testArray = ['item 1', 'item 2', 'item 3'];

for (var i = 0; i < testArray.length; i++) {
	console.log(testArray[i]);
}

// Adding extra item in array.

testArray.push('extra item');
console.log(testArray[i]);
