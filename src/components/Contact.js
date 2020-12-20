import React from 'react';
import { FaTwitterSquare, FaLinkedin, FaDev, FaYoutube } from 'react-icons/fa'
import { DiGithubBadge } from 'react-icons/di'
import { FiSend } from 'react-icons/fi'
import HeadShot from '../images/profilepic.png'

const Contact = () => {

  return <section className="contact" id="contact">
    <h2>Connect with Me</h2>
    <div className="headshot">
      <img src={HeadShot} alt='head shot' />
    </div>
    <div className="socials-container">

      <a href="https://twitter.com/lauracharvey">
        <div>
          <FaTwitterSquare />
        </div>
      </a>
      <a href="https://github.com/lauracharvey">
        <div>
          <DiGithubBadge />
        </div>
      </a>
      <a href="https://www.linkedin.com/in/lauracharvey/">
        <div>
          <FaLinkedin />
        </div>
      </a>
      <a href="https://dev.to/lauracharvey">
        <div>
          <FaDev />
        </div>
      </a>
      <a href="https://www.youtube.com/channel/UCA_amP6VLmWWFyeHvtN5-aQ?view_as=subscriber">
        <div>
          <FaYoutube />
        </div>
      </a>
    </div>

    <form action="https://formspree.io/mdowbzpn" method="POST">
    <h3>Send me an Email</h3>
      <label>Your Name</label>
      <input name="name" type="text" placeholder="Laura Harvey"></input>
      <label>Your Email Address</label>
      <input name="_replyto" type="email" placeholder="laura@laura.com"></input>
      <label>Your Message</label>
      <textarea id="message" name="message"></textarea>
      <button type="submit"><FiSend /> SUBMIT</button>
    </form>
  </section>
}

export default Contact