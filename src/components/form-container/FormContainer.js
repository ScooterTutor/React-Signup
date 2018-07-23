import React, { Component } from 'react';
import './formContainerStyles.css';
import StudentRegistrationForm from '../forms/student-registration-form/StudentRegistrationForm';
import ParentRegistrationForm from '../forms/parent-registration-form/ParentRegistrationForm';

class FormContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showStudentForm: true,
      registeringAStudent: false,
      pageHeading: "Register an account",
      pageSubHeading: "Create an account to continue booking our tutors online!"
    }
  }

  toggleForms() {
    this.setState({
      showStudentForm: !this.state.showStudentForm
    })
  }

  renderStudentSignup() {
    this.setState({
      pageHeading: "Register a Student",
      pageSubHeading: "Please fill out the student's details below",
      registeringAStudent: true
    })
  }

  renderParentRegistration() {
    this.setState({
      pageHeading: "Register an account",
      pageSubHeading: "Create an account to continue booking our tutors online!",
      registeringAStudent: false,
      showStudentForm: false
    })
  }

  renderRegistrationButtons() {
    if(!this.state.registeringAStudent) {
      return(
        <div className="registration-button-container">
          <button
            className={`contactTypeButton ${this.state.showStudentForm ? 'active' : ''}`}
            onClick={this.toggleForms.bind(this)}>Register as a student</button>
          <button
            className={`contactTypeButton ${!this.state.showStudentForm ? 'active' : ''}`}
            onClick={this.toggleForms.bind(this)}>Register as a parent</button>
        </div>
      )
    }
  }

  renderRegistrationForm() {
    if(this.state.showStudentForm) {
      return <StudentRegistrationForm />
    } else {
      return(
        <ParentRegistrationForm
          parentRegistrationComplete={this.renderStudentSignup.bind(this)}
          returnToParentDetails={this.renderParentRegistration.bind(this)}/>
      )
    }
  }

  render() {
    return(
      <div className="col-lg-6 forms-container">
        <h2>{this.state.pageHeading}</h2>
        <p>{this.state.pageSubHeading}</p>
        {this.renderRegistrationButtons()}
        {this.renderRegistrationForm()}
      </div>
    )
  }
}

export default FormContainer;
