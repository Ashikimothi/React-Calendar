import React from 'react'
import './App.css'
import Calendar from './Components/Calendar'
const App = () => {
    return (<>
    <section className='hero-is-primary'>
        <div className="hero-body">
            <div className="container">
             <p className="has-text-centered">
             <strong><em>Calendar</em></strong>
                </p>
            </div>
        </div>
    </section>
    <div className="container has-text-centered">
        <Calendar />
    </div>

    </>
    )
}

export default App
