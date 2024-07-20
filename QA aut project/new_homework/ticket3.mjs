function fetchUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/9")
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

fetchUser()
  .then((user) => {
    console.log("User:", user);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
