import {createStore} from 'redux';
import {browserHistory} from 'react-router';
import rootReducer from './reducers/index';


const defaultState = {
    correct:0,
    incorrect:0,
    response:{}
};

const store = createStore(rootReducer,defaultState);


export default store;