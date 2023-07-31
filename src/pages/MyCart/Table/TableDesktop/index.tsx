import { Container } from './styles'

import { currencyFormat } from '../../../../helpers/currencyFormat'
import { useCart } from '../../../../hooks/useCart'
import { ConfirmOrder } from '../../../../components/ConfirmOrder'

import minusImg from '../../../../assets/circle-minus.svg'
import plusImg from '../../../../assets/circle-plus.svg'

import { FaTrashAlt } from 'react-icons/fa'

export function TableDesktop() {
  const { cart, snackCartDecrement, snackCartIncrement, removeSnackFromCart } = useCart()

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Produto</th>
            <th>QTD</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={`${item.name}`}>
              <td>
                <img src={item.image} />
              </td>
              <td>
                <h4>{item.name}</h4>
                <span>{currencyFormat(item.price)}</span>
              </td>
              <td>
                <div>
                  <button type='button' onClick={() => snackCartDecrement(item)}>
                    <img src={minusImg} alt='Remover quantidade' />
                  </button>
                  <span>{`${item.quantity}`.padStart(2, '0')}</span>
                  <button type='button' onClick={() => snackCartIncrement(item)}>
                    <img src={plusImg} alt='Adicionar quantidade' />
                  </button>
                </div>
              </td>
              <td>
                <h5>{currencyFormat(item.price * item.quantity)}</h5>
              </td>
              <td>
                <button type='button' onClick={() => removeSnackFromCart(item)}>
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ConfirmOrder />
    </Container>
  )
}
