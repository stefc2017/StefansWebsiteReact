import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Index from "./js/index"
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
