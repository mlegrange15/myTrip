import React, { Component } from "react";
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
  Input
} from "reactstrap";

class Notepad extends Component {
  state = {
    totalDays: []
  };
  handleDailyPlanner = (e, plans) => {
    e.preventDefault();
    let daysInput = e.target.value;
    let totalDays = [];
    for (let i = 0; i < daysInput; i++) {
      let day = "Day " + (1 + parseInt([i])) + ":";
      totalDays.push(day);
    }
    this.setState({ totalDays: totalDays });
  };

  render() {
    return (
      <div>
        <Card className="bg-dark mb-3">
          <CardBody>
            <CardTitle className="text-white">Daily Planner </CardTitle>
            <Form className="mb-3">
              <FormGroup>
                <Label className="text-white" for="dailyPlannerSelect">
                  How many days are you planning?
                </Label>
                <Input
                  onChange={this.handleDailyPlanner}
                  type="select"
                  name="select"
                  id="dailyPlannerSelect"
                >
                  <option>0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </Input>
              </FormGroup>
            </Form>
            <CardText className="text-white">
              Drag and drop activities below{" "}
            </CardText>
            <ListGroup>
              {this.state.totalDays.map((day, i) => {
                return <ListGroupItem key={i}>{day}</ListGroupItem>;
              })}
            </ListGroup>
          </CardBody>
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
                  <ListGroupItem key={note._id} id={note._id}>
                    {note.name}
                    <Button
                      className="btn-sm btn-danger float-right"
                      id={i}
                      onClick={e => this.props.handleNoteRemove(e, note)}
                    >
                      X
                    </Button>
                  </ListGroupItem>
                );
              })}
            </ListGroup>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Notepad;
