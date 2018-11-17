import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Button,
  ListGroup,
  ListGroupItem,
  Col
} from "reactstrap";

class Itinerary extends Component {
  state = {
    buttoncolorFlight: "light",
    buttoncolorHotel: "light",
    buttoncolorCar: "light",
    buttoncolorActivities: "light"
  };

  handleBookButtonFlight = () => {
    window.open(
      "https://www.expedia.com/Flights-Search?trip=oneway&leg1=from%3AChicago%2C%20IL%2C%20United%20States%20(ORD)%2Cto%3A" +
        this.props.city +
        "%2C%20%2Cdeparture%3A11%2F12%2F2018TANYT&passengers=adults%3A1%2Cchildren%3A0%2Cseniors%3A0%2Cinfantinlap%3AN&options=cabinclass%3Aeconomy&mode=search",
      "_blank"
    );
  };
  handleBookButtonHotel = () => {
    window.open(
      "https://www.expedia.com/Hotel-Search?destination=" + this.props.city,
      "_blank"
    );
  };
  handleBookButtonCar = () => {
    window.open(
      "https://www.expedia.com/carsearch?locn=" +
        this.props.city +
        "&dpln=179899&pickupCountryCode=IT&loc2=&date1=11%2F12%2F2018&time1=1030AM&date2=11%2F16%2F2018&time2=1030AM",
      "_blank"
    );
  };
  handleBookButtonActivities = () => {
    window.open(
      "https://www.expedia.com/things-to-do/search?location=" + this.props.city,
      "_blank"
    );
  };

  handleCheckmarkFlight = () => {
    this.setState({ buttoncolorFlight: "success" });
  };
  handleCheckmarkHotel = () => {
    this.setState({ buttoncolorHotel: "success" });
  };
  handleCheckmarkCar = () => {
    this.setState({ buttoncolorCar: "success" });
  };
  handleCheckmarkActivities = () => {
    this.setState({ buttoncolorActivities: "success" });
  };

  render() {
    console.log(this.props);

    return (
      <Col sm="12">
        <Card className="bg-light mb-3">
          <CardBody>
            <CardTitle>Itinerary</CardTitle>
            <CardText>Get Booking </CardText>
            <ListGroup>
              <ListGroupItem>
                Flight
                <Button
                  onClick={this.handleCheckmarkFlight}
                  color={this.state.buttoncolorFlight}
                  className="btn-sm float-right ml-3"
                >
                  √
                </Button>
                <Button
                  onClick={this.handleBookButtonFlight}
                  color="primary"
                  className="btn-sm float-right"
                >
                  Book
                </Button>
              </ListGroupItem>

              <ListGroupItem>
                Hotel
                <Button
                  onClick={this.handleCheckmarkHotel}
                  color={this.state.buttoncolorHotel}
                  className="btn-sm float-right ml-3"
                >
                  √
                </Button>
                <Button
                  onClick={this.handleBookButtonHotel}
                  color="primary"
                  className="btn-sm float-right"
                >
                  Book
                </Button>
              </ListGroupItem>
              <ListGroupItem>
                Car
                <Button
                  onClick={this.handleCheckmarkCar}
                  color={this.state.buttoncolorCar}
                  className="btn-sm float-right ml-3"
                >
                  √
                </Button>
                <Button
                  onClick={this.handleBookButtonCar}
                  color="primary"
                  className="btn-sm float-right"
                >
                  Book
                </Button>
              </ListGroupItem>
              <ListGroupItem>
                Activities
                <Button
                  onClick={this.handleCheckmarkActivities}
                  color={this.state.buttoncolorActivities}
                  className="btn-sm float-right ml-3"
                >
                  √
                </Button>
                <Button
                  onClick={this.handleBookButtonActivities}
                  color="primary"
                  className="btn-sm float-right"
                >
                  Book
                </Button>
              </ListGroupItem>
            </ListGroup>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default Itinerary;
