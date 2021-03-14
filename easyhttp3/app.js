const http = new EasyHTTP();

// Get Users
// http
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// User Data
const data = {
  name: "John Doe",
  username: "johndoe",
  email: "jdoe@gmail.com",
};

// Create User
// http
//   .post("https://jsonplaceholder.typicode.com/users", data)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Update POST
// http
//   .put("https://jsonplaceholder.typicode.com/users/1", data)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Delete User
http
  .delete("https://jsonplaceholder.typicode.com/users/1")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
