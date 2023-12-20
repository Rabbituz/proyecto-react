import React from 'react'
import '../css/NavBarList.css'

const lu = {
    listStyle: 'none',
    display: 'flex',
    columnGap: 20,
    fontSize: 18,
}

const li = {
  cursor: 'pointer',

  ':hover': {
    color: 'red',
  }
}



const NavBarList = () => {
  return (
    <ul style={lu}>
       <li style={li}>Servicios</li>
       <li style={li}>Tos</li>
       <li style={li}>Sobre Nosotros</li>
       <li style={li}>Contacto</li>
    </ul>
  )
}

export default NavBarList