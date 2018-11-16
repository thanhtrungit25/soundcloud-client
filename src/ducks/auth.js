// auth
import SC from 'soundcloud';
import { map } from 'lodash';
import { arrayOf, normalize } from 'normalizr';
import trackSchema from '../schemas/track';
import { actionCreators as doActionCreators } from './track';

// Actions
const ME_SET = 'auth/ME_SET';

// Action Creators
function doSetMe(user) {
  return {
    type: ME_SET,
    user,
  };
}

function doFetchMe(session) {
  return function(dispatch) {
    fetch(`//api.soundcloud.com/me?oauth_token=${session.oauth_token}`)
      .then(response => response.json())
      .then(data => {
        dispatch(doSetMe(data));
      });
  };
}

function doFetchStream(session) {
  return function(dispatch) {
    fetch(
      `//api.soundcloud.com/me/activities?limit=20&offset=0&oauth_token=${
        session.oauth_token
      }`,
    )
      .then(response => response.json())
      .then(data => {
        const normalized = normalize(
          map(data.collection, 'origin'),
          arrayOf(trackSchema),
        );
        dispatch(
          doActionCreators.doSetTracks(
            normalized.entities.tracks,
            normalized.result,
          ),
        );
      });
  };
}

function doAuth() {
  return function(dispatch) {
    SC.connect().then(session => {
      dispatch(doFetchMe(session));
      dispatch(doFetchStream(session));
    });
  };
}

// Reducer
const initialState = {};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ME_SET:
      return applySetMe(state, action);
  }
  return state;
}

function applySetMe(state, action) {
  const { user } = action;
  return { ...state, user };
}

const actionCreators = {
  doAuth,
};

const actionTypes = {
  ME_SET,
};

export { actionCreators, doAuth };

export default reducer;
