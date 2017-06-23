import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import './index.css';

const main = (
<Provider store={store}>
<App/>
</Provider>
);

ReactDOM.render(main, document.getElementById('root'));
registerServiceWorker();
