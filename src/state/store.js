import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import list from './reducers/list';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(list, composeEnhancers(applyMiddleware(thunk)));
export default store;