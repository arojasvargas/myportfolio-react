import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './Notfound.module.css'
import errorcode from './img/404-removebg.png'

const Notfound = () => {
  return (
    <div className={`container ${Styles.align} text-center`}>
        <img src={errorcode} className='mb-2'></img>
        <p><strong>ERROR.</strong> Page not found. <Link to='/'>Go Home</Link></p>
    </div>
  )
}

export default Notfound