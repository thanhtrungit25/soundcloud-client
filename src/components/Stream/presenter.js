import React from 'react';

function Stream({ user, tracks = [], onAuth }) {
  return (
    <div>
      <div>
        {user ? (
          <div>{user.username}</div>
        ) : (
          <button onClick={onAuth} type="button">
            Login
          </button>
        )}
      </div>
      {tracks.map((track, key) => {
        return (
          <div className="track" key={key}>
            {track.title}
          </div>
        );
      })}
    </div>
  );
}

export default Stream;
