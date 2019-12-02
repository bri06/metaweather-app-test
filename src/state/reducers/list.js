import { ADD_LIST } from '../actions/actions';
const initState = { list: [], loading: false };

function list(state = initState, action) {
  switch (action.type) {
    case ADD_LIST:
      return { ...state, list: [ ...state.list, ...action.payload ] }
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
    default:
      return state
  }
}

export default list;