export const getAverageTemp = (data) => {
  return data.reduce((acc, { max_temp, min_temp }) => acc + (max_temp + min_temp) / 2, 0) / data.length;
};

export const formatTemp = (value) => {
  if (value) {
    return value.toFixed(1);
  }
};

export const sortNumbersAscendingOrder = (arr) => arr.sort((initial, final) => initial.the_temp - final.the_temp);

export const sortNumbersDescendingOrder = (arr) => {
  if (arr) {
    return arr.sort((initial, final) => final.the_temp - initial.the_temp)
  }
};