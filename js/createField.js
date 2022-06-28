export default function createField(size) {
  let field = [];
  for (let i = 0; i < size; i++) {
    field.push([]);
    for (let j = 0; j < size; j++) {
      field[i].push(0);
    }
  }
  return field;
}
