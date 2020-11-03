import { Component } from "react";
import Cart from "../components/cart/cart";
import { Container, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import ProductGallery from "../components/shared/products/product-gallery";


/* Cart Container */
class CartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { cart: [], products: [] };
  }
  componentDidMount() {
    this.getCartItems();
    this.getProducts();
    /* TODO: Revisit */
    this.setState({
      apiPrefix:
        process.env.NODE_ENV === "development" ? "localhost:3003/" : "/",
    });
  }
  getCartItems() {
    axios
      .get("/api/cartitems")
      .then((res) => {
        try {
          res.status === 200 ? this.setState({ cart: res.data }) : null;
        } catch (err) {
          console.log(err);
        }
      })
      .catch((err) => console.log(err));
  }
  async getProducts() {
    await axios
      .get("/api/products")
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
          {/* Shopping Cart */}
          <Cart items={this.state.cart} />
          {/* Product Gallery */}
          <Col lg="9">
            <hr />
            <ProductGallery products={this.state.products} />
          </Col>
        </Container>
        
      </div>
    );
  }
}
export default CartContainer;
