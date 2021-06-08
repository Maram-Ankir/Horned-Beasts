import { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class SelectedBeast extends Component {
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.close}>
          <Modal.Header>
            <Modal.Title>{this.props.title}</Modal.Title>
            <span className="close" onClick={this.props.close}>
              &times;
            </span>
          </Modal.Header>

          <Modal.Body>
            <Card style={{ width: "100%" }} bg="dark" text="light">
              <Card.Img
                variant="top"
                src={this.props.selectedBeast.image_url}
                className="cardImg"
              />
              <Card.Body>
                <Card.Title>{this.props.selectedBeast.title}</Card.Title>
                <Card.Text>{this.props.selectedBeast.description}</Card.Text>
              </Card.Body>
            </Card>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.close}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;