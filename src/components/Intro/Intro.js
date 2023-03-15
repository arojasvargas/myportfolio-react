import React from 'react'
import Styles from './Intro.module.css'
import banner from './img/intro-code.jpg'
import profilepic from './img/1652492749946.jpg'

const Intro = () => {
  return (
    <div className={`p-0 my-3 container shadow rounded bg-light`}>
        <img className={`${Styles.banner}`} src={banner} alt='Banner showing code'></img>
        <div className='container px-4'>
            <div className='row'>
                <div className='col'>
                    <img className={`${Styles.profile}`} src={profilepic} alt='Alexander Rojas'></img>
                </div>
            </div>
        </div>
        <div className='container-fluid d-flex flex-column flex-md-row pb-4'>
            <div className='container px-4'>
                <div className='row'>
                    <div className='col mb-1'>
                        <div className='row'>
                            <h3>Alexander Rojas Vargas</h3>
                        </div>
                        <div className='row'>
                            <span>Site Reliability Engineer II at Akamai Technologies</span>
                        </div>
                        <div className='row'>
                            <span>Alajuela, Costa Rica</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container px-4 align-self-center'>
                <div className='row'>
                    <div className='col'>
                        <h3>About</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <span>In my role as a Site Reliability Engineer, I am committed to continuously improving system performance, minimizing downtime, and maximizing the uptime of critical applications. My technical background includes experience in cloud infrastructure management, network architecture design, and automation tools for deployment and monitoring.</span>
                    </div>
                    
                </div>
            </div>
        </div>
        
    </div>
  )
}
export default Intro
