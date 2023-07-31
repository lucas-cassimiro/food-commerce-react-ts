import { Container, Button } from './styles'

import CartEmpty from '../../assets/man-and-burger.svg'

interface EmptyCartProps {
  title: string
}

export function EmptyCart({ title }: EmptyCartProps) {
  return (
    <Container>
      <h2>{title}</h2>
      <Button to='/'>Checar o cardápio</Button>
      <img src={CartEmpty} alt='Homem com hambúrguer' />
    </Container>
  )
}
