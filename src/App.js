import React from 'react'
import Carousel from './components/Carousel'

const App = () => {
    return (
        <div className="app__container">
            <h1 className="app__title">ReactRousel</h1>
            <div className="app__content">
                <Carousel/>
            </div>
        </div>
    )
}

export default App
