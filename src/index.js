import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';

const store = configureStore();

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('app')
// );

const render = () => {
    fancyLog();
    return ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('app')
    );
}

render();

function fancyLog() {
    console.log("%c Rendered with 👉 👉👇", "background: purple; color: #fff");
    console.log(store.getState());
}