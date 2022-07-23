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
linkKutani.innerHTML = "<b>kutani</b>.rf.gd"