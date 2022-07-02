import React, { Component, useContext } from 'react'
import { IconContext } from "react-icons";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { MyContext } from '../../App';
import Styles from './Header.module.css'

const Header = () => {

    const {message} = useContext(MyContext)

    return (
            <>
            <section id='sct-navbar'>
                <nav className={`${Styles.nav} navbar fixed-top navbar-expand-lg navbar-light`}>
                    <div className="container">
                        <div className={`${Styles.h1} ${Styles.typing} h1 navbar-brand m-0`}>{message}</div>
                        {/* <div className={`${Styles.caret}`}></div> */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                            <span className="navbar-text">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <IconContext.Provider value={{ color: "#666666", verticalAlign: "middle" }}>
                                    <li><a href="https://www.linkedin.com/in/alexander-rojas-vargas-558b6a186/" target="_blank" rel="noopener noreferrer" className={Styles.a}><FaLinkedinIn/><span className={`${Styles.span} d-lg-none`}> Visit my LinkedIn</span></a></li>
                                    <li><a href="https://github.com/arojasvargas" target="_blank" rel="noopener noreferrer" className={Styles.a}><FaGithub/><span className={`${Styles.span} d-lg-none`}> Check my Github repo</span></a></li>
                                    <li><a href="mailto:alex.rojas547@outlook.com" target="_blank" rel="noopener noreferrer" className={Styles.a}><FaEnvelope/><span className={`${Styles.span} d-lg-none`}> Contact me</span></a></li>
                                </IconContext.Provider>
                                </ul>
                            </span>
                        </div>
                    </div>
                </nav>
            </section>
            </>
    )
}

export default Header