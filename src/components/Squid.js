import React from 'react'
import Slide from 'react-reveal/Slide';
import Squid from '../images/squid.png'
import Fade from 'react-reveal/Fade'
import Bubbles from '../images/bubbles.png'

class SquidSlide extends React.Component {
  render() {
    return (
      <div className="squid">
        <Slide right duration={8000}>
          <img src={Squid} alt="squid"/>
        </Slide>
        <Fade duration={10000}>
          <img className="bubbles" src={Bubbles} alt="bubbles"/>
        </Fade>
      </div>
    );
  }
}

export default SquidSlide;