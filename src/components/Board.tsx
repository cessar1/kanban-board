import React from 'react'

interface BoardProps {
  children: React.ReactNode
}

function Board ({ children }: BoardProps) {
  return (
    <div className="board">
      {children}
    </div>
  )
}

export default Board
