var ayu = {
	name: 'Ayu',
	homeland: 'Indonesia',
	location: 'Netherlands',
	sayName: function() {
		console.log(this); // Print out the entire objects
		console.log(this.location); // Print out a single property
		console.log(
			`${this.name} comes from ${this.homeland} and lives in ${this.location}`
		);
	}
};

ayu.sayName();
