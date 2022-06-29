import createField from "./createField.js";
import displayField from "./displayField.js";
import solveField from "./solveField.js";

// init essential variables in js and css
const gameContainer = document.getElementById("gameContainer");
const size = 12;
document.body.setAttribute("style", `--size: ${size};`);

// create and display field
var field = createField(size);
field = displayField(field, gameContainer);

// clear button
const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
  field = createField(size);
  field = displayField(field, gameContainer);
});

//  solve button
const solveButton = document.getElementById("solve");
solveButton.addEventListener("click", () => {
  field = solveField(field, gameContainer);
  field = displayField(field, gameContainer);
});

// siive buttons
const sizeButtons = [
  document.getElementById("4"),
  document.getElementById("6"),
  document.getElementById("8"),
  document.getElementById("10"),
  document.getElementById("12"),
];
sizeButtons.forEach((sizeButton)=>{
  sizeButton.addEventListener("click", (e)=>{
    const size = e.target
    console.log(size);
  })
})