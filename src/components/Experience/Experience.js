import React from 'react'
import experience from '../../experience.json'
import Styles from './Experience.module.css'

const Experience = () => {
  return (
    <div className={'container p-5 my-2 shadow rounded bg-light'}>
        <h3>Experience</h3>
        <ul>
            {experience.map(
                (item) => {
                  
                  return(
                    <div className="row" key={item.id}>
                      <div className='col-1'>
                        <img src={item.url} className={`${Styles.img}`} alt="Company logo"></img>
                      </div>
                      <div className='col d-flex flex-column'>
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