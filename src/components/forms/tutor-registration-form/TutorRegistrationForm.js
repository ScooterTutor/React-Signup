import React, { Component } from 'react';
import '../globalFormStyles.css';
import FloatingLabel, {
  focusStyles,
  inputStyles,
  labelStyles
} from 'floating-label-react';

class TutorRegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tutorDetails: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
        location: ''
      },
      tutorSkills: {
      },
      showSecondaryForm: false
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

  returnToPrimaryForm() {
    this.setState({
      showSecondaryForm: false
    });
    this.props.returnToPrimaryForm();
  }

  updateTutorDetails(event) {
    let previousState = {...this.state}; // create a copy of previous state
    previousState.parentRegistrationDetails[event.target.name] = event.target.value; // update details
    this.setState(previousState); // update state
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state);
    this.setState({showSecondaryForm: true})
  }

  render() {
    if(!this.state.showSecondaryForm) {
      return(
        <div className="ico-form-container">
          <form className="ico-form" onSubmit={this.handleSubmit.bind(this)}>
            <div className="row">
              <div className="form-group col">
                <FloatingLabel
                  id='firstName'
                  name='firstName'
                  placeholder='FIRST NAME'
                  type='text'
                  styles={this.inputStyle}
                  onChange={this.updateTutorDetails.bind(this)}
                  value={this.state.tutorDetails.firstName}
                />
              </div>
              <div className="form-group col">
                <FloatingLabel
                  id='lastName'
                  name='lastName'
                  placeholder='LAST NAME'
                  type='text'
                  styles={this.inputStyle}
                  onChange={this.updateTutorDetails.bind(this)}
                  value={this.state.tutorDetails.lastName}
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
                  onChange={this.updateTutorDetails.bind(this)}
                  value={this.state.tutorDetails.phone}
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
                  onChange={this.updateTutorDetails.bind(this)}
                  value={this.state.tutorDetails.email}
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
                  onChange={this.updateTutorDetails.bind(this)}
                  value={this.state.tutorDetails.password}
                />
              </div>
              <div className="form-group col">
                <FloatingLabel
                  id='confirmPassword'
                  name='confirmPassword'
                  placeholder='CONFIRM PASSOWRD'
                  type='password'
                  styles={this.inputStyle}
                  onChange={this.updateTutorDetails.bind(this)}
                  value={this.state.tutorDetails.confirmPassword}
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
                  onChange={this.updateTutorDetails.bind(this)}
                  value={this.state.tutorDetails.location}
                />
              </div>
            </div>
            <button onClick={this.props.progressToSecondaryForm} className="submit-button">Subject details <i className="fas fa-long-arrow-alt-right fa-fw fa-sm"></i></button>
          </form>
        </div>
      )
    } else {
      return(
        <div className="ico-form-container">
          <form className="ico-form" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="form-group col">
                <FloatingLabel
                  id='firstName'
                  name='firstName'
                  placeholder='FIRST NAME'
                  type='text'
                  styles={this.inputStyle}
                  onChange={this.updateTutorDetails.bind(this)}
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
                  onChange={this.updateTutorDetails.bind(this)}
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
                  onChange={this.updateTutorDetails.bind(this)}
                  value={this.state.phone}
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
                  onChange={this.updateTutorDetails.bind(this)}
                  value={this.state.location}
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
  }
}

export default TutorRegistrationForm
