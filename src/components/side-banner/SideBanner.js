import React, { Component } from 'react';
import './sideBannerStyles.css';

class SideBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "test"
    }
  }

  render() {
    return(
      <div className="col-lg-6 banner-column-container">
        <div className="side-banner-gradient"></div>
        <div className="side-banner">
          <div className="logo-container">
            <div className="logo"></div>
          </div>
          <div className="hero-text-container">
            <h2>Take the hassle out of homework</h2>
            <p>Lorem ipsum the quick brown fox jumped over
              the lazy dog. Also the quick fox repeated to 
              jump of the damn lazy dog. Seriously lazy.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default SideBanner;
