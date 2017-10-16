import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Route, Router, IndexRoute } from 'react-router';
import Root from './Root';
import App from './App';
import Confirm from './Confirm';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
<Router history={browserHistory}>
  <Route path="/" component={Root}>
    <IndexRoute component={App} />
    <Route path="/confirmation" component={Confirm} />
  </Route>    
</Router>
, document.getElementById('root'));
registerServiceWorker();
