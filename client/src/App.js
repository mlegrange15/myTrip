import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import Destinations from "./components/Destinations";
import Main from "./components/Main";
import API from "./components/utils/API";
// import uuid from 'uuid';

class App extends Component {
  state = {
    destinations: [],
    destinationsHash: {},
    // id of selected destination
    selected: undefined,
    notes: []
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
  }

  // OnClick for the Destination selector ans send it via props to Destinations component

  handleDestinationClick = (e, props, key) => {
    e.preventDefault();
    this.setState({ selected: props.name });
    console.log("Selected state updated to :", this.state.selected);
    console.log("getNotes fired :", props);
    let notes = [];
    API.getNotes({})
      .then(res => {
        console.log("getNotes came back :", res.data);

        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].city === this.state.selected) {
            const note = res.data[i].name;
            notes.push(note);
          }
        }
        this.setState({ notes: notes });
        console.log("New notes state :", this.state.notes);
        console.log("Selected state updated to :", this.state.selected);
      })

      .catch(err => console.log(err));
  };

  // get notes function

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
    this.setState({ notes: [...this.state.notes, note.name] });
  };

  handleNoteRemove = (e, note) => {
    e.preventDefault();
    var notesCopy = [...this.state.notes]; // make a separate copy of the array
    var index = notesCopy.indexOf(note);
    notesCopy.splice(index, 1);
    this.setState({ notes: notesCopy });
  };

  render() {
    return (
      <div className="App">
        <AppNavbar />
        <Destinations
          destinations={this.state.destinations}
          handleDestinationClick={this.handleDestinationClick}
        />
        {this.state.selected && (
          <Main
            selected={this.state.destinationsHash[this.state.selected]}
            city={this.state.destinationsHash[this.state.selected].name}
            handleNoteAdd={this.handleNoteAdd}
            handleNoteRemove={this.handleNoteRemove}
            notes={this.state.notes}
          />
        )}
      </div>
    );
  }
}

export default App;
