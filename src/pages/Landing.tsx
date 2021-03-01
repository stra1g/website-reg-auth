import React from 'react';
import { Link } from 'react-router-dom'

import '../styles/pages/landing.css'

import logo from '../images/logo.svg'
import logoNotebook from '../images/logo-caderno.svg'
import logoSecurity from '../images/logo-seguranca.svg'
import logoProductive from '../images/logo-productive.svg'

function Landing() {
  return (
    <div className="landing-page">
      <div className="left-content">
        <div className="l-content-wrapper">
          <div className="line-note">
            <img src={logoNotebook} alt="notebook" />
            <div className="detail">
              <span>Save your notes</span>
            </div>
          </div>
          <div className="line-note">
            <img src={logoSecurity} alt="security" />
            <div className="detail">
              <span>Keep safe </span>
            </div>
          </div>
          <div className="line-note-last">
            <img src={logoProductive} alt="productive" />
            <div className="detail">
              <span>Be productive</span>
            </div>
          </div>
        </div>
      </div>
      <div className="right-content">
        <div className="r-content-wrapper">
          <img src={logo} alt="logo" />
          <div className="description-main">
            <span>When you plan what you need to do you are being best.</span>
          </div>
          <div className="description-sub">
            <span>Join app now</span>
          </div>
          <div className="buttons">
            <Link to="/register" className="sign-up" href="#">
              <div className="text-button">
                <span>Sign Up</span>
              </div>
            </Link>
            <Link to="login" className="login" href="#">
              <div className="text-button">
                <span>Log In</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
};

export default Landing;