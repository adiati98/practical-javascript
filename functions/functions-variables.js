var myName = 'Ayu';

function sayName() {
	var secret = 'this is a secret';
	console.log(myName);
}

sayName();
console.log(secret);

// 1. sayName will give back variable of myName when we call the function.
// 2. But when we call console.log(secret), it would throw error.

// If we're inside a function -- console.log(myName) -- we can look out and see data.
// But if we're outside of a function -- console.log(secret), we CANNOT look inside.

// This is what called SCOPE.
