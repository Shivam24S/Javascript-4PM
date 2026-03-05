document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const errorMessage = document.getElementById("alert");

  if (!name) {
    return (errorMessage.textContent = "name is required");
  }

  if (!email) {
    return (errorMessage.textContent = "email is required");
  }

  if (password.length < 6) {
    return (errorMessage.textContent = "password is required");
  }

  alert("form submitted");
});
