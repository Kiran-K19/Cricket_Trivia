import {createStore} from 'redux';
import rootReducer from './reducers/index';


const defaultState = {
    submit:false,
    correct:0,
    incorrect:0,
    response:{}
};

const store = createStore(rootReducer,defaultState);


export default store;