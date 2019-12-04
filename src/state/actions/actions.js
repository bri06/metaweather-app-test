import { fetchLocations, getDetail } from '../../api';

export const SET_LIST = 'SET_LIST';
export const setList = (payload) => ({ type: SET_LIST, payload });

export const GET_LOCATIONS = 'GET_LOCATIONS';
export const SET_LOADING = 'SET_LOADING';
export const getLocations = (query) => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  const items = await fetchLocations(query);
  dispatch({ type: SET_LOADING, payload: false });
  dispatch(setList(items));
};

export const SORT_LIST = 'SORT_LIST';
export const DESCENDING_VALUE = '1';
export const setOrdererList = (id, items, order) => {
  return ({ type: SORT_LIST, payload: {
    id,
    items,
    order
  } });
};

export const FILTER_CLIMATE = 'FILTER_CLIMATE';
export const filteredClimate = (id, woeidTemp, tempArray) => ({ type: FILTER_CLIMATE, payload: {
  id,
  woeidTemp
}});

export const GET_ALL_CLIMATE = 'GET_ALL_CLIMATE';
export const getAllClimate = (woeidTemp) => async (dispatch) => {
  const data = await getDetail(woeidTemp);
  if(data) {
    dispatch(({ type: GET_ALL_CLIMATE, payload: {
      woeidTemp,
      tempArray: data
    } }));
  }
};
