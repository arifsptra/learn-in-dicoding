// Bubbling
const bDivs = document.getElementsByClassName("divB");
for (let elB of bDivs) {
  elB.addEventListener("click", function () {
    alert("Elemen " + elB.getAttribute("id").toUpperCase());
  });
}

// Capturing
const cDivs = document.getElementsByClassName("divC");
for (let elC of cDivs) {
  elC.addEventListener(
    "click",
    function () {
      alert("Elemen " + elC.getAttribute("id").toUpperCase());
    },
    true
  );
}
