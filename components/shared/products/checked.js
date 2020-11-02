import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Card } from "react-bootstrap";

class Checked extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: "text-secondary" };
    this.toggleChecked = this.toggleChecked.bind(this)
  }
  toggleChecked() {
    this.setState({
      checked:
        this.state.checked === "text-secondary"
          ? "text-primary"
          : this.state.checked === "text-primary"
          ? "text-secondary"
          : "text-primary",
    });
  }
  render() {
    return (
      <Card.Link onClick={this.toggleChecked}>
        <FontAwesomeIcon
          style={{ cursor: 'pointer' }}
          className={`${this.state.checked} float-right`}
          icon={faCheckCircle}
        />
      </Card.Link>
    );
  }
}
export default Checked;
