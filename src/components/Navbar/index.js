import React from 'react'
import { Link } from 'react-router-dom'
import { propsToHelperClasses } from '../../helpers/componentHelpers';
import './navbar.css'

const Navbar = ({ children, ...props }) => (
  <nav className={`navbar ${propsToHelperClasses(props)}`}>
    <div className="container">
      {children}
    </div>
  </nav>
)

Navbar.Menu = ({ children, ...props }) => (
  <div className={`navbar-menu ${propsToHelperClasses(props)}`}>
    {children}
  </div>
)

Navbar.Burger = ({ children, ...props }) => (
  <div className={`navbar-burger burger ${propsToHelperClasses(props)}`}>
    {children}
  </div>
)

Navbar.Brand = ({ children, ...props }) => (
  <div className={`navbar-brand ${propsToHelperClasses(props)}`}>
    {children}
  </div>
)

Navbar.Link = ({ children, to, ...props }) => (
  <Link to={to} className={`navbar-item ${propsToHelperClasses(props)}`} >
    {children}
  </Link>
)

Navbar.Item = ({ children, ...props }) => (
  <div className={`navbar-item ${propsToHelperClasses(props)}`} >
    {children}
  </div>
)

Navbar.End = ({ children }) => (
  <div className="navbar-end">
    {children}
  </div>
)

Navbar.Start = ({ children }) => (
  <div className="navbar-start">
    {children}
  </div>
)

export default Navbar
