import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// NEW!
import modules from './modules';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(modules, window.devToolsExtension && window.devToolsExtension());

// 스토어적용
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root')
);

registerServiceWorker();
