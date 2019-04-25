var todos = ['clean the house', 'study', 'have lunch'];

// Function to display todos

function displayTodos() {
	console.log('I need to:', todos);
}

// Function to add todos

function addTodo(todo) {
	todos.push(todo);
	displayTodos(); // Function inside function
}

// Function to change todos

function changeTodo(positionToChange, newTask) {
	todos[positionToChange] = newTask;
	displayTodos();
}

// Function to delete todos

function deleteTodo(position) {
	todos.splice(position, 1);
	displayTodos();
}

// Call the functions

addTodo('iron clothes');
addTodo('take nap');
changeTodo(0, 'clean the living room');
changeTodo(0, 'clean bathroom');
deleteTodo(2);
