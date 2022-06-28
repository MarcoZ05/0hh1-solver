import displayField from "./displayField.js";
import halfLine from "./solve/halfLine.js";
import threeTogether from "./solve/threeTogether.js";
import identicLine from "./solve/identicLine.js";

export default function solveField(field, gameContainer) {
  let counter = 0;
  while (notSolved(field)) {
    counter++;
    if (counter === 100) {
      console.error("The field couldn't get solved!");
      return field;
    }

    field = threeTogether(field);
    field = halfLine(field);
    field = identicLine(field);

    displayField(field, gameContainer);
  }
  return field;
}

function notSolved(field) {
  return field.some((row) => row.some((cell) => cell === 0));
}
