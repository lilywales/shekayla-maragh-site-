import React, { Component } from "react";
import "./navbar.scss";

class NavBar extends Component {
  scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    });
  };

  onClick() {
    this.refs.inputElement.checked = false
  }

  render() {
    return (
      <div style={{height:"0px"}}>
        <h4 className="menu">Menu</h4>
        <input ref="inputElement" id="burger" type="checkbox" style={{ opacity: "0" }} />
        <label htmlFor="burger">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <nav>
          <ul>
            <li>
              <a onClick={ () => this.onClick() } href="#story">Story so far</a>
            </li>
            <li>
              <a onClick={ () => this.onClick() } href="#cube">CUBE</a>
            </li>
            <li>
              <a onClick={ () => this.onClick() } href="#projects">Projects</a>
            </li>
            <li>
              <a onClick={ () => this.onClick() } href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
