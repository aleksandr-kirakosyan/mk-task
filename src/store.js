import { createStore } from 'redux';
import rootReducer from './reducers/groupReducer'; 

const store = createStore(rootReducer);

export default store;
