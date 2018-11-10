import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import Destinations from "./components/Destinations";
import Main from "./components/Main";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import API from "./components/utils/API";
import { goToAnchor } from "react-scrollable-anchor";
import ScrollableAnchor from "react-scrollable-anchor";

class App extends Component {
  state = {
    destinations: [],
    destinationsHash: {},
    // id of selected destination
    selected: null,
    notes: [],
    booking: false,
    user: ""
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
            return (
              note.city === this.state.selected && note.user === this.state.user
            );
          })
        });
      })
      .catch(err => console.log(err));
  }

  handleDestinationClick = (e, props, key) => {
    e.preventDefault();
    this.setState({ selected: props.name, booking: false }, () => {
      goToAnchor("sectionOne");
      console.log("here");
    });
    API.getNotes({})
      .then(res => {
        this.setState({
          notes: res.data.filter(note => {
            return (
              note.city === this.state.selected && note.user === this.state.user
            );
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
      name: note.name,
      user: this.state.user
    })
      .then(res => {
        console.log("NOTE SAVED");
      })
      .catch(err => console.log(err));
    this.setState({ notes: [...this.state.notes, note] });
  };

  handleNoteRemove = (e, note) => {
    e.preventDefault();
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

  handleUserLoginChange = e => {
    e.preventDefault();
    let user = e.target.value;
    this.setState({ user: user });
    console.log(this.state.user);
  };

  handleQuickTrip = (e, props) => {
    e.preventDefault();
    let randomArray = [];
    this.state.destinations.map(destination => {
      return randomArray.push(destination.name)
    });
    var randomCity = randomArray[Math.floor(Math.random()*randomArray.length)];
    this.setState({
      selected: randomCity }, () => {
        goToAnchor("sectionOne");
    });
 
    props.history.push("/plan/" + randomCity);
   
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
                <AppNavbar
                  handleUserLoginChange={this.handleUserLoginChange}
                  handleQuickTrip={this.handleQuickTrip}
                  selected={this.state.destinationsHash[this.state.selected]}
                  history={history}
                  match={match}
                  user={this.state.user}
                />{" "}
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
                  booking={this.state.booking}
                />
              </div>
            )}
          />
<Footer />
        </div>
      </Router>
    );
  }
}

export default App;
