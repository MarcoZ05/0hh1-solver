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

// solve field
// solvedField = solveField(field);
