// NOTE

// .displayTodos should show .todoText (property)

// for (let i = 0; i < this.todos.length; i++) {
// 	console.log(this.todos[i].todoText);
// }

// -------------------------------------------------------------------------------------------------------------- //

// .displayTodos should tell you if .todos is empty

// if this.todos.length === 0
// console.log('Your todo list is empty!')
// else
// print todos as normal

// -------------------------------------------------------------------------------------------------------------- //

// displayTodos should show .completed

/* (   ) item 1
	( x ) item 2
	( x ) item 3*/

// -------------------------------------------------------------------------------------------------------------- //

var todoList = {
	todos: [],
	displayTodos: function() {
		// console.log('I need to: '); ------> MOVE INTO ELSE STATEMENT
		// When we write "console.log('I need to: ', this.todos", it will print out: I need to:  [ { todoText: 'first', completed: false },
		// { todoText: 'second', completed: false } ]
		// this.todos is NOT USEFUL in this function

		// for (let i = 0; i < this.todos.length; i++) {
		// 	console.log(this.todos[i].todoText);
		// } -------------------------------> MOVE INTO ELSE STATEMENT

		if (this.todos.length === 0) {
			console.log('None on the list yet!');
		} else {
			console.log('I need to: ');
			for (let i = 0; i < this.todos.length; i++) {
				// console.log(this.todos[i].todoText); --------------> MOVE TO CONSOLE.LOG COMPLETED === TRUE/FALSE

				// check if .completed is true
				// print with (x)
				// else
				// print with ( )

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
		let todo = this.todos[positionToModify];
		todo.completed = !todo.completed;
		this.displayTodos();
	}
};

// todoList.displayTodos();

todoList.addTodo('first');
todoList.addTodo('second');
todoList.addTodo('third');
todoList.addTodo('fourth');
todoList.addTodo('fifth');

// todoList.deleteTodo(0);
// todoList.deleteTodo(0);

todoList.toggleCompleted(0); // Toggle to true
todoList.toggleCompleted(0); // Toggle to false
todoList.toggleCompleted(1);
todoList.toggleCompleted(4);
