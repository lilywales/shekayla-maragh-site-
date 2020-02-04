import React, { Component } from 'react';

import './navbar.scss'

class NavBar extends Component {

  scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    });
  }

  render() {

    return (



    <div >
  <h4 className="menu">Menu</h4>

<input id="burger" type="checkbox" style={{opacity: '0'}}/>

<label for="burger">
    <span></span>
    <span></span>
    <span></span>
</label>

<nav>
  <ul>

    <li><a href="#story">Story so far</a></li>
    <li><a href="#cube">CUBE</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
      </div>

    );
  }
}

export default NavBar;
