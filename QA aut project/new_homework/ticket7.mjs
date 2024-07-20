async function fetchTodo() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/6",
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
      "https://jsonplaceholder.typicode.com/users/3",
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
async function getDataWithPromiseRace() {
  try {
    const result = await Promise.race([fetchTodo(), fetchUser()]);
    console.log("Promise.race:", result);
  } catch (error) {
    console.error("Error with Promise.race:", error);
  }
}

getDataWithPromiseRace();
