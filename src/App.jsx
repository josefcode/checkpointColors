
import {useState} from 'react'
import {  styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { Card } from './Card'

// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente
const Root = styled('div')({
  marginTop: '5rem',
  })
const RootHeader = styled('div')({

width: '1200px',
height: '209px',
background: '#F4EBD0',
borderRadius: '12px',
padding: '2rem'
})

const Title = styled('h1')({
  postion: 'relative',
  textTransform: 'uppercase',
  width: '464px',
  height: '60px',
  left: '32px',
  top: '116px',
  fontStyle: 'normal',
  fontWeight: 900,
  fontSize: '30px',
  lineHeight: '60px',
  color: 'orange',
})

const Input = styled(TextField)({
  width: '600px',
  height: '48px',
})
const ButtonSubmit = styled(Button)({
  float: 'right',
  width: '200px',
  height: '37px',
  background: '#36CE7C',
  borderRadius: '8px',
  flexFlow: 'end'
})

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
const [color, setColor] = useState('')
const [name, setName] = useState('')
const [card, setCard] = useState([{name:"", color: ''}])


function handleChangeColor(e){
  setColor(e.target.value)
}
function handleChangeName(e){
  setName(e.target.value)
}

function submit(e){
  e.preventDefault()
  setCard(prev => [...prev, { name, color}])
  setColor('')
  setName('')
}
console.log(card)

  return (
    <Root className="App">
      <RootHeader>
     <Title>Carga de estudiantes</Title>
     <form style = {{width: '1200px'}} onSubmit = {submit}>
      <div style ={{display: 'flex', gap: '10px', marginBottom: '20px'}}>
      <Input 
      type="text" 
      label = "name"
      value = {name || ''}
      sx={{ input: { color: "grey" }, "label": {color: "grey"} }} 
      onChange = {handleChangeName}
      />
      <Input 
      type="text" 
      label = "color"
      value={color || ''}
      sx={{ input: { color: "grey" }, "label": {color: "grey"} }} 
      onChange = {handleChangeColor}
      />
      </div>
      <ButtonSubmit variant="contained" type = 'submit' >Submit</ButtonSubmit>
     </form>
     </RootHeader>
      {
        card.map(item => <Card key = {item.name} name = {item.name} color = {item.color} />)
      }
    </Root>
  )
}

export default App