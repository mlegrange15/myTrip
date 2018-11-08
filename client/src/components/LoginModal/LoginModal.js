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
          <Form className="p-3">

            <FormGroup>
              <Label for="userLogin">Select</Label>
              <Input type="select" name="users" id="users">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            <Button className="btn-sm mr-3">Submit</Button>
            <Button className="btn-sm" color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
