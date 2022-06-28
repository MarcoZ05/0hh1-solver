export default function threeTogether(field) {
  const size = field.length;

  // check 3 to right
  //   for (let i = 0; i < size - 2; i++) {
  //     for (let j = 0; j < size; j++) {
  //       if (field[i][j] === field[i + 1][j] && field[i + 2][j] === 0) {
  //         field[i + 2][j] = field[i][j] === 2 ? 1 : 2;
  //       } else if (field[i][j] === field[i + 2][j] && field[i + 1][j] === 0) {
  //         field[i + 1][j] = field[i][j] === 2 ? 1 : 2;
  //       } else if (field[i + 1][j] === field[i + 2][j] && field[i][j] === 0) {
  //         field[i][j] = field[i + 1][j] === 2 ? 1 : 2;
  //       }
  //     }
  //   }

  // CHECK 3 TO THE BOTTOM
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - 2; j++) {
      let c = [field[i][j], field[i][j + 1], field[i][j + 2]];

      if (c[0] === 0 && c[1] !== 0 && c[1] === c[2]) c[0] = c[1] === 1 ? 2 : 1;
      else if (c[1] === 0 && c[2] !== 0 && c[2] === c[0])
        c[1] = c[2] === 1 ? 2 : 1;
      else if (c[2] === 0 && c[0] !== 0 && c[0] === c[1])
        c[2] = c[0] === 1 ? 2 : 1;

      field[i][j] = c[0];
      field[i][j + 1] = c[1];
      field[i][j + 2] = c[2];
    }
  }

  // CHECK 3 TO THE RIGHT
  for (let i = 0; i < size - 2; i++) {
    for (let j = 0; j < size; j++) {
      let c = [field[i][j], field[i + 1][j], field[i + 2][j]];

      if (c[0] === 0 && c[1] !== 0 && c[1] === c[2]) c[0] = c[1] === 1 ? 2 : 1;
      else if (c[1] === 0 && c[2] !== 0 && c[2] === c[0])
        c[1] = c[2] === 1 ? 2 : 1;
      else if (c[2] === 0 && c[0] !== 0 && c[0] === c[1])
        c[2] = c[0] === 1 ? 2 : 1;

      field[i][j] = c[0];
      field[i + 1][j] = c[1];
      field[i + 2][j] = c[2];
    }
  }

  return field;
}
