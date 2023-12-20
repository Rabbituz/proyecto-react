import React from 'react'
import Titulo from './Titulo'
import CartWidget from './CartWidget'
import NavBarList from './NavBarList'

const estiloNav = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: 20,
  borderRadius: 30,
  boxShadow: '26px 0px 101px 0px gray',
  alignItems: 'center'
}

const NavBar = ({contador}) => {
  return (
    <div style={estiloNav}>
        <Titulo/>
        <NavBarList/>
        <CartWidget contador={contador} />
    </div>
  )
}

export default NavBar