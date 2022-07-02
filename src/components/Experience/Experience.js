import React from 'react'
import experience from '../../experience.json'
import Styles from './Experience.module.css'

const Experience = () => {
  return (
    <div className={'container p-5 my-2 shadow rounded bg-light'}>
        <h3>Experience</h3>
        <ul className='ps-0 ps-lg-4'>
            {experience.map(
                (item) => {
                  
                  return(
                    <div className="row align-items-center" key={item.id}>
                      <div className='col-3 col-md-2 col-lg-1'>
                        <img src={item.url} className={`img-fluid`} alt="Company logo"></img>
                      </div>
                      <div className='col-9 col-md-10 col-lg-11 d-flex flex-column'>
                        <h4 className={`${Styles.h4}`}>{item.company}</h4>
                        <p className={`${Styles.h4} mb-1`}>{item.title}</p>
                        <p className={`${Styles.p} mb-1`}>{item.start} - {item.end}</p>
                        <ul className={`mb-1`}>
                          {item.description.map(
                            (summary) => <li key={summary.id} className={`${Styles.p}`}>{summary.summary}</li>
                          )
                          }
                        </ul>
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

export default Experience