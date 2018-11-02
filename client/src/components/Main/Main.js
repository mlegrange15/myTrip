import React, { Component } from "react";
// import { Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";
import Planner from "../Planner";
import TripCategories from "../TripCategories";

class Main extends Component {
  state = {
    category: null,
  };

  componentDidMount () {
    this.props.updateSelected(this.props.match.params.city)

  };

  handleCategoryClick = category => {
    this.setState({ category: category });
  };

  render() {
    if (!this.props.selected) return null
    return (
      <Container>
          <TripCategories
            handleCategoryClick={this.handleCategoryClick}
            city={this.props.selected.name}
            hotels="hotels"
            events="events"
            food="food"
            tours="tours"
          />
          <Planner
            category={this.props.selected[this.state.category]}
            categoryname={this.state.category}
            images={this.props.selected.images}
            videos={this.props.selected.videos}
            city={this.props.selected.name}
            notes={this.props.notes}
            handleNoteAdd={this.props.handleNoteAdd}
            handleNoteRemove={this.props.handleNoteRemove}
            handleBooking={this.props.handleBooking}
            history={this.props.history}
            match={this.props.match}
          />
      </Container>
    );
  }
}

export default Main;
