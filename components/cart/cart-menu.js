import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav, ButtonGroup, Button } from "react-bootstrap";
import { faCaretDown, faPrint, faRedoAlt } from '@fortawesome/free-solid-svg-icons';

const CartMenu = (props) => {
  // console.log(props.item);
  return (
   <ButtonGroup size="sm" className="float-right">
     <Button variant="primary">Add Product <FontAwesomeIcon icon={faCaretDown} /></Button>
     <Button variant="primary">Pick From Template <FontAwesomeIcon icon={faCaretDown} /></Button>
     <Button variant="primary">Update Cart &nbsp;<FontAwesomeIcon icon={faRedoAlt} /></Button>
     <Button variant="primary">Print &nbsp;<FontAwesomeIcon icon={faPrint} /></Button>
   </ButtonGroup>
  );
};
export default CartMenu;

{/* <Nav defaultActiveKey="/add-product" as="ul" className="justify-content-end">
<Nav.Item as="li">
  <Nav.Link href="/add-product">Add Product</Nav.Link>
</Nav.Item>
<Nav.Item as="li">
  <Nav.Link eventKey="pick-from-template">Pick From Template</Nav.Link>
</Nav.Item>
<Nav.Item as="li">
  <Nav.Link eventKey="update-cart">Update Cart</Nav.Link>
</Nav.Item>
</Nav> */}