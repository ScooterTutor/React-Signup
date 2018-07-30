import React, { Component } from 'react';
import './formContainerStyles.css';
import StudentRegistrationForm from '../forms/student-registration-form/StudentRegistrationForm';
import ParentRegistrationForm from '../forms/parent-registration-form/ParentRegistrationForm';
import TutorRegistrationForm from '../forms/tutor-registration-form/TutorRegistrationForm';
import SignInForm from '../forms/sign-in-form/SignInForm';

class FormContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showStudentForm: true,
      showParentForm: false,
      showTutorForm: false,
      showLoginView: false,
      showingSecondaryForm: false,
      pageHeading: "Register an account",
      pageSubHeading: "Create an account to continue booking our tutors online!"
    }
  }

  renderRegistrationButtons() {
    if(!this.state.showingSecondaryForm && !this.state.showLoginView) {
      return(
        <div className="registration-button-container">
          <button
            className={`contactTypeButton ${this.state.showStudentForm ? 'active' : ''}`}
            onClick={this.toggleForms.bind(this, 'student')}>I'm a Student
          </button>
          <button
            className={`contactTypeButton ${this.state.showParentForm ? 'active' : ''}`}
            onClick={this.toggleForms.bind(this, 'parent')}>I'm a Parent
          </button>
          <button
            className={`contactTypeButton ${this.state.showTutorForm ? 'active' : ''}`}
            onClick={this.toggleForms.bind(this, 'tutor')}>I'm a Tutor
          </button>
        </div>
      )
    }
  }

  toggleForms(contactType) {
    switch(contactType) {
      case 'student':
        this.setState({
          showStudentForm: true,
          showParentForm: false,
          showTutorForm: false,
        })
        break;
      case 'parent':
        this.setState({
          showStudentForm: false,
          showParentForm: true,
          showTutorForm: false,
        })
        break;
      case 'tutor':
        this.setState({
          showStudentForm: false,
          showParentForm: false,
          showTutorForm: true,
        })
        break;
      default:
        this.setState({
          showStudentForm: true,
          showParentForm: false,
          showTutorForm: false,
        })
    }
  }

  switchToSecondaryForm(pageHeading, subHeading) {
    this.setState({
      pageHeading: pageHeading,
      pageSubHeading: subHeading,
      showingSecondaryForm: true
    })
  }

  returnToParentRegistration() {
    this.setState({
      pageHeading: "Register an account",
      pageSubHeading: "Create an account to continue booking our tutors online!",
      showingSecondaryForm: false,
    })
  }

  returnToTutorRegistration() {
    this.setState({
      pageHeading: "Register an account",
      pageSubHeading: "Create an account to continue booking our tutors online!",
      showingSecondaryForm: false,
    })
  }

  toggleLoginRegister() {
    if(this.state.showLoginView) {
      this.setState({
        showStudentForm: true,
        showParentForm: false,
        showTutorForm: false,
        showingSecondaryForm: false,
        showLoginView: false,
        pageHeading: "Register an account",
        pageSubHeading: "Create an account to continue booking our tutors online!"
      })
    } else {
      this.setState({
        showStudentForm: false,
        showParentForm: false,
        showTutorForm: false,
        showLoginView: true,
        showingSecondaryForm: false,
        pageHeading: "Welcome Back",
        pageSubHeading: "Fill out your email and password below to login"
      })
    }
  }

  renderRegistrationForms() {
    if(this.state.showStudentForm) {
      return <StudentRegistrationForm />
    }
    if (this.state.showParentForm) {
      return <ParentRegistrationForm
        showSecondaryForm={this.state.showingSecondaryForm}
        progressToSecondaryForm={this.switchToSecondaryForm.bind(this, "Register a Student", "Please fill out the student's details below")}
        returnToPrimaryForm={this.returnToParentRegistration.bind(this)} />
    }
    if(this.state.showTutorForm) {
      return <TutorRegistrationForm
              progressToSecondaryForm={this.switchToSecondaryForm.bind(this, "A little about your subjects", "Please fill out the below details to finish registration")}
              returnToPrimaryForm={this.returnToTutorRegistration.bind(this)}
          />
    }
  }

  renderLoginView() {
    if(this.state.showLoginView) {
      return(
        <SignInForm />
      )
    }
  }

  renderPrompt() {
    if(!this.state.showingSecondaryForm) {
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
        {this.renderRegistrationForms()}
        {this.renderLoginView()}
        {this.renderPrompt()}
      </div>
    )
  }
}

export default FormContainer;
