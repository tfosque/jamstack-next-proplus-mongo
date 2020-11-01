import { Component } from "react";
import Cart from "../components/cart/cart";
import { Container, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

/* Cart Container */
class CartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { cart: [], products: [] };
  }
  componentDidMount() {
   this.getCartItems();
   this.getProducts();
  }
  componentDidUpdate() {
    console.log(this.state)
  }
  getCartItems() {
    axios
    .get("http://localhost:3003/api/cartitems")
    .then((res) => {
      try {
        res.status === 200 ? this.setState({ cart: res.data }) : null;
      } catch (err) {
        console.log(err);
      }
    })
    .catch((err) => console.log(err));
  }
  getProducts() {
    axios
    .get("http://localhost:3003/api/products")
    .then((res) => {
      try {
        res.status === 200 ? this.setState({ products: res.data }) : null;
      } catch (err) {
        console.log(err);
      }
    })
    .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <Col lg="12" className="mb-3">
          <h4>
            <FontAwesomeIcon icon={faShoppingCart} />
            &nbsp;Shopping Cart
          </h4>
        </Col>
        <Container>
          <Cart items={this.state.cart} />
        </Container>
      </div>
    );
  }
}
export default CartContainer;
