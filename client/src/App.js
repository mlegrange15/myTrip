import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import Destinations from "./components/Destinations";
import Main from "./components/Main";
import Booking from "./components/Booking";
import API from "./components/utils/API";
import { goToAnchor } from "react-scrollable-anchor";
import ScrollableAnchor from "react-scrollable-anchor";

// import uuid from 'uuid';

class App extends Component {
  state = {
    destinations: [],
    destinationsHash: {},
    // id of selected destination
    selected: null,
    notes: [],
    booking: false
  };

  componentDidMount() {
    // grab all the destinations from the db, set state and then populate the featured destinations component.
    API.getDestinations({})
      .then(res => {
        const hash = {};
        for (let i = 0; i < res.data.length; i++) {
          const element = res.data[i];
          hash[element.name] = element;
        }
        this.setState({
          destinationsHash: hash,
          destinations: res.data
        });
      })
      .catch(err => console.log(err));
    API.getNotes({})
      .then(res => {
        this.setState({
          notes: res.data.filter(note => {
            return note.city === this.state.selected;
          })
        });
      })
      .catch(err => console.log(err));
  }

  handleDestinationClick = (e, props, key) => {
    e.preventDefault();
    this.setState({ selected: props.name, booking: false }, () => {
      //this is the href anchor to scroll down the page
      goToAnchor("sectionOne");
      console.log("here");
    });
    let notes = [];
    API.getNotes({})
      .then(res => {
        this.setState({
          notes: res.data.filter(note => {
            return note.city === this.state.selected;
          })
        });
      })
      .catch(err => console.log(err));
    props.history.push("/plan/" + props.name);
  };

  setSelectedState = state => {
    this.setState({ selected: state, booking: false });
  };

  handleNoteAdd = (e, note) => {
    e.preventDefault();

    API.saveNote({
      city: note.city,
      category: note.categoryname,
      name: note.name
    })
      .then(res => {
        console.log("NOTE SAVED");
      })
      .catch(err => console.log(err));
    this.setState({ notes: [...this.state.notes, note] });
  };

  handleNoteRemove = (e, note) => {
    e.preventDefault();
    console.log(note);
    API.deleteNote(note._id)
      .then(res => {
        console.log("NOTE DELETED");
      })
      .catch(err => console.log(err));

    var notesCopy = [...this.state.notes]; // make a separate copy of the array
    var index = notesCopy.indexOf(note);
    notesCopy.splice(index, 1);
    this.setState({ notes: notesCopy });
  };

  handleBooking = (e, props) => {
    e.preventDefault();
    this.setState({ booking: !this.state.booking });
    props.history.push("/book/" + props.city);
  };

  updateSelected = selected => {
    this.setState({
      selected: selected
    });
  };

  render() {
    if (!this.state.destinations || !this.state.destinationsHash) return null;
    return (
      <Router>
        <div className="App">
          <Route
            path="/"
            render={({ history, match }) => (
              <div>
                <AppNavbar />{" "}
                <Destinations
                  destinations={this.state.destinations}
                  handleDestinationClick={this.handleDestinationClick}
                  history={history}
                  match={match}
                />
              </div>
            )}
          />
          <Route
            path="/plan/:city"
            render={({ history, match }) => (
              <div>
                <ScrollableAnchor id={"sectionOne"}>
                  <Main
                    selected={this.state.destinationsHash[this.state.selected]}
                    handleNoteAdd={this.handleNoteAdd}
                    handleNoteRemove={this.handleNoteRemove}
                    notes={this.state.notes}
                    handleBooking={this.handleBooking}
                    history={history}
                    match={match}
                    updateSelected={this.updateSelected}
                  />
                </ScrollableAnchor>
              </div>
            )}
          />
          <Route
            path="/book"
            render={({ history, match }) => (
              <div>
                <Booking
                  selected={this.state.destinationsHash[this.state.selected]}
                  notes={this.state.notes}
                  handleNoteRemove={this.handleNoteRemove}
                  history={history}
                  match={match}
                />
              </div>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
