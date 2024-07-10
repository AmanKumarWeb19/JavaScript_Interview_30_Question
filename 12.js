// Add a click event Listener to a button that display an alert when Clicked.

let container = document.getElementById("container");

let btn = document.createElement("button");

btn.innerText = "Click Me";

btn.addEventListener("click", function () {
  alert("Clicked Me");
});

container.append(btn);
