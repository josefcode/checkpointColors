//Este componente deverá receber dados por Props e mostrar as Informações em Tela
import {  styled } from '@mui/system';


const Root = styled('div')({
  width: "350px",
  borderRadius: '5px',
  height: "8rem",
  padding: '10px'
})
const Title = styled('h1')({
  textTransform: 'uppercase',
  fontStyle: 'normal',
  fontWeight: 900,
  fontSize: '20px',
  color: '#fbe698',
  margin: 0
})

const TextPosition = styled('div')({
  position: 'relative',
  top: '80px',
  left: '5px'
})

const Paragraph = styled('p')({
  margin: 0,
  color: '#fbe698',
})
     

export function Card ({name, color}) {
  return (
   
    <Root style = {{background: color}}>
      <TextPosition >
     <Paragraph>{name}</Paragraph>
     <Title>{color}</Title>
     </TextPosition>
    </Root>
  
 

  )
}