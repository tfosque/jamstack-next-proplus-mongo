import { Component } from "react";
const { faCartArrowDown } = require("@fortawesome/free-solid-svg-icons");
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");
const { Card, Image, Row, Col, Spinner } = require("react-bootstrap");

/* TODO: This should be a dummy component and make use of useEffect */
class ProductGallery extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false, products: [] };
  }

  componentDidMount() {
    // this.props.fetchProducts()
    console.log("prps:", this.props);
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.products !== prevState.products) {
      // console.log({nextProps}, {prevState})
      return {
        loaded: true,
        products: nextProps.products,
      };
    }
    return null;
  }
  render() {
    console.log(this.state)
    const SpinnerWidget = () => {
      return (
        <Col lg="12" className="text-secondary text-center mt-5">
          <Spinner size="lg" animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Col>
      );
    };
    const Gallery = () => {
      return this.props.products.map((m, i) => {
        return (
          <Col lg="3" className="mb-2" key={i}>
            <Card>
              <Card.Body>
                {m.product.name}
                <Image src={m.product.url} thumbnail />
              </Card.Body>
            </Card>
          </Col>
        );
      });
    };

    return (
      <div>
        <div className="mb-4 text-secondary">
          <FontAwesomeIcon icon={faCartArrowDown} />
          &nbsp; Available Products
        </div>

        <Row>{this.state.loaded ? <Gallery /> : <SpinnerWidget />}</Row>
      </div>
    );
  }
}
export default ProductGallery;
