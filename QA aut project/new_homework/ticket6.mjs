async function fetchTodo() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/3",
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const todo = await response.json();
    return todo;
  } catch (error) {
    console.error("Error fetching todo:", error);
    throw error;
  }
}

async function fetchUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/8",
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
}

async function getDataWithPromiseAll() {
  try {
    const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
    console.log("Promise.all results:");
    console.log("Todo:", todo);
    console.log("User:", user);
  } catch (error) {
    console.error("Error with Promise.all:", error);
  }
}

getDataWithPromiseAll();
