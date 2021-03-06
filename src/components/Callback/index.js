import React from 'react';
import QueryString from 'query-string';

class Callback extends React.Component {
  constructor(props) {
    super(props);
    this._handleAuthCallback = this.handleAuthCallback(this.props.dispatch);
  }

  componentDidMount() {
    window.setTimeout(this._handleAuthCallback, 1);
  }

  handleAuthCallback(dispatch) {
    const queryString = QueryString.parse(location.hash);

    if (queryString.error) {
      console.log('Spotify access request has been denied' + queryString.error);
    } else {
      // We should get below
      //   access_token
      //   token_type
      //   expires_in
      //   state
      opener.spotifyApi.setAccessToken(queryString.access_token);
      opener.onAuth();
    }
    window.close();
  }

  render() {
    <div>
      <p>From Musyc: This page should close soon...</p>
    </div>;
  }
}

export default Callback;
