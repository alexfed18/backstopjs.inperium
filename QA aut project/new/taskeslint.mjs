function fetchData(url) {
	return new Promise((resolve, reject) => {
		fetch(url)
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error('Network response was not ok.');
				}
			})
			.then((data) => {
				resolve(data);
			})
			.catch((error) => {
				reject(error);
			});
	});
}

fetchData('https://jsonplaceholder.typicode.com/todos/1')
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.error(error);
	});
