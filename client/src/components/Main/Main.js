import React, { Component } from "react";
// import { Switch, Route } from "react-router-dom";
import { Container, Row } from "reactstrap";
import Planner from "../Planner";
import TripCategories from "../TripCategories";
import API from "../utils/API";

class Main extends Component {
  state = {
    category: null,
    notes: []
  };

  handleCategoryClick = category => {
    this.setState({ category: category });
  };

  handleNoteAdd = (e, note) => {
    e.preventDefault();
    // API.post the new note to the database then set state and rerender
    this.setState({ notes: [...this.state.notes, note] });
  };

  handleNoteRemove = (e, note) => {
    e.preventDefault();
    var notesCopy = [...this.state.notes]; // make a separate copy of the array
    var index = notesCopy.indexOf(note);
    notesCopy.splice(index, 1);
    this.setState({ notes: notesCopy });
  };

  render() {
    console.log(this.props.selected);
    return (
      <Container>
        <Row>
          <TripCategories
            handleCategoryClick={this.handleCategoryClick}
            city={this.props.city}
            hotels="hotels"
            events="events"
            food="food"
            tours="tours"
            flights="flights"
            cars="cars"
          />
        </Row>
        {this.state.category && (
          <Planner
            category={this.props.selected[this.state.category]}
            categoryname={this.state.category}
            city={this.props.city}
            notes={this.state.notes}
            handleNoteAdd={this.handleNoteAdd}
            handleNoteRemove={this.handleNoteRemove}
          />
        )}
      </Container>
    );
  }
}

export default Main;
