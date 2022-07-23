const buttons = document.getElementsByClassName("button");
const button = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  button[i].style.borderRadius = "6px";
  button[i].style.border = "none";
}

const link = document.querySelector("#link");
link.style.width = "200px";
link.style.margin = "0 auto";

const linkGoogle = document.getElementById("googleLink");
linkGoogle.innerText = "google.com";

const linkKutani = document.getElementById("kutaniLink");
linkKutani.innerHTML = "<b>kutani</b>.rf.gd";

const listLink = document.getElementById("listLink");

const newElement = document.createElement("li");
newElement.innerHTML = "<a href='arifsaputra.my.id'>arifsaputra.my.id</a>";
listLink.appendChild(newElement);

const newElement2 = document.createElement("li");
newElement2.innerHTML = "<a href='github.com'><i>github</i>.com</a>";
const itemList = listLink.children[1];
listLink.insertBefore(newElement2, itemList);
