import { Card } from 'react-bootstrap'

const CartItem = (props) => {
  // console.log('cart-item', {props})
  return (
    <Card className='mb-3'>
      <Card.Body>{props.item.name}</Card.Body>
    </Card>
  )
}
export default CartItem