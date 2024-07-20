function fetchTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/3")
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
      console.error("Error fetching todo:", error);
      throw error;
    });
}

function fetchUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/3")
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
      console.error("Error fetching user:", error);
      throw error;
    });
}

Promise.race([fetchTodo(), fetchUser()])
  .then((result) => {
    console.log("Promise.race result:", result);
  })
  .catch((error) => {
    console.error("Error with Promise.race:", error);
  });
