import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppRedux from './AppRedux';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppRedux />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
