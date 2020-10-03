
exports.min = function min(array) {
  if (!array || array.length < 1) {
    return 0;
  }

  let min = array[0];
  for (let i = 1; i < array.length; i++) {
      current = array[i];
      if (current < min) {
          min = current;
      }
  }
  return min;
}

exports.max = function max(array) {
  if (!array || array.length < 1) {
    return 0;
  }
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
      current = array[i];
      if (current > max) {
          max = current;
      }
  }
  return max;
};
exports.avg = function avg(array) {
  if (!array || array.length < 1) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
      sum += array[i];
  }
  let avg =sum / array.length;
  return avg;
};
