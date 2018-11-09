import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
} from "reactstrap";

class TripCategories extends Component {
  state = {
    cSelected: []
  };

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }



  render() {
    return (
      <Row className="p-3 mb-2 text-align-center">
        <Col className="mb-3" sm="12">
            <h1>What would you like to explore in {this.props.city}?</h1>
        </Col>
        <Row>
            <Col sm="3">
              <Button
                className="btn-lg p-2 m-2 btn-block"
                color="primary"
                onClick={() =>
                  this.props.handleCategoryClick(this.props.hotels)
                }
                active={this.state.rSelected === 1}
              >
                Hotels
              </Button>
            </Col>
            <Col sm="3">
              <Button
                className="btn-lg p-2 m-2 btn-block"
                color="primary"
                onClick={() => this.props.handleCategoryClick(this.props.food)}
                active={this.state.rSelected === 2}
              >
                Food
              </Button>
            </Col>
            <Col sm="3">
              <Button
                className="btn-lg p-2 m-2 btn-block"
                color="primary"
                onClick={() =>
                  this.props.handleCategoryClick(this.props.events)
                }
                active={this.state.rSelected === 3}
              >
                Events
              </Button>
            </Col>
            <Col sm="3">
              <Button
                className="btn-lg p-2 m-2 btn-block"
                color="primary"
                onClick={() => this.props.handleCategoryClick(this.props.tours)}
                active={this.state.rSelected === 4}
              >
                Tours
              </Button>
            </Col>
        </Row>
      </Row>
    );
  }
}

export default TripCategories;

// const TripCategories = props => {
//   console.log(props);

//   return (

//           <Card className="shadow-lg" inverse onClick={() => props.handleCategoryClick(props.hotels)}>
//             <CardImg
//               className="img-thumbnail"
//               width="100%"
//               src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=250&h=50&bg=333333&txtclr=666666"
//               alt="Card image cap"
//             />
//             <CardImgOverlay>
//               <CardTitle>Hotels</CardTitle>
//             </CardImgOverlay>
//           </Card>
//         </Col>
//         <Col sm="3">
//           <Card inverse onClick={() => props.handleCategoryClick(props.events)}>
//             <CardImg
//               className="img-thumbnail"
//               width="100%"
//               src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97150&w=250&h=50&bg=333333&txtclr=666666"
//               alt="Card image cap"
//             />
//             <CardImgOverlay>
//               <CardTitle>Events</CardTitle>
//             </CardImgOverlay>
//           </Card>
//         </Col>
//         <Col sm="3">
//           <Card inverse onClick={() => props.handleCategoryClick(props.food)}>
//             <CardImg
//               className="img-thumbnail"
//               width="100%"
//               src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97150&w=250&h=50&bg=333333&txtclr=666666"
//               alt="Card image cap"
//             />
//             <CardImgOverlay>
//               <CardTitle>Food</CardTitle>
//             </CardImgOverlay>
//           </Card>
//         </Col>
//         <Col sm="3">
//           <Card inverse onClick={() => props.handleCategoryClick(props.tours)}>
//             <CardImg
//               className="img-thumbnail"
//               width="100%"
//               src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97150&w=250&h=50&bg=333333&txtclr=666666"
//               alt="Card image cap"
//             />
//             <CardImgOverlay>
//               <CardTitle>Tours</CardTitle>
//             </CardImgOverlay>
//           </Card>

//   );
// };

// export default TripCategories;
