import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import SpotifyWebApi from 'spotify-web-api-node';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import { CLIENT_ID, REDIRECT_URI } from './constants/auth';

import App from './components/App'; // need to implement
import Callback from './components/Callback'; // need to implement
import Stream from './components/Stream/';

window.spotifyApi = new SpotifyWebApi({
  clientId: CLIENT_ID,
  redirectUri: REDIRECT_URI,
});

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Stream} />
        <Route path="/" component={Stream} />
        <Route path="/callback" component={Callback} />
      </Route>
      <Stream />
    </Router>
  </Provider>,
  document.getElementById('app'),
);
