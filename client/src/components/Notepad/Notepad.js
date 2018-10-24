import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Button,
  ListGroup,
  ListGroupItem
} from "reactstrap";

class Notepad extends Component {
  render() {
    return (
      <Card className="bg-dark mb-3">
        <CardBody>
          <CardTitle className="text-white">
            {this.props.city} Trip Notepad
          </CardTitle>
          <CardText className="text-white">
            You're favorites and trip notes go here.
          </CardText>
          <ListGroup>
            {this.props.notes.map((note, i) => {
              return (
                <ListGroupItem key={i} id={i}>
                  {note}
                  <Button
                    className="btn-sm btn-danger float-right"
                    key={i}
                    id={i}
                    onClick={(e) => this.props.handleNoteRemove(e,note)}
                  >
                    X
                  </Button>
                </ListGroupItem>
              );
            })}
          </ListGroup>
        </CardBody>
        <Button className="ml-auto">Button</Button>
      </Card>
    );
  }
}

export default Notepad;
