import React, { Component } from 'react';
import './formContainerStyles.css';
import StudentRegistrationForm from '../forms/student-registration-form/StudentRegistrationForm';
import ParentRegistrationForm from '../forms/parent-registration-form/ParentRegistrationForm';
import SignUpForm from '../forms/signup-form/SignUpForm';

class FormContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showStudentForm: true,
      showLoginView: false,
      registeringAStudent: false,
      pageHeading: "Register an account",
      pageSubHeading: "Create an account to continue booking our tutors online!"
    }
  }

  renderRegistrationButtons() {
    if(!this.state.registeringAStudent && !this.state.showLoginView) {
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

  toggleLoginRegister() {
    if(this.state.showLoginView) {
      this.setState({
        showStudentForm: true,
        showLoginView: false,
        registeringAStudent: false,
        pageHeading: "Register an account",
        pageSubHeading: "Create an account to continue booking our tutors online!"
      })
    } else {
      this.setState({
        showStudentForm: false,
        showLoginView: true,
        registeringAStudent: false,
        pageHeading: "Welcome Back",
        pageSubHeading: "Fill out your email and password below to login"
      })
    }
  }

  renderRegistrationForm() {
    if(this.state.showStudentForm && !this.state.showLoginView) {
      return <StudentRegistrationForm />
    } else if(!this.state.showLoginView) {
      return(
        <ParentRegistrationForm
          parentRegistrationComplete={this.renderStudentSignup.bind(this)}
          returnToParentDetails={this.renderParentRegistration.bind(this)}
        />
      )
    }
  }

  renderLoginView() {
    if(this.state.showLoginView) {
      return(
        <SignUpForm />
      )
    }
  }

  renderPrompt() {
    console.log(this.state.registeringAStudent)
    if(!this.state.registeringAStudent) {
      return(
        <p className="login-prompt">
          Already have an account?
          <span onClick={this.toggleLoginRegister.bind(this)}>{this.state.showLoginView ? ' Sign up' : ' Sign in'}</span>
        </p>  
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
        {this.renderLoginView()}
        {this.renderPrompt()}
      </div>
    )
  }
}

export default FormContainer;
