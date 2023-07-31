import { Head } from '../../components/Head'
import { OrderHeader } from '../../components/OrderHeader'
import Screens from './Table'
import { Container } from './styles'

export default function MyCart() {
  return (
    <Container>
      <Head title='Carrinho' />
      <OrderHeader />
      <Screens/>
    </Container>
  )
}
