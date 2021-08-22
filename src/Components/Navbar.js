import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const darkThemeRed = () => {
    if (props.mode === 'dark')
    {
      document.body.style.backgroundColor = 'red';
      document.getElementById('btn11').style.backgroundColor = 'orange';
      document.getElementById('btn12').style.backgroundColor = 'orange';
      document.getElementById('btn13').style.backgroundColor = 'orange';
      document.getElementById('btn14').style.backgroundColor = 'orange';
      document.getElementById('btn15').style.backgroundColor = 'orange';
      document.getElementById('btn16').style.backgroundColor = 'orange';
    }
  }

  const darkThemeOrange = () => {
    if (props.mode === 'dark')
    {
      document.body.style.backgroundColor = 'orange';
      document.getElementById('btn11').style.backgroundColor = 'green';
      document.getElementById('btn12').style.backgroundColor = 'green';
      document.getElementById('btn13').style.backgroundColor = 'green';
      document.getElementById('btn14').style.backgroundColor = 'green';
      document.getElementById('btn15').style.backgroundColor = 'green';
      document.getElementById('btn16').style.backgroundColor = 'green';
    }
  }

  const darkThemeGreen = () => {
    if (props.mode === 'dark')
    {
      document.body.style.backgroundColor = 'green';
      document.getElementById('btn11').style.backgroundColor = 'red';
      document.getElementById('btn12').style.backgroundColor = 'red';
      document.getElementById('btn13').style.backgroundColor = 'red';
      document.getElementById('btn14').style.backgroundColor = 'red';
      document.getElementById('btn15').style.backgroundColor = 'red';
      document.getElementById('btn16').style.backgroundColor = 'red';
    }
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
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutTextApp}</Link>
        </li>
      </ul>


      <div className="form-check mx-1">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={darkThemeRed}/>
                <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} for="flexRadioDefault1">
                  Red
                </label>
      </div>
      <div className="form-check mx-1">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={darkThemeGreen}/>
                <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} for="flexRadioDefault2">
                  Green
                </label>
      </div>
      <div className="form-check mx-1">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" onClick={darkThemeOrange}/>
                <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} for="flexRadioDefault3">
                  Orange
                </label>
      </div>

        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-3`}>
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'dark' ? 'Disable' : 'Enable'} Dark Mode</label>
        </div>
    </div>
  </div>
  </nav>
    )
} 
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
aboutTextApp: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title: 'Set Title Here',
    aboutTextApp: 'Set About Here'
}