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
                            <span>Bachelor's Degree in Computer Systems Engineering</span>
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
                        <span>Quality-oriented recent college graduate with a Bachelor of Engineering - BE in Systems Engineering, with 3+ years of work experience. Aiming to leverage academic experience and a proven knowledge of R&D, cloud computing and product development cycle to successfully fill the Systems Engineer role. </span>
                    </div>
                    
                </div>
            </div>
        </div>
        
    </div>
  )
}
export default Intro