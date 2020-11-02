import { Component } from "react";
const { Card } = require("react-bootstrap");
import Checked from "./checked";
import { isEmpty } from "lodash";

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = { cardBorder: {} };
    this.toggleCardBorder = this.toggleCardBorder.bind(this);
    this.handleClick = this.handleClick.bind(this)
  }
  toggleCardBorder() {
    // console.log("toggle:isEmpty", isEmpty(this.state.cardBorder));
    this.setState({
      cardBorder: isEmpty(this.state.cardBorder)
        ? { border: "solid thick #007bff", borderRadius: "9px" }
        : this.state.cardBorder ===
          { border: "solid thick #007bff", borderRadius: "9px" }
        ? {}
        : {},
    });
  }
  addToSelected() {
    // console.log('state:', this.ProductsState)
  }
  handleClick() {
    this.toggleCardBorder()
    this.addToSelected()
  }
  render() {
    const m = this.props.product;
    return (
      <Card onClick={this.handleClick} style={this.state.cardBorder}>
        <Card.Img variant="top" src={m.product.url} />
        <Card.Body>
          <Card.Title>{m.product.name}</Card.Title>
          <Card.Text>{m.details.substring(0, 22)}</Card.Text>
          <Checked />
        </Card.Body>
      </Card>
    );
  }
}
export default ProductCard;
