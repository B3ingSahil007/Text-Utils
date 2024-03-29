import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  let ButtonStyle = {
    height: '25px',
    width: '25px',
    cursor: 'pointer',
    border: '3px solid black'
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Contact Us</Link>
            </li>
          </ul>
          <div className="d-flex">
            <div className="bg-primary rounded mx-2 my-2" onClick={() => { props.toggleMode('primary') }} style={ButtonStyle}></div>
            <div className="bg-secondary rounded mx-2 my-2" onClick={() => { props.toggleMode('secondary') }} style={ButtonStyle}></div>
            <div className="bg-success rounded mx-2 my-2" onClick={() => { props.toggleMode('success') }} style={ButtonStyle}></div>
            <div className="bg-warning rounded mx-2 my-2" onClick={() => { props.toggleMode('warning') }} style={ButtonStyle}></div>
            <div className="bg-danger rounded mx-2 my-2" onClick={() => { props.toggleMode('danger') }} style={ButtonStyle}></div>
            <div className="bg-info rounded mx-2 my-2" onClick={() => { props.toggleMode('info') }} style={ButtonStyle}></div>
            <div className="bg-light rounded mx-2 my-2" onClick={() => { props.toggleMode('light') }} style={ButtonStyle}></div>
            <div className="bg-dark rounded mx-2 my-2" onClick={() => { props.toggleMode('dark') }} style={ButtonStyle}></div>
          </div>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            {/* <input className="form-check-input" onClick={() => { props.toggleMode(null) }} type="checkbox" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Change Theme</label> */}
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About-Us'
};