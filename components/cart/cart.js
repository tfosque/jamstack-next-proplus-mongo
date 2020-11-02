import CartMenu from "../cart/cart-menu";
import { Col, Row } from "react-bootstrap";
import OrderSummary from "./cart-summary";
import { useRouter } from 'next/router'
import CartItem from './cart-item'

const Cart = (props) => {
  // console.log('cart', { props });
  // var settings = require("settings");

  const router = useRouter();
  const dev = process.env.NODE_ENV !== 'production';

  console.log('router:', router.pathname)
  console.log('process.env:', process.env.NODE_ENV);
  console.log('dev:', dev)
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
