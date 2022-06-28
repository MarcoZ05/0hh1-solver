import displayField from "./displayField.js";

export default function display(field, gameContainer) {
  gameContainer.innerHTML = "";
  field.forEach((row, i) => {
    row.forEach((elem, j) => {
      let html = document.createElement("div");
      html.classList.add("cell");
      if (elem !== 0) html.classList.add("color-" + elem);
      html.addEventListener("click", () => {
        if (field[i][j] === 2) field[i][j] = 0;
        else field[i][j]++;
        displayField(field, gameContainer);
      });
      gameContainer.appendChild(html);
    });
  });
  return field;
}
