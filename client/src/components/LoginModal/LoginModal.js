import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  NavLink,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <NavLink href="#">
          <h5 onClick={this.toggle}>Login</h5>
        </NavLink>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            Select your name from the list:{" "}
          </ModalHeader>
          <Form>

            <FormGroup>
              <Label for="exampleSelect">Select</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option></option>
                <option>DavidElutilo</option>
                <option>BrianHong</option>
                <option>Arnab</option>
                <option>DanCarstensen</option>
                <option>DanPotts</option>
                <option>Cbo</option>
                <option>Carlos</option>
                <option>Brittanie</option>                
                <option>Andrei</option>
                <option>AdamBilsky</option>
                <option>Don</option>
                <option>Duane</option>
                <option>Eric</option>
                <option>Jackson</option>
                <option>Joe</option>
                <option>JosephPerkins</option>
                <option>Josh</option>
                <option>Juana</option>
                <option>Julie</option>
                <option>Justin</option>
                <option>KevinErman</option>
                <option>Krista</option>
                <option>Mandy</option>
                <option>Maryia</option>
                <option>MichaelLegrange</option>
                <option>Ollie</option>
                <option>Otho</option>
                <option>PatCorcoran</option>
                <option>Q</option>
                <option>Rigo</option>
                <option>Rion</option>
                <option>Rogelio</option>
                <option>Ron</option>
                <option>Samira</option>
                <option>Tad</option>
                <option>Tom</option>
                <option>Torrence</option>
                <option>UlasD</option>
                <option>Will</option>

              </Input>
            </FormGroup>
            <Button>Submit</Button>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
