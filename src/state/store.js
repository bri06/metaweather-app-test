import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import list from './reducers/list';

let store = createStore(list, applyMiddleware(thunk));
export default store;