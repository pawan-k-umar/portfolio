import React, {useState}from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {NavLink, Route} from 'react-router-dom';

import { useMediaPredicate } from "react-media-hook";



const Nav = () => {
  const [state, setState] = useState(true);
  const [toggle, setToggle] = useState(true);

const toggleFn =()=>{
  setState(!state);
}

const toggleCross =()=>{
  setToggle(!toggle);
}

const biggerThan400 = useMediaPredicate("(min-width: 768px)");

  const NavList = ()=>{
    
    return (
        <ul className="navbar__right"  onClick={toggleFn, toggleCross} >
        <li><NavLink  className='navlink' exact activeClassName='active_nav' to='/'>Home</NavLink></li>
        <li><NavLink  className='navlink' exact activeClassName='active_nav' to='/about'>About</NavLink></li>
        <li><NavLink  className='navlink' exact activeClassName='active_nav' to='/project'>Project</NavLink></li>
        <li><NavLink  className='navlink' exact activeClassName='active_nav' to='/contact'>Contact</NavLink></li>
        </ul>
    )
  }


  return (
    <nav className="navbar_normal">
      <div className="container_normal">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
            <a href='/'> <h2>paw<span className='dot'>.</span>an</h2></a>
            </div>
          </ul>
          {biggerThan400 ? (<NavList/>):( state && toggle ? (<NavList/>) : (""))}
         
        </div>
      </div>
     { toggle ? 
          (<div className="toggle" onClick={toggleFn, toggleCross}><FaTimes /></div>)
          :
          (<div className="toggle" onClick={toggleFn,toggleCross}>  <FaBars /></div>)}
    </nav>
  );
};

export default Nav;
