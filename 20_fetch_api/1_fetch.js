async function fetchData() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");

    // console.log("data", data);

    const users = await data.json();

    console.log("users data", users);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
