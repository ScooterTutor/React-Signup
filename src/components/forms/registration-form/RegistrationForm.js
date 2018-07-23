import React, { Component } from 'react';
import './registrationFormStyles.css';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'Test'
    }
  }

  render() {
    return(
      <div className="col-lg-6 reg-form-container">RegistrationForm</div>
    )
  }
}

export default RegistrationForm;
