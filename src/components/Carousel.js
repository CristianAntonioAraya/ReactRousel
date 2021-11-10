import React, {useEffect} from 'react'
import { handleScroll } from '../services/Scroll'
import SingleCards from './SingleCards'

const Carousel = () => {

    const photos = [1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18]

    useEffect(() => {
        handleScroll();
    }, [])

    return (
        <div className="carousel__container">
            <button id="btnIzq" className="carousel__ctrl" >Izq</button>
            <div id="container" className="carousel__content" >
                <div className="carousel__photos">
                    {
                        photos.map((index,photo)=> (
                            <SingleCards key={index}/>
                        ))
                    }
                    
                </div>
            </div>
            <button id="btnDer" className="carousel__ctrl" >Der</button>
        </div>
    )
}

export default Carousel
