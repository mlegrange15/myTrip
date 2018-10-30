import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Button,
  ListGroup,
  ListGroupItem,
  Col,
  Row,
  Modal,
  ModalFooter,
  ModalHeader,
  ModalBody
} from "reactstrap";

class Itinerary extends Component {
  state = {};

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

  render() {
    const itineraryChecklist = ["Flight", "Hotel", "Car", "Activities"];
    return (
      <Col sm="12">
        <Card className="bg-light mb-3">
          <CardBody>
            <CardTitle>Itinerary</CardTitle>
            <CardText>Get Booking </CardText>
            <ListGroup>
              {itineraryChecklist.map((item, i) => {
                return (
                  <ListGroupItem key={i}>
                    {item}
                    <Button className="btn-sm btn-secondary float-right ml-3">
                      Skip
                    </Button>
                    <Button onClick={this.toggle} color="primary" className="btn-sm float-right">
                      Book
                    </Button>

                    <Modal
                      isOpen={this.state.modal}
                      toggle={this.toggle}
                      className={this.props.className}
                    >
                      <ModalHeader toggle={this.toggle}>
                        {this.props.name}
                      </ModalHeader>
                      <ModalBody>
                        <Row className="mb-3">
                          <b>Price: </b>
                        </Row>
                        <Row className="mb-3">
                          <b>Details: </b> 
                        </Row>
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          color="primary"
                          // onClick={e => this.handleModalToggle(e, this.props)}
                        >
                          Add to Itinerary
                        </Button>{" "}
                        <Button color="secondary" onClick={this.toggle}>
                          Cancel
                        </Button>
                      </ModalFooter>
                    </Modal>
                  </ListGroupItem>
                );
              })}
            </ListGroup>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default Itinerary;
