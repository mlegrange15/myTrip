import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Button,
  ListGroup,
  ListGroupItem,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

class DailyPlanner extends Component {
  render() {
    return (
      <Card className="bg-dark mb-3">
        <CardBody>
          <CardTitle className="text-white">Daily Planner </CardTitle>
          <Form className="mb-3">
            <FormGroup>
              <Label className="text-white" for="dailyPlannerSelect">
                How many days are you planning?
              </Label>
              <Input type="select" name="select" id="dailyPlannerSelect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            <Button className="btn-sm">Submit</Button>
          </Form>
          <CardText className="text-white">
            Drag and drop activities below{" "}
          </CardText>
          <ListGroup>
            <ListGroupItem>
              Day 1:
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    );
  }
}

export default DailyPlanner;
