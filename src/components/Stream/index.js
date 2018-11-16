import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { actionCreators as authActionCreators } from '../../ducks/auth';
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
    onPlay: bindActionCreators(actions.playTrack, dispatch),
    onLike: bindActionCreators(actions.likeTrack, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Stream);
