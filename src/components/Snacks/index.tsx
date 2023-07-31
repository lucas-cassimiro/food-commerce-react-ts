import { FiPlus } from 'react-icons/fi'

import { Container } from './styles'

import { currencyFormat } from '../../helpers/currencyFormat'

import { SnackData } from '../../interfaces/SnackData'
import { useCart } from '../../hooks/useCart'

interface SnacksProps {
  snacks: SnackData[]
}

export function Snacks({ snacks }: SnacksProps) {
  const { cart, addSnackIntoCart } = useCart()

  return (
    <Container>
      {snacks.map((snack) => {
        const snackExistent = cart.find(
          (item) => item.id === snack.id && item.snack === snack.snack,
        )
        return (
          <div key={snack.id} className='snack'>
            {snackExistent && <span>{snackExistent.quantity}</span>}
            <h2>{snack.name}</h2>
            <img src={snack.image} alt={snack.name}></img>
            <p>{snack.description}</p>
            <div>
              <strong>{currencyFormat(snack.price)}</strong>
              <button type='button' onClick={() => addSnackIntoCart(snack)}>
                <FiPlus />
              </button>
            </div>
          </div>
        )
      })}
    </Container>
  )
}
