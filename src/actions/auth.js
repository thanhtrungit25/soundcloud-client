import * as actionTypes from '../constants/actionTypes';
import { setTracks } from './track';

function setMe(user) {
  return {
    type: actionTypes.ME_SET,
    user,
  };
}

export function auth() {
  return function(dispatch) {
    dispatch(fetchMe(window.spotifyApi));
    dispatch(fetchStream(window.spotifyApi));
  };
}

function fetchMe(spotifyApi) {
  return function(dispatch) {
    spotifyApi.getMe().then(
      function(data) {
        console.log(data);
        dispatch(setMe(data.body));
      },
      function(err) {
        console.log(err);
      },
    );
  };
}

function fetchStream(spotifyApi) {
  return function(dispatch) {
    spotifyApi.getMySavedTracks().then(
      function(data) {
        console.log(data);
        dispatch(setTracks(data.body.items));
      },
      function(err) {
        console.error(err);
      },
    );
  };
}
