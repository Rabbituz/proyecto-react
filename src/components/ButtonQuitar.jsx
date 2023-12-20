import React from 'react'
import {useState} from 'react'

const button = {
    cursor: 'pointer',
    width: 30
}

const flexbutton = {
  display: 'flex',
  justifyContent: 'space-between',
  rowGap: '20'
}

const ButtonQuitar = ({onrestar, onsumar}) => {

  return (
    <div>
        <div style={flexbutton}>
          <button style={button} onClick={onrestar}>-</button>
          <button style={button} onClick={onsumar}>+</button>
        </div>
        <p>Agregar al carrito </p>
    </div>
  )
}

export default ButtonQuitar