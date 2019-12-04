
export const fetchLocations = async (query) => {
  const res = await fetch(`https://www.metaweather.com/api/location/search/?query=${query}`);
  return res.json()
  .then(fetchDataByWoeid)
}

export const getDetail = async (id) => {
  const res = await fetch(`https://www.metaweather.com/api/location/${id}/`);
  const item = await res.json();
  return item;
}

const fetchDataByWoeid = async (arr) => {
  const promises = arr.map(({ woeid }) => getDetail(woeid));
  const items = await Promise.all(promises);
  return items;
}