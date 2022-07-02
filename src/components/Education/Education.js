import React from 'react'
import education from '../../education.json'
import Styles from './Education.module.css'

const Education = () => {
  return (
    <div className={'container p-5 my-2 shadow rounded bg-light'}>
        <h3>Education</h3>
        <ul>
            {education.map(
               (item) => {
                  return(
                  <div className="row" key={item.id}>
                     <div className='col-1'>
                     <img src={item.url} className={`${Styles.img}`}></img>
                    </div>
                    <div className='col d-flex flex-column'>
                      <h4 className={`${Styles.h4}`}>{item.school}</h4>
                      <p className={`${Styles.p} mb-1`}>{item.degree}, {item.field}</p>
                      <p className={`${Styles.p} mb-1`}>{item.start} - {item.end}</p>
                      </div>
                    <hr></hr>
                  </div>
                  )
                }
            )}
        </ul>
    </div>
  )
}

export default Education