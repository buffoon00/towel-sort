
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return [];
  }
  let arraySort = [];
  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      if (i % 2 === 0) {
        arraySort.push(matrix[i][j]);
      } else {
        arraySort.push(matrix[i][matrix[i].length - j - 1]);
      }
    }
  }
  return matrix.length ? arraySort :[];
  
}
