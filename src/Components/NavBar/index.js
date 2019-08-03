import React, { Component } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Sticky from 'react-sticky-el';

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

    <div className='nav'>
    <Sticky>
        <NavLink className="nav-cube nav-text" scroll={el => this.scrollWithOffset(el, 150)} to="/#cube">CUBE</NavLink>
        <NavLink className="nav-spiel nav-text" scroll={el => this.scrollWithOffset(el, 50)} to="/#the-spiel">The Spiel</NavLink>
        <NavLink className="nav-contact nav-text" scroll={el => this.scrollWithOffset(el, 120)} to="/#contact">Contact</NavLink>
    </Sticky>
      </div>

    );
  }
}

export default NavBar;
