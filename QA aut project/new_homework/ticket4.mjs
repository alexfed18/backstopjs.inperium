function fetchTodo() {
	return fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.json();
		})
		.then((todo) => {
			return todo;
		})
		.catch((error) => {
			console.error('Error fetching todo:', error);
			throw error;
		});
}

function fetchUser() {
	return fetch('https://jsonplaceholder.typicode.com/users/1')
		.then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.json();
		})
		.then((user) => {
			return user;
		})
		.catch((error) => {
			console.error('Error fetching user:', error);
			throw error;
		});
}

Promise.all([fetchTodo(), fetchUser()])
	.then(([todo, user]) => {
		console.log('Promise.all:');
		console.log('Todo:', todo);
		console.log('User:', user);
	})
	.catch((error) => {
		console.error('Error with Promise.all:', error);
	});
