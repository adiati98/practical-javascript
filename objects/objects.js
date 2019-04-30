var myComputer = {
	operatingSystem: 'windows',
	screenSize: '15 inches',
	purchaseYear: 2018
};

console.log(myComputer); // Call all object

console.log(myComputer.operatingSystem); // Call one object

// ------------------------------------------------------------------------------------------- //

var todoList = {
	todos: ['item 1', 'item 2', 'item 3'], // Store array on an object
	displayTodos: function() {
		console.log('I need to: ', this.todos); // Display method
	},
	addTodo: function(todo) {
		// Add method
		this.todos.push(todo); // We use 'this' to refer it to todos property
		this.displayTodos(); // We use 'this' to refer it to the displayTodos function property
	},
	changeTodo: function(positionToChange, newTask) {
		this.todos[positionToChange] = newTask; // Change method
		this.displayTodos();
	},
	deleteTodo: function(position) {
		this.todos.splice(position, 1);
		this.displayTodos();
	}
};

todoList.displayTodos();
todoList.addTodo('item 4');
todoList.changeTodo(3, 'update item 4');
todoList.deleteTodo(0);
