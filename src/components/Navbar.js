import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset < window.innerHeight - 90) {
      setScrolled(false);
    }
    else {
      setScrolled(true);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  let x = [];
  if (scrolled) {
    x.push('fixed');
  }

  return (
    <header id="desktop-nav" className={x.join(" ")}>
      <nav className="navigation">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="https://www.youtube.com/channel/UCA_amP6VLmWWFyeHvtN5-aQ?view_as=subscriber" target="_blank" rel="noopener noreferrer">YouTube</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar