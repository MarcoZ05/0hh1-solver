export default function identicLine(field) {
  const size = field.length;

  // RIGHT

  // for all lines, exept for the last
  for (let i1 = 0; i1 < size - 1; i1++) {
    // for all lines, from i+1 to size
    for (let i2 = i1 + 1; i2 < size; i2++) {
      // check if identic
      if (
        field[i1][j].filter((field1) => {
          field1 === 0;
        }).length === 2 &&
        field[i2][j].filter((field2) => {
          field2 === 0;
        }).length === 0 &&
        field[i1][j].filter((field1, j) => {
          field1 === field[i2][j];
        }).length ===
          size - 2
      ) {
        field[i1][j].foreach((field1, j) => {
          if (field1 === 0) {
            field1 = field[i2][j];
          }
        });
      }

      if (
        field[i1][j].filter((field1) => {
          field1 === 0;
        }).length === 0 &&
        field[i2][j].filter((field2) => {
          field2 === 0;
        }).length === 2 &&
        field[i1][j].filter((field1, j) => {
          field1 === field[i2][j];
        }).length ===
          size - 2
      ) {
        field[i2][j].foreach((field2, j) => {
          if (field2 === 0) {
            field2 = field[i1][j];
          }
        });
      }
    }
  }

  return field;
}
