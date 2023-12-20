import React from 'react'
import carrito from '../assets/carrito.svg'

const img = {
  backgroundColor: 'white',
  borderRadius: 20,
  width: 50,
  height: 30
}

const div = {
  position: 'relative',
}

const span = {
  position: 'absolute',
  backgroundColor: 'red',
  borderRadius: 50,
  width: 20,
  height: 20,
  display: 'flex',
  justifyContent: 'center',
  top: -8,
  right: -8,
}

const CartWidget = ({contador}) => {
  return (
    <div style={div}>
      <img style={img} src={carrito} alt="" />
      <p style={span}>{contador}</p>
    </div>
  )
}

export default CartWidget