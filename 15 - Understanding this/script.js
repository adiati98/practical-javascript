// ❗ logThis function is referring to 📝 Case 1

// 📝 Case 1 //

function logThis() {
	console.log(this);
}

logThis(); // window

// 📝 Case 2 //

var myObject = {
	myMethod: function() {
		console.log(this);
	}
};

myObject.myMethod();

// 📝 Case 3 //

function Person(name) {
	this.name = name;
}

var ayu = new Person('Ayu');
console.log(ayu);

// 📝 Case 4 //

var explicitlySetLogThis = logThis.bind({ name: 'Ayu' });

explicitlySetLogThis();

logThis.apply({ name: 'Ayu' });
logThis.call({ name: 'Ayu' });

// ✨ Difference between .apply() and .call()

function logThisWithArguments(greeting, name) {
	console.log(greeting, name);
	console.log(this);
}

logThisWithArguments('hi', 'Ayu');
logThisWithArguments.apply({ name: 'Ayu' }, [ 'hi', 'Ayu' ]);
logThisWithArguments.call({ name: 'Ayu' }, 'hi', 'Ayu');

// ✨ Some details
var boundOnce = logThis.bind({ name: 'The first time is forever' });

// These attempts to change `this` are futile.
boundOnce.bind({ name: 'why even try?' })();
boundOnce.apply({ name: 'why even try?' });
boundOnce.call({ name: 'why even try?' });

// 📝 Case 5 //

// 1st case //

function outerFunction(callback) {
	callback();
}

outerFunction(logThis);

// 2nd case //

function callAsMethod(callback) {
	var weirdObject = {
		name: "Don't do this in real life"
	};

	weirdObject.callback = callback;
	weirdObject.callback();
}

callAsMethod(logThis);

// 3rd case //

function callAsConstructor(callback) {
	new callback();
}

callAsConstructor(logThis);

// 4th case //

function callAndBindToGordon(callback) {
	var boundCallback = callback.bind({ name: 'Ayu' });
	boundCallback();
}

callAndBindToGordon(logThis);

// Twist

var boundOnce = logThis.bind({ name: 'The first time is forever' });
callAndBindToGordon(boundOnce);
