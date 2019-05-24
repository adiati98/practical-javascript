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
	},
	toggleAll: function() {
		// Recording total and completed numbers of todos.
		let totalTodos = this.todos.length;
		let completedTodos = 0;

		// Get numbers of completed todos to count it
		for (let i = 0; i < totalTodos; i++) {
			if (this.todos[i].completed === true) {
				completedTodos++;
			}
		}

		// Case 1: If everything is true, make everything false
		if (completedTodos === totalTodos) {
			for (let i = 0; i < totalTodos; i++) {
				this.todos[i].completed = false;
			}
			// Case 2: Otherwise, make everything true
		} else {
			for (let i = 0; i < totalTodos; i++) {
				this.todos[i].completed = true;
			}
		}
		this.displayTodos();
	}
};

// Testing toggleAll true (Case 1)

// todoList.addTodo('item 1');
// todoList.addTodo('item 2');
// todoList.toggleCompleted(0);
// todoList.toggleCompleted(1);
// todoList.toggleAll();

// Testing toggleAll false (Case 2)

todoList.addTodo('item 1');
todoList.addTodo('item 2');
todoList.addTodo('item 3');
todoList.toggleAll(); // This will make everything true, because by default they are false.
todoList.toggleAll(); // This will make everything false, because we made everything true on the first call.

// Other scenario when there's one true (not all true or not all false)
todoList.toggleCompleted(0);
todoList.toggleAll();

// Everything will become true.
