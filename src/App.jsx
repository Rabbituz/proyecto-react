import { useState } from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'


function App() {
  const [contador, setContador] = useState(0)

  const sumar = () => {
    setContador(contador + 1)
  };

  const restar = () => {
    setContador(contador - 1)
  }

  const styles = {
    padding: 20
  }

  return (
    <div style={styles}>
      <NavBar contador={contador}/>
      <ItemListContainer onsumar={sumar} onrestar={restar} greeting='Bienvenido a mi tienda'/>
    </div>
  )
}

export default App
