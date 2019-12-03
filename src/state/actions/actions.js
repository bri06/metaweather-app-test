import { fetchLocations } from '../../api';

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
export const setAscendentList = (payload) => {
  debugger;
  return ({ type: SORT_LIST, payload });
  };
// export const getDescendentList = (payload) => ({ type: });
