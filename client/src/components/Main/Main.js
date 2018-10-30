import React, { Component } from "react";
// import { Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";
import Planner from "../Planner";
import TripCategories from "../TripCategories";

class Main extends Component {
  state = {
    category: null,
  };

  handleCategoryClick = category => {
    this.setState({ category: category });
  };

  render() {
    console.log(this.props.selected);
    return (
      <Container>
          <TripCategories
            handleCategoryClick={this.handleCategoryClick}
            city={this.props.city}
            hotels="hotels"
            events="events"
            food="food"
            tours="tours"
          />
        {this.state.category && (
          <Planner
            category={this.props.selected[this.state.category]}
            categoryname={this.state.category}
            images={this.props.selected.images}
            videos={this.props.videos}
            city={this.props.city}
            notes={this.props.notes}
            handleNoteAdd={this.props.handleNoteAdd}
            handleNoteRemove={this.props.handleNoteRemove}
            handleBooking={this.props.handleBooking}

          />
        )}
      </Container>
    );
  }
}

export default Main;
