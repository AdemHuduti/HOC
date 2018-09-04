import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import promise from 'redux-promise';
import async from './middlewares/async';
import CommentBox from './components/CommentBox'
import App from './components/App';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(async)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/post" component={CommentBox } />
        <Route path="/" component={App} exact={true} />
      </Switch>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root'));