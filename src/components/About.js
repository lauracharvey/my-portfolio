import React, { Component } from 'react';
import Divider from '../images/divider.png'
import { DiJsBadge, DiHtml5, DiCss3, DiSass, DiReact, DiNodejsSmall, DiMongodb, DiPython, DiGit, DiGithubBadge, DiTerminal, DiResponsive, DiNpm, DiVisualstudio } from "react-icons/di";
import { SiFlask, SiPostgresql, SiHeroku, SiNetlify, SiSlack, SiZoom, SiBabel } from "react-icons/si"
import { IoAccessibilityOutline } from "react-icons/io5"


export default class About extends Component {

  render() {

    return <section className="about" id="about">
      <div className="about-inner">
        <h2>About Me</h2>
        <h3>If a unicorn is a designer/developer hybrid then I am a “mermaid” - a lady developer with excellent people skills.</h3>
        <p>My non-tech roles have allowed me to develop exceptional soft skills and become a superb communicator. I bring passion, determination and kindness to any role I undertake.<br></br>
    I took on a role in DevRel after graduating from the Software Engineering Immersive with General Assembly unfortunately it isn't what I expected so I am now looking for a full time development role with mentorship and room to grow. I really love the creativity and visual aspects of Front End and would like the opportunity to explore more about UI/UX.<br><br/>
    My favourite things are: programming, being nice to people, dirt bikes, birthday cake and seeing the underdog triumph.
      </p>
      </div>
      <h2 id="skills">My Skills</h2>

      <div className="skills">
        <div>
          <DiJsBadge />
          <p>JavaScript</p>
        </div>
        <div>
          <DiHtml5 />
          <p>HTML</p>
        </div>
        <div>
          <DiCss3 />
          <p>CSS</p>
        </div>
        <div>
          <DiSass />
          <p>Sass</p>
        </div>
        <div>
          <DiReact />
          <p>React</p>
        </div>
        <div>
          <DiNodejsSmall />
          <p>Node.js</p>
        </div>
        <div>
          <DiNpm />
          <p>NPM</p>
        </div>
        <div>
          <SiBabel />
          <p>Babel</p>
        </div>
        <div>
          <DiMongodb />
          <p>MongoDB</p>
        </div>
        <div>
          <DiPython />
          <p>Python</p>
        </div>
        <div>
          <SiFlask />
          <p>Flask</p>
        </div>
        <div>
          <SiPostgresql />
          <p>PostgreSQL</p>
        </div>
        <div>
          <DiVisualstudio />
          <p>VS Code</p>
        </div>
        <div>
          <DiGit />
          <p>Git</p>
        </div>
        <div>
          <DiGithubBadge />
          <p>GitHub</p>
        </div>
        <div>
          <DiTerminal />
          <p>CLI</p>
        </div>
        <div>
          <SiHeroku />
          <p>Heroku</p>
        </div>
        <div>
          <SiNetlify />
          <p>Netlify</p>
        </div>
        <div>
          <IoAccessibilityOutline />
          <p>Accessibility</p>
        </div>
        <div>
          <DiResponsive />
          <p>Responsive Design</p>
        </div>
      </div>


      <img src={Divider} alt='wave shape divider' />
    </section>

  }
}
