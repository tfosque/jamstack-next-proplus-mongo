import { NavDropdown, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faReply,
  faShoppingCart,
  faDivide,
} from "@fortawesome/free-solid-svg-icons";

const ProplusNavbar = () => {
  return (
    <div>
      <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <Nav className="mr-auto">
          <Nav.Link href="/">
            <FontAwesomeIcon icon={faReply} />
          </Nav.Link>
          <Nav.Link href="#home">Beacon</Nav.Link>
          <Nav.Link href="#link" active>
            Beacon Pro+
          </Nav.Link>
          <Nav.Link href="#link">Beacon 3D+</Nav.Link>
        </Nav>

        <Nav className="ml-auto">
          <Nav.Link href="/orders">Order History</Nav.Link>
          <Nav.Link href="/templates">Templates</Nav.Link>
          <Nav.Link href="/cart">
            <span
              style={{
                background: "#007bff",
                padding: "6px 8px",
                borderRadius: "4px",
                color: "#fff",
              }}
            >
              <FontAwesomeIcon icon={faShoppingCart} />
              &nbsp; Cart
            </span>
          </Nav.Link>
        </Nav>
        <Nav className="">
          <NavDropdown title="My Account" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Address Book</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Accounts</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Personal Profile
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Change Password{" "}
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Save Orders</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Delivery Tracking
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              <FontAwesomeIcon icon={faSignOutAlt} />
              &nbsp;Logout
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Pro+ Tools" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              Promotion Tracker
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Online Bill Pay
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Perfect Order</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Quotes</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Storm+</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Beacon 3D+</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </div>
  );
};

export default ProplusNavbar;
