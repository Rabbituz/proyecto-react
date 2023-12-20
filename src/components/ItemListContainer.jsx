import React, {useState} from 'react'
import ButtonQuitar from './ButtonQuitar'


const buttons = {
  display:'flex',
  columnGap: 15,
}

const containerList = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: 20,
  fontSize: 30
}


const ItemListContainer = ({onsumar, onrestar, greeting}) => {

  const [inputValue, setInputValue] = useState()
  const [displayText, setDisplayText] = useState()

  const onvalue = (event) => {
    setInputValue(event.target.value)
  }

  const clicktext = () => {
    setDisplayText(inputValue)
  }
  

  const [mostrardiv, setMostrarDiv] = useState(false)

  const clickMostrar = () => {
    setMostrarDiv(true)
  }

  const clickOcultar = () => {
    setMostrarDiv(false)
  }

  return (
    <div style={containerList}>
      <p>{greeting}</p>
      <div style={buttons}>
        <ButtonQuitar onsumar={onsumar} onrestar={onrestar}/>
      </div>

      <div>
        <input type="text" value={inputValue} onChange={onvalue} placeholder='Escribe algo'/>
        <button onClick={clicktext}>Click</button>
        <p>{displayText}</p>
      </div>

      <div>
        <p onClick={clickMostrar} style={{cursor: 'pointer'}}>Mostrar Div</p>
        <p onClick={clickOcultar} style={{cursor: 'pointer'}}>Ocultar Div</p>
        {mostrardiv &&<div style={{backgroundColor: 'gray'}}>Hola</div>}
      </div>
    </div>
  )
}

export default ItemListContainer