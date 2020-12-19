import React from 'react'
import { Parallax, Background } from 'react-parallax'
import './styles/styles.scss'
import Navbar from './components/Navbar'
import About from './components/About'
import FadeFish from './components/FishLevelOne'
import Projects from './components/Projects'
import Blog from './components/Blog'
import SquidSlide from './components/Squid'
import Contact from './components/Contact'
import Sidebar from './components/Sidebar'

function App() {
  return <div className="App">
    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div id="page-wrap">
    <Parallax
      strength={2000}
    >
      <Background className="custom-bg">
        <img src="https://i.imgur.com/U7QEKVx.png" alt="sea scape" />
      </Background>
      <div
        style={{ width: '100vw' }}
      >
        <Navbar />
        <About />
        <Projects />
        <FadeFish />
        <Blog />
        <SquidSlide />
        <Contact />
        </div>

    <div
      style={
        {
          height: 9750,
          width: '100vw'
        }
      }
    >
    </div>

    </Parallax >

    </div>

  </div >
}

export default App;
