import React, { useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';

const Sidebar = () => {

  return <header className="mobile-nav">
    <Menu className="burger-menu">
      <a className="menu-item" href="/">Home</a>
      <a className="menu-item" href="#about">About</a>
      <a className="menu-item" href="#skills">Skills</a>
      <a className="menu-item" href="#projects">Projects</a>
      <a className="menu-item" href="#blog">Blog</a>
      <a className="menu-item" href="https://www.youtube.com/channel/UCA_amP6VLmWWFyeHvtN5-aQ?view_as=subscriber" target="_blank" rel="noopener noreferrer">YouTube</a>
      <a className="menu-item" href="#contact">Contact</a>
    </Menu>
  </header>

}

export default Sidebar