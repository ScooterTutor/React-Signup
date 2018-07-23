import React, { Component } from 'react';
import '../registrationFormStyles.css';
import FloatingLabel, {
  focusStyles,
  inputStyles,
  labelStyles
} from 'floating-label-react'

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
      location: ''
    }
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

  handleChange(event) {
    let newState = {}
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return(
      <div className="reg-form-container">
        <form className="registration-form" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="form-group col">
              <FloatingLabel
                id='firstName'
                name='firstName'
                placeholder='FIRST NAME'
                type='text'
                styles={this.inputStyle}
                onChange={this.handleChange.bind(this)}
                value={this.state.firstName}
              />
            </div>
            <div className="form-group col">
              <FloatingLabel
                id='lastName'
                name='lastName'
                placeholder='LAST NAME'
                type='text'
                styles={this.inputStyle}
                onChange={this.handleChange.bind(this)}
                value={this.state.lastName}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col">
              <FloatingLabel
                id='phone'
                name='phone'
                placeholder='PHONE'
                type='text'
                styles={this.inputStyle}
                onChange={this.handleChange.bind(this)}
                value={this.state.phone}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col">
              <FloatingLabel
                id='email'
                name='email'
                placeholder='EMAIL'
                type='email'
                styles={this.inputStyle}
                onChange={this.handleChange.bind(this)}
                value={this.state.email}
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
                onChange={this.handleChange.bind(this)}
                value={this.state.password}
              />
            </div>
            <div className="form-group col">
              <FloatingLabel
                id='confirmPassword'
                name='confirmPassword'
                placeholder='CONFIRM PASSOWRD'
                type='password'
                styles={this.inputStyle}
                onChange={this.handleChange.bind(this)}
                value={this.state.confirmPassword}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col">
              <FloatingLabel
                id='location'
                name='location'
                placeholder='LOCATION'
                type='text'
                styles={this.inputStyle}
                onChange={this.handleChange.bind(this)}
                value={this.state.location}
              />
            </div>
          </div>
          <button className="submit-button">Start booking online now</button>
        </form>
        <p className="login-prompt">Already have an account? <span>Sign in</span></p>
      </div>
    )
  }
}

export default RegistrationForm;
