import React, { Component } from 'react';
import '../globalFormStyles.css';
import FloatingLabel, {
  focusStyles,
  inputStyles,
  labelStyles
} from 'floating-label-react'

class SignInForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
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

  updateLoginDetails(event) {
    let previousState = {...this.state}; // create a copy of previous state
    previousState[event.target.name] = event.target.value; // update details
    this.setState(previousState); // update state
  }

  login(event) {
    event.preventDefault();
  }

  render() {
    return(
      <div className="ico-form-container sign-in">
        <form className="ico-form" onSubmit={this.login.bind(this)}>
          <div className="row">
            <div className="form-group col">
              <FloatingLabel
                id='email'
                name='email'
                placeholder='EMAIL'
                type='text'
                styles={this.inputStyle}
                onChange={this.updateLoginDetails.bind(this)}
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
                onChange={this.updateLoginDetails.bind(this)}
                value={this.state.password}
              />
            </div>
          </div>
          <button className="submit-button">LOGIN</button>
        </form>
      </div>
    )
  }
}

export default SignInForm;
