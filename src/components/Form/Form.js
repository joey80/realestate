import React, { Component } from 'react';
import Input from '../Input/Input';
import Modal from '../Modal/Modal';
import './Form.scss';

class Form extends Component {

  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.modal = '';
  }

  handleClick = event => {
    event.preventDefault();
    const inputs = Array.from(document.querySelectorAll('.form__field'));
    if (this.allFilledOut(inputs) ? this.callAPI() : null);
  };

  checkValue = event => {
    const target = event.target;
    const message = target.nextElementSibling;
    if (target.value === '' ? message.innerHTML = 'Please fill out this field' : message.innerHTML = '');
  };

  allFilledOut = (array) => {
    let errors = 0;
    array.forEach(elm => {
      if (elm.value === '' ? errors++ : null);
    });

    if (errors > 0) {
      return false;
    } else {
      return true;
    }
  };

  setTheState = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  callAPI = () => {
    const token = 'TOP_SECRET';
    this.setState({isOpen: true});

    fetch(`https://api.estated.com/property/v3?token=${token}&address=${this.state.streetAddress}&city=${this.state.city}&state=${this.state.state}&zipcode=${this.state.zipCode}`)
    .then(response => response.json())
    .then(results => this.setState({results}));
  };

  render() {
    return (
      <div className="form" onSubmit={this.handleClick}>
        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          <pre>${JSON.stringify(this.state.results, null, '  ')}</pre>
        </Modal>
        <form className="form__container">
          <div className="form__section">
            <h1><strong>Hello!</strong><br />
            Where Would You Like To Search For A Property?</h1>
            <Input
              label="streetAddress"
              name="Street Address"
              type="text"
              onChange={this.setTheState}
              onBlur={this.checkValue}>
            </Input>
            <Input
              label="city"
              name="City"
              type="text"
              onChange={this.setTheState}
              onBlur={this.checkValue}>
            </Input>
            <Input
              label="state"
              name="State"
              type="text"
              onChange={this.setTheState}
              onBlur={this.checkValue}>
            </Input>
            <Input
              label="zipCode"
              name="Zip Code"
              type="text"
              onChange={this.setTheState}
              onBlur={this.checkValue}>
            </Input>
          </div>
          <div className="form__section">
            <div>* All fields are required</div>
            <button type="submit" onClick={this.handleClick} className="form__button">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
