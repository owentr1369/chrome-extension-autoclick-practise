const newButton = document.createElement("button");

newButton.addEventListener("mouseup", () => {
  triggerElement[0].click();
});

newButton.innerText = "Click me, please!";
const triggerElement = document.getElementsByClassName("RNmpXc");

document.body.appendChild(newButton);
