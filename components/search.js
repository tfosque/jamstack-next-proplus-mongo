import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Nav, InputGroup, FormControl } from "react-bootstrap";
import UserLoggedIn from "../components/userLoggedIn";

const SearchBar = () => {
  return (
    <Navbar bg="light">
      <Nav className="mr-auto">
        <UserLoggedIn />
      </Nav>
      <Nav className="ml-auto">
        <InputGroup className="mb-0">
          <FormControl aria-label="Amount (to the nearest dollar)" />
          <InputGroup.Append>
            <InputGroup.Text><FontAwesomeIcon icon={faFilter} /></InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </Nav>
    </Navbar>
  );
};

export default SearchBar;
