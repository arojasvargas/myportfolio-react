import React, { createContext, useState } from 'react'
import Header from './components/Header/Header'
import styles from './App.css'
import Certifications from './components/Certifications/Certifications'
import Intro from './components/Intro/Intro'
import { Outlet, Route, Routes } from 'react-router-dom'
import Notfound from './components/NotFound/Notfound'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'

export const MyContext = createContext({})

const App = () => {

    const [message, setMessage] = useState("C:\Alexander Rojas>")

    const Layout = () => {
        return(
            <> 
            <MyContext.Provider value={{message, setMessage}}>
            <div className={styles.App}>
                <header>
                    <Header/>
                </header>
                <main>
                    <Intro />
                    <Experience/>
                    <Education/>
                    <Certifications />
                </main>
            </div>
            </MyContext.Provider>
            <Outlet />
        </>
        )
    }

    const ErrorPage = () => <Notfound/>

    return (
        <Routes>
            <Route index path='/' element={<Layout/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    )

}

export default App;