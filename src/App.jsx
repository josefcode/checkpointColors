
import {useState} from 'react'
import {  styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { Card } from './Card'

// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente
const Root = styled('div')({
  width: '800px',
  marginTop: '5rem',
  paddingInlineEnd: '20px',
  paddingBlockStart: '20px',
  })

const RootFormHeader = styled('div')({
height: '209px',
background: '#bcece0',
borderRadius: '12px',
padding: '20px'
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
  color: '#4C5270',
})

const Input = styled(TextField)({
  width: '100%',

})

const ButtonSubmit = styled(Button)({
 float: 'right',
  width: '200px',
  height: '35px',
  background: '#f652a0',
  borderRadius: '8px',
})

const RootCard = styled('div')({
  display: 'flex',
  gap: '58px',
  flexWrap: 'wrap'
})


function App() {

const [color, setColor] = useState('')
const [name, setName] = useState('')
const [card, setCard] = useState([])


function handleChangeColor(e){
  setColor(e.target.value)
}

function handleChangeName(e){
  setName(e.target.value)
}

function submit(e){
  e.preventDefault()

  const list = {name, color}
  setCard(prev => [...prev, list])

  setColor('')
  setName('')
}


  return (
    
  <Root className="App">

    <RootFormHeader>

     <Title>Carga de estudiantes</Title>

      <form  onSubmit = {submit}>

          <div style ={{display: 'flex', gap: '10px', marginBottom: '20px'}}>

                <Input 
                type="text" 
                label = "name"
                value = {name || ''}
                sx={{ input: { color: "grey" }, "label": {color: "grey"} }} 
                onChange = {handleChangeName}
                size="small"
                />
                <Input 
                type="text" 
                label = "color"
                value={color || ''}
                sx={{ input: { color: "grey" }, "label": {color: "grey"} }} 
                onChange = {handleChangeColor}
                size="small"
                />

          </div>

      <ButtonSubmit variant="contained" type = 'submit' >Submit</ButtonSubmit>

     </form>

  </RootFormHeader>

     <Title>Cores favoritas</Title>

     <RootCard>
      {
        card.map(item => <Card key = {item.name} name = {item.name} color = {item.color} />)
      }
      </RootCard>

    </Root>
  )
}

export default App