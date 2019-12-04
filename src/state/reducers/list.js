import { SET_LIST, SET_LOADING, SORT_LIST, FILTER_CLIMATE ,DESCENDING_VALUE } from '../actions/actions';
import { sortNumbersDescendingOrder, sortNumbersAscendingOrder } from '../../utils';

const initState = { list: [], loading: false };

function list(state = initState, action) {
  switch (action.type) {
    case SET_LIST:
      return { ...state, list: action.payload }
    case SET_LOADING:
      return { ...state, loading: action.payload }
    case SORT_LIST:
      const descendingOrderItems = [ ...sortNumbersDescendingOrder(action.payload.items)];
      const ascendinggOrderItems = [ ...sortNumbersAscendingOrder(action.payload.items)];
      const orderSelected = action.payload.order;
      const id = action.payload.id;
      return { ...state, list: state.list.map((data) => {
        if (data.woeid === id) {
          if(orderSelected === DESCENDING_VALUE) {
            data.consolidated_weather = descendingOrderItems;
          } else {
            data.consolidated_weather = ascendinggOrderItems;
          }
          return data;
        } else {
          return data;
        }
      })}
    case FILTER_CLIMATE:
      debugger;
        const { id: idTemp, tempArray } = action.payload;
        if(idTemp === 'all') {
          return { ...state, list: tempArray }
        }
        return { ...state, list: state.list.map((data) => {
          const listFiltered = data.consolidated_weather.filter(({ the_temp }) => the_temp === idTemp);
          data.consolidated_weather = listFiltered;
          debugger;
          return data;
        })}
    default:
      return state
  }
}

export default list;