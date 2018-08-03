import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Index from "./js/index"

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
