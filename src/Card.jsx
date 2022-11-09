//Este componente deverá receber dados por Props e mostrar as Informações em Tela
import {  styled } from '@mui/system';


const Root = styled('div')({
  width: "350px",
  borderRadius: '5px',
  height: "8rem",
  padding: '10px'
})

export function Card ({name, color}) {
  return (
   
    <Root style = {{background: color}}>
     <p>{name}</p>
     <p>{color}</p>
    </Root>
  
 

  )
}