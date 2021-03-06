import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from '../reducers';

const logger = createLogger();
const router = routerMiddleware(browserHistory);

// routerMiddleware
// browser path, query params in the URL can be accessed in the store now.
const createStoreWithMiddleware = applyMiddleware(thunk, router, logger)(
  createStore,
);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
