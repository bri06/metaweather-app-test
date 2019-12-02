import { fetchLocations } from '../../api';

export const ADD_LIST = 'ADD_LIST';
export const addList = (payload) => ({ type: ADD_LIST, payload });

export const GET_LOCATIONS = 'GET_LOCATIONS';
export const getLocations = (query) => async (dispatch) => {
  dispatch({ type: 'SET_LOADING', payload: true })
  const items = await fetchLocations(query);
  dispatch({ type: 'SET_LOADING', payload: false })
  dispatch(addList(items))
};
