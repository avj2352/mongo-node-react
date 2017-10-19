import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import SimpleForm from './components/simple-form/simple-form.component';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<SimpleForm />, document.getElementById('reactForm'));
registerServiceWorker();
