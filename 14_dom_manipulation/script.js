// document.getElementById

document.getElementById("btn").addEventListener("click", () => {
  const heading = document.getElementById("heading");

  heading.textContent = "text changed";
});

// document.getElementByClassName

const paragraph = document.getElementsByClassName("paragraph");

console.log("para", paragraph);

paragraph[0].textContent = "this is some paragraph";

// paragraph[0].style.color = "red";

paragraph[1].textContent = "other paragraph";

// document.getElementByTagName

const list = document.getElementsByTagName("ul");

console.log("list", list);

list[0].innerHTML = `
<li>list-1</li>
`;

// querySelector only check the first occurrence match

const query = document.querySelector("#query");

const queryClass = document.querySelector(".queryClass");

query.style.color = "green";

queryClass.textContent = "this is changed text";

// querySelectorAll

let para = document.querySelectorAll(".paragraph");

para.forEach((element) => {
  `${(element.style.color = "red")}`;
});

para[0].textContent = "para-1";

para[1].textContent = "para-2";

console.log("para", para);


