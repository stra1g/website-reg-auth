import React from 'react';
import { Link } from 'react-router-dom'

import '../styles/pages/landing.css'

//const logo_cadern = require('../images/logo-caderno.svg')

//const logoCaderno = require('../images/logo-caderno.svg')

import logo_caderno  from '../images/logo-caderno.svg' 
import logo_productive from '../images/logo-productive.svg'
import logo_seguranca from '../images/logo-seguranca.svg'
import logo from '../images/logo.svg'

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <div className="left-content">
          <div className="info">
            <div className="description">
              <img src={logo_caderno} alt=""/>
              <span>Save your notes</span>
            </div>

            <div className="description">
              <img src={logo_seguranca} alt="logo_seguranca" />
              <span>Keep safe</span>
            </div>

            <div className="description">
            <img src={logo_productive} alt="logo_productive" />
            <span>Be productive</span>
            </div>
          </div>
        </div>
        <div className="right-content">
          <div className="info">
            <img src={logo} alt="logo_app" />

            <div className="main">
              <span>When you plan what you need to do you are being best.</span>
            </div>
            <div className="secundary">
              <span>Join app now</span>
            </div>

            <div className="buttons">
              <Link to="/register" className="button-link">
                <div className="button-sign-up">
                  <span>Sign up</span>
                </div>
              </Link>
              <Link to="/login" className="button-link">
                <div className="button-login">
                  <span>Log in</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Landing;