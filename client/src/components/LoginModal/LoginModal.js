import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  NavLink,
  Form,
  FormGroup,
  Label,
  Input,
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

  handleLogin = (e, props) => {
    e.preventDefault();
    this.setState({
      modal: !this.state.modal
    });
  };

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
              <Input
                onChange={this.props.handleUserLoginChange}
                type="select"
                name="user"
                id="user"
              >
                <option />
                <option value="DavidElutilo">DavidElutilo</option>
                <option value="BrianHong">BrianHong</option>
                <option value="Arnab">Arnab</option>
                <option value="DanCarstensen">DanCarstensen</option>
                <option value="DanPotts">DanPotts</option>
                <option value="Cbo">Cbo</option>
                <option value="Carlos">Carlos</option>
                <option value="Brittanie">Brittanie</option>
                <option value="Andrei">Andrei</option>
                <option value="AdamBilsky">AdamBilsky</option>
                <option value="Don">Don</option>
                <option value="Duane">Duane</option>
                <option value="Eric">Eric</option>
                <option value="Jackson">Jackson</option>
                <option value="Joe">Joe</option>
                <option value="JosephPerkins">JosephPerkins</option>
                <option value="Josh">Josh</option>
                <option value="Juana">Juana</option>
                <option value="Julie">Julie</option>
                <option value="Justin">Justin</option>
                <option value="KevinErman">KevinErman</option>
                <option value="Krista">Krista</option>
                <option value="Mandy">Mandy</option>
                <option value="Maryia">Maryia</option>
                <option value="MichaelLegrange">MichaelLegrange</option>
                <option value="Ollie">Ollie</option>
                <option value="Otho">Otho</option>
                <option value="PatCorcoran">PatCorcoran</option>
                <option value="Q">Q</option>
                <option value="Rigo">Rigo</option>
                <option value="Rion">Rion</option>
                <option value="Rogelio">Rogelio</option>
                <option value="Ron">Ron</option>
                <option value="Samira">Samira</option>
                <option value="Tad">Tad</option>
                <option value="Tom">Tom</option>
                <option value="Torrence">Torrence</option>
                <option value="UlasD">UlasD</option>
                <option value="Will">Will</option>
              </Input>
            </FormGroup>
            <Button
              className="btn-sm mr-3"
              onClick={e => this.handleLogin(e)}
            >
              Submit
            </Button>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
