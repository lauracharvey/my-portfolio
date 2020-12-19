import React from 'react'
import { DiJsBadge, DiHtml5, DiCss3, DiSass, DiReact, DiNodejsSmall, DiMongodb, DiPython, DiGithubBadge } from "react-icons/di";
import { SiFlask, SiPostgresql, SiHeroku, SiBabel, SiNetlify } from "react-icons/si"
import { BiWindowOpen } from "react-icons/bi"
import Spoonder from '../images/spoonder.png'
import DevsMap from '../images/devsmap.png'
import Project2 from '../images/project2.png'
import StrangerInvaders from '../images/strangerinvaders.png'
import PlanGlam from '../images/planetglam.png'
import AJWheels from '../images/ajwheels.png'
import HundredDays from '../images/100days.png'
import SeaHorseR from '../images/seahorseright.png'
import SeaHorseL from '../images/seahorseleft.png'
import Turtle from '../images/turtle.png'
import Manta from '../images/mantaray.png'
import Jelly from '../images/jelly.png'

const Projects = () => {

  return <section className="projects" id="projects">
    <h2>My Projects</h2>
    <img id="seahorsel" src={SeaHorseL} alt="sea horse" />
    <img id="seahorser" src={SeaHorseR} alt="sea horse" />
    <img id="turtle" src={Turtle} alt="turtle" />
    <img id="manta" src={Manta} alt="manta ray" />
    <img id="jelly" src={Jelly} alt="jellyfish" />
    <img id="jelly2" src={Jelly} alt="jellyfish" />

    <div className="project-container">
      <div className="image">
        <img src={Spoonder} alt='project screenshot' />
      </div>
      <div className="desc">
        <h3>Spoonder</h3>
        <h4>Group Project | One Week</h4>
        <div className="icon-container">
          <div>
            <DiReact />
          </div>
          <DiSass />
          <div>
            <DiPython />
          </div>
          <div>
            <SiFlask />
          </div>
          <div>
            <SiPostgresql />
          </div>
        </div>
        <p>
          Spoonder is a dating app with a difference, instead of swiping to find people to date, you swipe to find someone to Cwtch ♥️.
        </p>

        <p>
          The concept for Spoonder was an idea of mine after a peer suggested we build dating app for our final project. We based Spoonder on Tinder (incase you hadn't already guessed). The majority of the backend was built as a 3 using VS Code Live Share. I then built out a number of the frontend components and did all design work and Sass.
        </p>
        <div className="button-container">
          <a href="https://spoondr.herokuapp.com/"><BiWindowOpen /> Live Site</a>
          <a href="https://github.com/lauracharvey/project-4"><DiGithubBadge /> GitHub</a>
        </div>
      </div>
    </div>

    <div className="project-container">
      <div className="image">
        <img src={DevsMap} alt='project screenshot' />
      </div>
      <div className="desc">

        <h3>Devs.Map</h3>
        <h4>Group Project | One Week</h4>

        <div className="icon-container">
          <div>
            <DiReact />
          </div>
          <DiSass />
          <div>
            <DiNodejsSmall />
          </div>
          <div>
            <DiMongodb />
          </div>
          <div>
            <SiHeroku />
          </div>
        </div>
        <p>
          Devs.Map started off as a dating app but turned into a social media platform for Developers to find each other, chat and collaborate.
          </p>
        <p>
          When we realised our original idea wasn't going to work as planned, I quickly came up with the idea and data for Devs.Map. I created the seed data using 'famous' Developers and Computer Scientists. I supported my peers in building out the backend and then designed and built the majority of the React.js frontend and did all Sass work.
        </p>

        <div className="button-container">
          <a href="https://still-river-70995.herokuapp.com/"><BiWindowOpen /> Live Site</a>
          <a href="https://github.com/lauracharvey/project-3"><DiGithubBadge /> GitHub</a>
        </div>

      </div>
    </div>

    <div className="project-container">
      <div className="image">
        <img src={Project2} alt='project screenshot' />
      </div>
      <div className="desc">

        <h3>GA Project 2</h3>
        <h4>Pair Project | 48 Hour</h4>

        <div className="icon-container">
          <div>
            <DiReact />
          </div>
          <div>
            <DiSass />
          </div>
          <div>
            <DiGithubBadge />
          </div>
        </div>
        <p>Project 2 was a 48 hour 'hackathon' with one other developer from my cohort at General Assembly.</p>
        <p>I was really excited to be paired with a Unicorn as I knew together we'd create something really pretty. We used the Harvard Art Museum API to pull through artwork data to create the pixel square affect. This was built almost entirely using VS Code Live Share and as such me and my partner shared the work very evenly working on a single component each.</p>

        <div className="button-container">
          <a href="https://lauracharvey.github.io/project-2/"><BiWindowOpen /> Live Site</a>
          <a href="https://github.com/lauracharvey/project-2"><DiGithubBadge /> GitHub</a>
        </div>

      </div>
    </div>

    <div className="project-container">
      <div className="image">
        <img src={StrangerInvaders} alt='project screenshot' />
      </div>
      <div className="desc">
        <h3>Stranger Invaders</h3>
        <h4>Solo Project | One Week</h4>

        <div className="icon-container">
          <div>
            <DiJsBadge />
          </div>
          <div>
            <DiHtml5 />
          </div>
          <div>
            <DiCss3 />
          </div>
          <div>
            <DiGithubBadge />
          </div>
        </div>
        <p>Stranger Invaders is a browser based JavaScript Game</p>
        <p>This was my first project at General Assembly, our task was to build a browser based version of a classic arcade style game. I choose Space Invaders as my inspiration and built the design, logic and UI of Stranger Invaders single handedly. I had a lot of fun with this project like putting the grid in "The Upsidedown" and swapping laser beams for Eggos.</p>

        <div className="button-container">
          <a href="https://lauracharvey.github.io/GA-Project-1/"><BiWindowOpen /> Live Site</a>
          <a href="https://github.com/lauracharvey/GA-Project-1"><DiGithubBadge /> GitHub</a>
        </div>
      </div>
    </div>

    <div className="project-container" id="planglam">
      <div className="image">
        <img src={PlanGlam} alt='project screenshot' />
      </div>
      <div className="desc">
        <h3>Planet Glam</h3>
        <h4>Freelance Client | In Progress</h4>

        <div className="icon-container">
          <div>
            <DiHtml5 />
          </div>
          <div>
            <DiCss3 />
          </div>
          <div>
            <SiNetlify />
          </div>
        </div>
        <p>
          A webpage created with HTML & CSS for a Makeup Artist based in Cardiff. The client wanted a Gothic/Witchy/Space vibe.
        </p>
        <p>
          Awaiting client photos and content.
        </p>

        <div className="button-container">
          <a href="https://planetglam.co.uk/"><BiWindowOpen /> Live Site</a>
        </div>
      </div>
    </div>

    <div className="project-container" id="ajwheels">
      <div className="image">
        <img src={AJWheels} alt='project screenshot' />
      </div>
      <div className="desc">
        <h3>AJ Wheel Refurbishment</h3>
        <h4>Freelance Client | In Progress</h4>

        <div className="icon-container">
          <div>
            <DiHtml5 />
          </div>
          <div>
            <DiCss3 />
          </div>
          <div>
            <SiNetlify />
          </div>
        </div>
        <p>
          A website created with HTML & CSS for an Alloy Wheel Specialist. The client gave me full creative control and is very pleased with the mock up.
        </p>
        <p>
          Awaiting client photos and content.
        </p>

        <div className="button-container">
          <a href="https://ajwheelrefurbishment.netlify.app/"><BiWindowOpen /> Live Site</a>
        </div>
      </div>
    </div>

    <div className="project-container">
      <div className="image">
        <img src={HundredDays} alt='project screenshot' />
      </div>
      <div className="desc">
        <h3>100 Days of Code</h3>
        <h4>Solo Project | One Day</h4>

        <div className="icon-container">
          <div>
            <DiJsBadge />
          </div>
          <div>
            <DiHtml5 />
          </div>
          <div>
            <DiCss3 />
          </div>
          <div>
            <SiNetlify />
          </div>
        </div>
        <p>
          A fun little site built single handedly with HTML, CSS & vanilla JavaScript to celebrate completing 100 Days of Code.
        </p>

        <div className="button-container">
          <a href="https://lauras100days.netlify.app/"><BiWindowOpen /> Live Site</a>
        </div>
      </div>
    </div>

    <h4>To see more of my projects please check <a href="https://github.com/lauracharvey">GitHub</a> & <a href="https://codepen.io/lauracharvey/">CodePen</a></h4>


  </section>

}

export default Projects