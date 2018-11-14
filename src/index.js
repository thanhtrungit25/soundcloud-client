import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import * as actions from './actions';
import Stream from './components/Stream';

const tracks = [
  {
    id: 1,
    title: 'Em của ngày hôm qua',
  },
  {
    id: 2,
    title: 'Cơn mưa ngang qua',
  },
];

const store = configureStore();
store.dispatch(actions.setTracks(tracks));

ReactDOM.render(<Stream />, document.getElementById('app'));
