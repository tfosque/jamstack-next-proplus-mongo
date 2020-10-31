import { Component } from "react";
import Cart from "../components/cart";

/* Cart Container */
class CartContainer extends Component {
  render() {
    return (
      <div>
        <Cart items='My items' />
      </div>
    );
  }
}
export default CartContainer