import React from 'react';
import ReactDOM from 'react-dom';
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

ReactDOM.render(<Stream tracks={tracks} />, document.getElementById('app'));
