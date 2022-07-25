const contents = document.querySelector(".contents");
function welcome() {
  alert("Welcome! Enjoy your live!");
  contents.classList.remove("hidden");
}
// document.body.onload = welcome;

const incrementButton = document.getElementById("incrementButton");
const count = document.getElementById("count");
count.innerText = "0";
function increment() {
  count.innerText++;
  if (count.innerText == 5) {
    const message = document.createElement("h4");
    message.innerHTML = "Congratulation you get pictures of <i>beautiful</i> scenery";
    const image = document.createElement("img");
    image.setAttribute("src", "beautiful.jpg");
    contents.appendChild(message);
    contents.appendChild(image);
  }
}
// incrementButton.onclick = increment;

// addEventListener('event', function);
window.addEventListener("load", welcome);
incrementButton.addEventListener("click", increment);

// addEventListener can add multiple event listener in one event and support feature event bubbling and capturing
