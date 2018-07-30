import React, { Component } from 'react';
import '../globalFormStyles.css';
import FloatingLabel, {
  focusStyles,
  inputStyles,
  labelStyles
} from 'floating-label-react';

class ParentRegistrationForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      parentRegistrationDetails: {
        parentFirstName: '',
        parentLastName: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
        location: ''
      },
      studentRegistrationDetails: {
        firstName: '',
        lastName: '',
        phone: '',
        location: ''
      },
      showSecondaryForm: this.props.showSecondaryForm
    }
    console.log(this.state);
    this.inputStyle = {
      focus: {
        ...focusStyles,
        borderColor: '#41B4E7'
      },
      input: {
        ...inputStyles,
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(112, 112, 112, 0.15)',
        width: '100%'
      },
      label: {
        ...labelStyles,
        marginTop: '.5em',
        width: '100%',
        textTransform: 'uppercase',
        color: 'rgba(112, 112, 112, 0.3)'
      }
    }
  }

  returnToPrimaryForm() {
    this.setState({
      showSecondaryForm: false
    });
    this.props.returnToPrimaryForm();
  }

  updateParentDetails(event) {
    let previousState = {...this.state}; // create a copy of previous state
    previousState.parentRegistrationDetails[event.target.name] = event.target.value; // update details
    this.setState(previousState); // update state
  }

  updateStudentDetails(event) {
    let previousState = {...this.state}; // create a copy of previous state
    previousState.studentRegistrationDetails[event.target.name] = event.target.value; // update details
    this.setState(previousState); // update state
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({showSecondaryForm: true})
  }

  renderPrimaryForm() {
    return(
      <div className="ico-form-container">
        <form className="ico-form" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="form-group col">
              <FloatingLabel
                id='parentFirstName'
                name='parentFirstName'
                placeholder='FIRST NAME'
                type='text'
                styles={this.inputStyle}
                onChange={this.updateParentDetails.bind(this)}
                value={this.state.parentRegistrationDetails.parentFirstName}
              />
            </div>
            <div className="form-group col">
              <FloatingLabel
                id='parentLastName'
                name='parentLastName'
                placeholder='LAST NAME'
                type='text'
                styles={this.inputStyle}
                onChange={this.updateParentDetails.bind(this)}
                value={this.state.parentRegistrationDetails.parentLastName}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col">
              <FloatingLabel
                id='parentPhone'
                name='phone'
                placeholder='PHONE'
                type='text'
                styles={this.inputStyle}
                onChange={this.updateParentDetails.bind(this)}
                value={this.state.parentRegistrationDetails.phone}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col">
              <FloatingLabel
                id='parentEmail'
                name='email'
                placeholder='EMAIL'
                type='email'
                styles={this.inputStyle}
                onChange={this.updateParentDetails.bind(this)}
                value={this.state.parentRegistrationDetails.email}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col">
              <FloatingLabel
                id='password'
                name='password'
                placeholder='PASSWORD'
                type='password'
                styles={this.inputStyle}
                onChange={this.updateParentDetails.bind(this)}
                value={this.state.parentRegistrationDetails.password}
              />
            </div>
            <div className="form-group col">
              <FloatingLabel
                id='confirmPassword'
                name='confirmPassword'
                placeholder='CONFIRM PASSOWRD'
                type='password'
                styles={this.inputStyle}
                onChange={this.updateParentDetails.bind(this)}
                value={this.state.parentRegistrationDetails.confirmPassword}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col">
              <FloatingLabel
                id='parentLocation'
                name='location'
                placeholder='LOCATION'
                type='text'
                styles={this.inputStyle}
                onChange={this.updateParentDetails.bind(this)}
                value={this.state.parentRegistrationDetails.location}
              />
            </div>
          </div>
          <button onClick={this.props.progressToSecondaryForm} className="submit-button">Student Details <i className="fas fa-long-arrow-alt-right fa-fw fa-sm"></i></button>
        </form>
      </div>
    )
  }

  renderSecondaryForm() {
    return(
      <div className="ico-form-container">
        <form className="ico-form" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="form-group col">
              <FloatingLabel
                id='studentFirstName'
                name='firstName'
                placeholder='FIRST NAME'
                type='text'
                styles={this.inputStyle}
                onChange={this.updateStudentDetails.bind(this)}
                value={this.state.studentRegistrationDetails.firstName}
              />
            </div>
            <div className="form-group col">
              <FloatingLabel
                id='studentLastName'
                name='lastName'
                placeholder='LAST NAME'
                type='text'
                styles={this.inputStyle}
                onChange={this.updateStudentDetails.bind(this)}
                value={this.state.studentRegistrationDetails.lastName}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col">
              <FloatingLabel
                id='studentPhone'
                name='phone'
                placeholder='PHONE'
                type='text'
                styles={this.inputStyle}
                onChange={this.updateStudentDetails.bind(this)}
                value={this.state.studentRegistrationDetails.phone}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col">
              <FloatingLabel
                id='studentLocation'
                name='location'
                placeholder='LOCATION'
                type='text'
                styles={this.inputStyle}
                onChange={this.updateStudentDetails.bind(this)}
                value={this.state.studentRegistrationDetails.location}
              />
            </div>
          </div>
          <button className="submit-button">Create student and login</button>
        </form>
        <p className="login-prompt" onClick={this.returnToPrimaryForm.bind(this)}>
          <span>Back to my details</span>
        </p>
      </div>
    )
  }

  render() {
    if(!this.state.showSecondaryForm) {
      return this.renderPrimaryForm()
    } else {
      return this.renderSecondaryForm();
    }
  }
}

export default ParentRegistrationForm;
