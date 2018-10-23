import React, { Component } from "react";
// import { Switch, Route } from "react-router-dom";
import { Container, Row, } from "reactstrap";
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

  handleNoteAdd = note => {

    // API.post the new note to the database then set state and rerender
    // this.setState({ notes: note });

  }

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
          />
        )}
      </Container>
    );
  }
}

export default Main;
