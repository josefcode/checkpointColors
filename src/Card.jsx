//Este componente deverá receber dados por Props e mostrar as Informações em Tela
import {  styled } from '@mui/system';

const Root = styled('div')({
  width: "200px",
  borderRadius: '3px',
  backgroundColor: 'green'
})

export function Card ({name, color}) {
  return (
    <Root style = {{background: color}}>
     <h1>{name}</h1>
     <span>{color}</span>
    </Root>
  )
}