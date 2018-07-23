import React, { Component } from 'react';
import './formContainerStyles.css';
import StudentRegistrationForm from '../forms/student-registration-form/StudentRegistrationForm';

class FormContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showRegistrationForm: true
    }
  }

  toggleForms() {
    console.log('test');
    this.setState({
      showRegistrationForm: !this.state.showRegistrationForm
    })
  }

  render() {
    return(
      <div className="col-lg-6 forms-container">
        <h2>Register an account</h2>
        <p>Create an account to continue booking with Agnes!</p>
        <div>
          <button className="contactTypeButton active" onClick={this.toggleForms.bind(this)}>Register as a student</button>
          <button className="contactTypeButton" onClick={this.toggleForms.bind(this)}>Register as a parent</button>
        </div>
        {this.state.showRegistrationForm ? <StudentRegistrationForm></StudentRegistrationForm> : <p>Test</p>}
      </div>
    )
  }
}

export default FormContainer;
