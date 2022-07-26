// const changeCaption = new Event("changeCaption");

// const button = document.getElementById("button");
// button.addEventListener("click", function () {
//   button.addEventListener("changeCaption", customEventHandler());
//   button.dispatchEvent(changeCaption);
// });

// function customEventHandler() {
// console.log()
//   const caption = document.getElementById("caption");
//   caption.innerText = "Hello World!";
// }

const changeCaption = new Event("changeCaption");

window.addEventListener("load", function () {
  const button = document.getElementById("button");

  button.addEventListener("changeCaption", customEventHandler);
  button.addEventListener("click", function () {
    button.dispatchEvent(changeCaption);
  });
});

function customEventHandler(ev) {
  console.log("Event " + ev.type + " telah dijalankan");
  const caption = document.getElementById("caption");
  caption.innerText = "Hello World!";
}
