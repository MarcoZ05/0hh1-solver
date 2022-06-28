export default function halfLine(field) {
  const size = field.length;

  // CHECK ALL LINES
  for (let i = 0; i < size; i++) {
    // half is 1
    const c1 = field[i].filter((elem) => elem === 1);
    if (size / 2 === c1.length) {
      field[i].forEach((elem, j) => {
        if (elem === 0) field[i][j] = 2;
      });
    }

    // half is 2
    const c2 = field[i].filter((elem) => elem === 2);
    if (size / 2 === c2.length) {
      field[i].forEach((elem, j) => {
        if (elem === 0) field[i][j] = 1;
      });
    }
  }

  // CHECK ALL COLS
  for (let j = 0; j < size; j++) {
    let c1 = 0;
    let c2 = 0;

    for (let i = 0; i < size; i++) {
      if (field[i][j] === 1) c1++;
      else if (field[i][j] === 2) c2++;
    }

    // half is 1
    if (c1 === size / 2 && c2 !== c1) {
      for (let i = 0; i < size; i++) {
        if (field[i][j] === 0) field[i][j] = 2;
      }
    } else if (c2 === size / 2 && c1 !== c2) {
      for (let i = 0; i < size; i++) {
        if (field[i][j] === 0) field[i][j] = 1;
      }
    }
  }

  return field;
}
