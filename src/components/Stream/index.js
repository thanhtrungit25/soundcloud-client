import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators as authActionCreators } from '../../ducks/auth';
import { actionCreators as trackActionCreators } from '../../ducks/track';
import Stream from './presenter';

function mapStateToProps(state) {
  const { user } = state.auth;
  const { trackEntities, trackIds, activeTrackId } = state.track;
  return {
    user,
    trackEntities,
    trackIds,
    activeTrackId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAuth: bindActionCreators(authActionCreators.doAuth, dispatch),
    onPlay: bindActionCreators(trackActionCreators.doPlayTrack, dispatch),
    onLike: bindActionCreators(trackActionCreators.doLikeTrack, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Stream);
