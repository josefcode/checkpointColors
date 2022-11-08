
import {  styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente
const Root = styled('div')({
marginTop: '5rem',
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


  return (
    <Root className="App">
     <Title>Carga de estudiantes</Title>
     <form style = {{width: '1200px'}}>
      <div style ={{display: 'flex', gap: '10px', marginBottom: '20px'}}>
      <Input 
      type="text" 
      label = "name"
     
      sx={{ input: { color: "grey" }, "label": {color: "grey"} }} 
      />
      <Input 
      type="text" 
      label = "color"
      
      sx={{ input: { color: "grey" }, "label": {color: "grey"} }} 
      />
      </div>
      <ButtonSubmit variant="contained" >Submit</ButtonSubmit>
     </form>
    </Root>
  )
}

export default App