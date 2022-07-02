import React from 'react'
import certifications from '../../certifications.json'
import Styles from './Certification.module.css'

const Certifications = () => {

  return (
    <div className={'container p-5 my-2 shadow rounded bg-light'}>
        <h3>Licenses & certifications</h3>
        <ul className='p-0'>
            {certifications.map(
                (item) => {
                  return(
                    <div className="row" key={item.id}>
                      <div className='col-1'>
                        <img src={item.url} className={`${Styles.img}`} alt="Company logo"></img>
                      </div>
                      <div className='col-11 d-flex flex-column'>
                        <h4 className={`${Styles.h4}`}>{item.name}</h4>
                        <p className={`${Styles.h4} mb-1`}>{item.issuer}</p>
                        <p className={`${Styles.p} mb-1`}>Issued: {item.issued} - Expiration:  {item.expiration}</p>
                        <p className={`${Styles.p} mb-1`}>Credential ID {item.credentialId}</p>
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

export default Certifications