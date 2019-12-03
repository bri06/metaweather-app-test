import { SET_LIST, SET_LOADING, SORT_LIST } from '../actions/actions';
import { sortNumbersDescendingOrder } from '../../utils';

const initState = { list: [], loading: false };

function list(state = initState, action) {
  switch (action.type) {
    case SET_LIST:
      return { ...state, list: action.payload }
    case SET_LOADING:
      return { ...state, loading: action.payload }
    case SORT_LIST:
      const weatherItems = sortNumbersDescendingOrder(action.payload.items);
      const id = action.payload.id;
      return { ...state, list: state.list.map((data) => {
        if (data.id === id) {
          data.consolidated_weather = [ ...weatherItems ];
          return data;
        } else {
          return data;
        }
      })}
    default:
      return state
  }
}

export default list;