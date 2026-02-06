document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("name").value;

  let textData = document.getElementById("text");

  textData.textContent = `you have entered name ${name} `;
});
