import React from 'react';
import Board from './components/Board';
import './styles/root.scss';

export default function () {
  return (
    <div className="app">
      <h1> TIC TAC TOE </h1>
      <Board />
    </div>
  );
}
