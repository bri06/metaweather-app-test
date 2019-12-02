export const getAverageTemp = (data) => {
  return data.reduce((acc, { max_temp, min_temp }) => acc + (max_temp + min_temp) / 2, 0) / data.length;
}

export const formatTemp = (value) => {
  if (value) {
    return value.toFixed(1);
  }
}