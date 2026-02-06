document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let currentPassword = 123456;

  let oldPassWord = Number(document.getElementById("oldPassword").value);
  let newPassword = Number(document.getElementById("newPassword").value);

  console.log(typeof newPassword);

  console.log("current", typeof currentPassword);

  let status = document.getElementById("status");

  if (oldPassWord.length < 6) {
    status.textContent = "password must be 6 character length";
  } else if (oldPassWord !== currentPassword) {
    status.textContent = "old password is not matched with current password";
  } else if (newPassword.length < 6) {
    status.textContent = "password must be 6 character length";
  } else if (newPassword === currentPassword) {
    status.textContent =
      "new password is same as old password you have to change";
  } else {
    currentPassword = newPassword;

    status.textContent = "password updated ";
  }
});
