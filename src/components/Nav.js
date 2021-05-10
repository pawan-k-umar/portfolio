import React from "react";
import { FaBars } from "react-icons/fa";
import {NavLink} from 'react-router-dom';


const NavList = ()=>{
  return (
      <ul className="navbar__right">
      <li><NavLink className='navlink' exact activeClassName='active_nav' to='/'>Home</NavLink></li>
      <li><NavLink className='navlink' exact activeClassName='active_nav' to='/about'>About</NavLink></li>
      <li><NavLink className='navlink' exact activeClassName='active_nav' to='/project'>Project</NavLink></li>
      <li><NavLink className='navlink' exact activeClassName='active_nav' to='/contact'>Contact</NavLink></li>
      </ul>
  )
}
const Nav = () => {
  const [state, setState] = React.useState(true);
  return (
    <nav className="navbar_normal">
      <div className="container_normal">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
            <a href='/'> <h2>paw<span className='dot'>.</span>an</h2></a>
            </div>
          </ul>
          {state ? (<NavList/>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaBars />
      </div>
    </nav>
  );
};

export default Nav;
