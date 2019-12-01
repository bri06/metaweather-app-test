import { createStore } from 'redux';
import list from './reducers/list';

let store = createStore(list);
export default store;