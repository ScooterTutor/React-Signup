import React, { Component } from 'react';
import './App.css';
import SideBanner from './components/side-banner/SideBanner';
import RegistrationForm from './components/forms/registration-form/RegistrationForm';

class App extends Component {
  render() {
    return (
      <div className="signup-container row">
        <SideBanner></SideBanner>
        <RegistrationForm></RegistrationForm>
      </div>
    );
  }
}

export default App;
