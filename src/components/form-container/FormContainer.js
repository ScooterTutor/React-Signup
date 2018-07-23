import React, { Component } from 'react';
import './formContainerStyles.css';
import StudentRegistrationForm from '../forms/student-registration-form/StudentRegistrationForm';
import ParentRegistrationForm from '../forms/parent-registration-form/ParentRegistrationForm';

class FormContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showStudentForm: true
    }
  }

  toggleForms() {
    this.setState({
      showStudentForm: !this.state.showStudentForm
    })
  }

  render() {
    return(
      <div className="col-lg-6 forms-container">
        <h2>Register an account</h2>
        <p>Create an account to continue booking with Agnes!</p>
        <div>
          <button
            className={`contactTypeButton ${this.state.showStudentForm ? 'active' : ''}`}
            onClick={this.toggleForms.bind(this)}>Register as a student</button>
          <button
            className={`contactTypeButton ${!this.state.showStudentForm ? 'active' : ''}`}
            onClick={this.toggleForms.bind(this)}>Register as a parent</button>
        </div>
        {this.state.showStudentForm ? <StudentRegistrationForm></StudentRegistrationForm> : <ParentRegistrationForm></ParentRegistrationForm>}
      </div>
    )
  }
}

export default FormContainer;
