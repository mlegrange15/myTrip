import React, { Component } from "react";
// import { Switch, Route } from "react-router-dom";
import { Container, Row } from "reactstrap";
import Planner from "../Planner";
import TripCategories from "../TripCategories";
import API from "../utils/API";
import { goToAnchor } from 'react-scrollable-anchor';
import ScrollableAnchor from 'react-scrollable-anchor'

class Main extends Component {
  state = {
    category: null,
  };

  handleCategoryClick = category => {
    this.setState({ category: category }, () => {
      console.log('go to section three')
      goToAnchor('sectionThree');
    });
  };
  handlePlannerClick = () => {
    console.log("I'm firing")
    goToAnchor('sectionThree');
  };

  render() {
    return (
      <Container>

        <ScrollableAnchor id={'sectionTwo'}>
          <div>
            <TripCategories
              handleCategoryClick={this.handleCategoryClick}
              city={this.props.city}
              hotels="hotels"
              events="events"
              food="food"
              tours="tours"
            />
          </div>
        </ScrollableAnchor>
        {this.state.category && (
             
          <Planner
            category={this.props.selected[this.state.category]}
            categoryname={this.state.category}
            videos={this.props.videos}
            city={this.props.city}
            notes={this.props.notes}
            handleNoteAdd={this.props.handleNoteAdd}
            handleNoteRemove={this.props.handleNoteRemove}
            handleBooking={this.props.handleBooking}
          />
        )}
{/* <ScrollableAnchor id={'sectionThree'}>
</ScrollableAnchor> */}
      </Container>
    );
  }
}

export default Main;
