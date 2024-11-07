import React from 'react';
import { useState } from 'react';
import './App.css';

interface SquareProp {
  valueSquare: string
}

function Square({valueSquare}) {

  const [value, setValue] = useState<string | null>(null);

  function handleClick() {
    setValue('X');
  }

  return (
    <>
      <button className='square' onClick={handleClick}>{valueSquare}</button>
    </>
  )
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <>
      <div className='board-row'>
        <Square value={squares[0]}/>
        <Square value={squares[1]}/>
        <Square value={squares[2]}/>
      </div>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}