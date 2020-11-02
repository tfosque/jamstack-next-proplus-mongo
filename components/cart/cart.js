import CartMenu from "../cart/cart-menu";
import { Col, Row } from "react-bootstrap";
import OrderSummary from "./cart-summary";
import { useRouter } from 'next/router'
import CartItem from './cart-item'

const Cart = (props) => {
  // console.log('cart', { props });

  const router = useRouter();
  // const dev = process.env.NODE_ENV !== 'production';

  return (
    <Row>
      <Col lg="9">
        <CartMenu />
        <div className="mt-5 mb-4">
          {props.items.map((item, i) => {
             return(
                <CartItem key={i} item={item} />
             )           
          })}
        </div>  
      </Col>
      <Col lg="3">
        <OrderSummary />
      </Col>
    </Row>  
  );
};
export default Cart;
