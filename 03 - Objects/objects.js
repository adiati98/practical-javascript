var myComputer = {
	operatingSystem: 'windows',
	screenSize: '15 inches',
	purchaseYear: 2018
};

console.log(myComputer); // Call all object

console.log(myComputer.operatingSystem); // Call one object

// ------------------------------------------------------------------------------------------- //

// REQUIREMENTS

// 1. It should store the todos array on an object
// 2. It should have a displayTodos method
// 3. It should have an addTodo method
// 4. It should have a changeTodo method
// 5. It should have a deleteTodo method

// ------------------------------------------------------------------------------------------- //

var todoList = {
	todos: ['item 1', 'item 2', 'item 3'], // 1. Store array on an object
	displayTodos: function() {
		console.log('I need to: ', this.todos); // 2. Display method
	},
	addTodo: function(todo) {
		// 3. Add method
		this.todos.push(todo); // We use 'this' to refer it to todos property
		this.displayTodos(); // We use 'this' to refer it to the displayTodos function property
	},
	changeTodo: function(positionToChange, newTask) {
		this.todos[positionToChange] = newTask; // 4. Change method
		this.displayTodos();
	},
	deleteTodo: function(position) {
		this.todos.splice(position, 1); // 5. Delete method
		this.displayTodos();
	}
};

todoList.displayTodos();
todoList.addTodo('item 4');
todoList.changeTodo(3, 'update item 4');
todoList.deleteTodo(0);
