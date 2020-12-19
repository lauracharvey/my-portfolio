import React from 'react'
import Fade from 'react-reveal/Fade'
import Tuna from '../images/tuna.png'
import Shark from '../images/shark.png'

class FadeFish extends React.Component {
  render() {
    return (
      <div className="fish-level-one">
        <Fade left duration={3000}>
          <img id="tuna" src={Tuna} alt="tuna fish"/>
        </Fade>
        <Fade right delay={1000} duration={6000}>
          <img id="shark" src={Shark} alt="tuna fish"/>
        </Fade>
      </div>
    );
  }
}

export default FadeFish;