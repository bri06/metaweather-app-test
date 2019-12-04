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

export const getDayOfWeek = (date) => {
  const day = new Date(date).getDay();
  const weekdays = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  };

  return weekdays[day];
}

export const filterTempById = (id, arr) => arr.filter((data) => data.the_temp === id);