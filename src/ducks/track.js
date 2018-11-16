// track
import { findIndex } from 'lodash';

// Actions
const TRACKS_SET = 'TRACKS_SET';
const TRACK_PLAY = 'TRACK_PLAY';
const TRACK_LIKE = 'TRACK_LIKE';

function doSetTracks(trackEntities, trackIds) {
  return {
    type: TRACKS_SET,
    trackEntities,
    trackIds,
  };
}

function doPlayTrack(trackId) {
  return {
    type: TRACK_PLAY,
    trackId,
  };
}

function doLikeTrack(trackId) {
  return {
    type: TRACK_LIKE,
    trackId,
  };
}

// reducer
const initialState = {
  trackEntities: {},
  trackIds: [],
  activeTrackId: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TRACKS_SET:
      return applySetTracks(state, action);
    case actionTypes.TRACK_PLAY:
      return applySetPlay(state, action);
    case actionTypes.TRACK_LIKE:
      return applySetLike(state, action);
  }
  return state;
}

function applySetTracks(state, action) {
  const { trackEntities, trackIds } = action;
  return { ...state, trackEntities, trackIds };
}

function applySetPlay(state, action) {
  const { trackId } = action;
  return { ...state, activeTrackId: trackId };
}

function applySetLike(state, action) {
  const { trackId } = action;
  const newTrack = {
    ...state.trackEntities[trackId],
    user_favorite: !state.trackEntities[trackId].user_favorite,
  };

  return {
    ...state,
    trackEntities: { ...state.trackEntities, [trackId]: newTrack },
  };
}

const actionCreators = {
  doSetTracks,
  doPlayTrack,
  doLikeTrack,
};

const actionTypes = {
  TRACKS_SET,
  TRACK_PLAY,
  TRACK_LIKE,
};

export { actionCreators, actionTypes };

export default reducer;
