import React, { useState,useEffect } from 'react'
import Card from './components/card/Card'
import { getData } from './services/GetData'

const App = () => {

    const [photos, setPhotos] = useState(null)

    useEffect(() => {
        const getPhotos = async() =>{
            const resp = await getData();
            setPhotos(resp)
        }
        getPhotos();
    }, [])
    
    if(photos === null) {
        return (
            <div>
                 <h1>ReactRousel</h1>
            </div>
        )
    }
    else{
        return (
            <div className="container">
                <h1>ReactRousel</h1>
                {
                    photos.map( photos => (
                        <Card key={photos.id} url={photos.urls.regular} description={photos.description}/>
                    ))
                }
                
            </div>
        )
    }
}

export default App
