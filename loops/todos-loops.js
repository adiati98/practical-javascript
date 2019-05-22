var todoList = {
	todos: [],
	displayTodos: function() {
		if (this.todos.length === 0) {
			console.log('None on the list yet!');
		} else {
			console.log('I need to: ');
			for (let i = 0; i < this.todos.length; i++) {
				if (this.todos[i].completed === true) {
					console.log('(x)', this.todos[i].todoText);
				} else {
					console.log('( )', this.todos[i].todoText);
				}
			}
		}
	},
	addTodo: function(todoText) {
		this.todos.push({
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
		let todo = this.todos[positionToModify];
		todo.completed = !todo.completed;
		this.displayTodos();
	}
};

todoList.displayTodos();
todoList.addTodo('item 1');
todoList.addTodo('item 2');
todoList.addTodo('item 3');
todoList.addTodo('item 4');
todoList.addTodo('item 5');
todoList.toggleCompleted(1);
todoList.toggleCompleted(4);
