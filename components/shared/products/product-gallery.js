const { faCartArrowDown } = require("@fortawesome/free-solid-svg-icons");
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");
const { Card, Image, Row, Col } = require("react-bootstrap");

const ProductGallery = (props) => {
  console.log("gallery:", props);
  return (
    <div>
      <div className="mb-4 text-secondary">
        <FontAwesomeIcon icon={faCartArrowDown} />
        &nbsp; Available Products
      </div>
      <Row>
        {props.products.map((m) => {
          return (
            <Col lg="3" className="mb-2">
              <Card>
                <Card.Body>
                  {m.product.name}
                  <Image src={m.product.url} thumbnail />
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default ProductGallery;
