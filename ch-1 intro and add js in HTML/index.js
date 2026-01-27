const button = document.getElementById("btn");

let userStatus = document.getElementById("status");

button.addEventListener("click", () => {
  userStatus.textContent = "logged in";
});
