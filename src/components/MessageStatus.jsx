import React from 'react'

const MessageStatus = ({winner,current}) => {

  // const message = winner
  //   ? `Winner is ${winner}`
  //   : `Next Player is ${current.isXNext ? 'X' : 'O'}`;
  const noMovesLeft= current.board.every(el=>
    el !==null);
  return (
    <h2>
     { winner && `Winner is ${winner}` }
     { !winner && !noMovesLeft && `Next Player is ${current.isXNext ? 'X' : 'O'}`}
     { !winner && noMovesLeft && 'DRAW' }
    </h2>
  )
}

export default MessageStatus