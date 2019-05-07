var todoList = {
	todos: [],
	displayTodos: function() {
		console.log('I need to: ', this.todos);
	},
	addTodo: function(todoText) {
		this.todos.push({
			// Add todoText as OBJECT
			todoText: todoText,
			completed: false
		});
		this.displayTodos();
	},
	changeTodo: function(positionToChange, todoText) {
		this.todos[positionToChange].todoText = todoText;
		this.displayTodos();
	},
	deleteTodo: function(position) {
		this.todos.splice(position, 1);
		this.displayTodos();
	},
	toggleCompleted: function(positionToModify) {
		var todo = this.todos[positionToModify]; // Setting up this variable to save some typing so we can apply it below
		todo.completed = !todo.completed;
		this.displayTodos();
	}
};

// todoList.addTodo('first try');
// todoList.addTodo('second try');
// todoList.changeTodo(0, 'modified');

todoList.displayTodos();
todoList.addTodo('boolean testing');
todoList.toggleCompleted(0);
