// 📌 runWithDebugger

// MANUALLY DEBUGGING

// function logTenNumbers() {
// 	for (var i = 0; i < 10; i++) {
// 		console.log(i);
// 	}
// }

// debugger;
// logTenNumbers();

// ------------------------------- WITH NEW FUNCTION -------------------------------//

// 📝 Copy paste and run this directly in the Chrome's console to inspect.
// 📝 Or, when you use live server, go to Sources in Chrome's console, then run the code with ctrl + r (in windows)

function runWithDebugger(ourFunction) {
	debugger;
	ourFunction();
}

runWithDebugger(function logTenNumbers() {
	for (var i = 0; i < 10; i++) {
		console.log(i);
	}
});

// 📌 setTimeout

setTimeout(function() {
	console.log('Time to wake up!');
}, 5000);

// 📌 forEach (way no. 3)

var students = ['Jonathan', 'Jenny', 'Jerry'];

students.forEach(function(name) {
	console.log(name);
});

//  ❗ Breaking down how forEach works

function forEach(myArray, myFunction) {
	for (var i = 0; i < myArray.length; i++) {
		myFunction(myArray[i]);
	}
}

forEach(students, function(student) {
	console.log(student);
});
