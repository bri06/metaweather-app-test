import { SET_LIST, SET_LOADING, SORT_LIST } from '../actions/actions';
import { sortNumbersDescendingOrder } from '../../utils';

const initState = { list: [], loading: false, tempList: [] };

function list(state = initState, action) {
  switch (action.type) {
    case SET_LIST:
      return { ...state, list: action.payload }
    case SET_LOADING:
      return { ...state, loading: action.payload }
    case SORT_LIST:
      debugger;
      const consolidateWeatherOrder = sortNumbersDescendingOrder(action.payload.items);
      return { ...state, tempList: [ ...sortNumbersDescendingOrder(action.payload) ] }
    default:
      return state
  }
}

export default list;