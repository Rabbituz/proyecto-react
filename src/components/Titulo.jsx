import React from 'react'
import logo from '../assets/logo.png'

const logoimg = {
  width: 50,
}

const Titulo = () => {
  return (
    <div>
      <a href="#"><img style={logoimg} src={logo} alt="" /></a>
    </div>
  )
}

export default Titulo