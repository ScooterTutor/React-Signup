import React, { Component } from 'react';
import './App.css';
import SideBanner from './components/side-banner/SideBanner';
import FormContainer from './components/form-container/FormContainer';

class App extends Component {
  render() {
    return (
      <div className="signup-container row">
        <SideBanner></SideBanner>
        <FormContainer></FormContainer>
      </div>
    );
  }
}

export default App;
