import { NavDropdown, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faReply,
  faGlobe,
  faShoppingCart,
  faDivide,
} from "@fortawesome/free-solid-svg-icons";
import UserLoggedIn from "../components/userLoggedIn";

const ProplusNavbar = () => {
  return (
    <div>
      <Navbar
        bg="light"
        variant="light"
        style={{ margin: "0px", padding: "0px" }}
      >
        <Nav.Link>
          <UserLoggedIn />
        </Nav.Link>
      </Navbar>
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
        <Nav.Link href="/"><FontAwesomeIcon icon={faReply} /></Nav.Link>
          <Nav.Link href="#home">Beacon</Nav.Link>
          <Nav.Link href="#link" active>
            Beacon Pro+
          </Nav.Link>
          <Nav.Link href="#link">Beacon 3D+</Nav.Link>
        </Nav>

        <Nav className="ml-auto">
          <Nav.Link href="/orders">Order History</Nav.Link>
          <Nav.Link href="/templates">Templates</Nav.Link>
          <Nav.Link href="/cartContainer">
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
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="My Pro+ Tools" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </div>
  );
};

export default ProplusNavbar;
