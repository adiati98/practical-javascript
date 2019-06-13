var todoList = {
	todos: [],
	displayTodos: function() {
		// debugger;
		if (this.todos.length === 0) {
			console.log('None on the list yet!');
		} else {
			console.log('I need to: ');
			for (var i = 0; i < this.todos.length; i++) {
				if (this.todos[i].completed === true) {
					console.log('(x)', this.todos[i].todoText);
				} else {
					console.log('( )', this.todos[i].todoText);
				}
			}
		}
	},
	addTodo: function(todoText) {
		debugger;
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		this.displayTodos();
	},
	changeTodo: function(positionToChange, todoText) {
		// debugger;
		this.todos[positionToChange].todoText = todoText;
		this.displayTodos();
	},
	deleteTodo: function(position) {
		// debugger;
		this.todos.splice(position, 1);
		this.displayTodos();
	},
	toggleCompleted: function(positionToModify) {
		// debugger;
		var todo = this.todos[positionToModify];
		todo.completed = !todo.completed;
		this.displayTodos();
	},
	toggleAll: function() {
		// debugger;
		var totalTodos = this.todos.length;
		var completedTodos = 0;

		for (var i = 0; i < totalTodos; i++) {
			if (this.todos[i].completed === true) {
				completedTodos++;
			}
		}

		if (completedTodos === totalTodos) {
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = false;
			}
		} else {
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = true;
			}
		}
		this.displayTodos();
	}
};

var displayTodosButton = document.getElementById('displayTodosButton');
var toggleAllButton = document.getElementById('toggleAllButton');

displayTodosButton.addEventListener('click', function() {
	todoList.displayTodos();
});

toggleAllButton.addEventListener('click', function(params) {
	todoList.toggleAll();
});
