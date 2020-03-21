/** @format */

import React from "react";

class Header extends React.Component {
  render() {
    return (
      <>
      
        <nav className='navbar-brand Header'>
          <h1 className='navbar-brand mb-0'>I want to eat!</h1>
          {this.props.children}
        </nav>
        
      </>
    );
  }
}

export default Header;
