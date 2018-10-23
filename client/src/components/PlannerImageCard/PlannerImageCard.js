import React from "react";
import {
    Col
  } from "reactstrap";



const PlannerImageCard = (props) => {
    console.log(props);
    
    return(
        <Col sm="4">
        <img
          src={props.images}
          alt="thumb"
          className="img-thumbnail"
        />
      </Col>

    )
  }

  export default PlannerImageCard;