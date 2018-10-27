import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col
} from "reactstrap";

class PlannerImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleModalToggle = (e, props) => {
    this.props.handleNoteAdd(e, props)
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {      
    return (
      <Col sm="4">
        <img
          onClick={this.toggle}
          src={this.props.images}
          alt="thumb"
          className="img-thumbnail"
        />
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>{this.props.name}</ModalHeader>
          <ModalBody>
           Lorem
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={(e) => this.handleModalToggle(e,this.props)}>
              Add to notepad
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Col>
    );
  }
}

export default PlannerImageCard;
