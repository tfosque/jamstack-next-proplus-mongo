import { Col, ListGroup, ListGroupItem } from "react-bootstrap";

const OrderSummary = (props) => {
  // console.log('summary', { props });
  return (
    <div>
      <ListGroup>
        <ListGroupItem>
          <b>Order Summary</b>
        </ListGroupItem>
        <ListGroupItem>Subtotal: 0</ListGroupItem>
        <ListGroupItem>Other Charges: 0</ListGroupItem>
        <ListGroupItem>Tax: 0</ListGroupItem>
        <ListGroupItem>Total: 0</ListGroupItem>
      </ListGroup>
    </div>
  );
};
export default OrderSummary;
