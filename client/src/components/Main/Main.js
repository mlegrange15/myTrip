import React, { Component } from "react";
// import { Switch, Route } from "react-router-dom";
import { Container, Row } from "reactstrap";
import Planner from "../Planner";
import TripCategories from "../TripCategories";
import API from "../utils/API";

class Main extends Component {
  state = {
    category: null,
  };

  handleCategoryClick = category => {
    this.setState({ category: category });
  };

  render() {
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
            notes={this.props.notes}
            handleNoteAdd={this.props.handleNoteAdd}
            handleNoteRemove={this.props.handleNoteRemove}
          />
        )}
      </Container>
    );
  }
}

export default Main;
