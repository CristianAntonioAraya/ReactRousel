import React, {useEffect, useState} from 'react'
import { handleScroll } from '../services/Scroll'
import SingleCards from './SingleCards'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleRight, faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import { getData } from '../services/GetData';


const Carousel = () => {

    const [photos, setphotos] = useState(null)

    useEffect(() => {
        const handleGetData = async() => {
            try {
                const resp = await getData();
                setphotos(resp)
                handleScroll();
            } catch (error) {
                console.log(error)
            }
        }
        handleGetData();
    }, [])
    console.log(photos)

    if(photos === null) {
        return(
            <div>
                <h1>Is Loading</h1>
            </div>
        )
    }

    return (
        <div className="carousel__container">
            <div className="carousel__ctrl izq">
                <div id="btnIzq" className="carosudel__btn-container">
                    <FontAwesomeIcon className="icon" icon={faAngleLeft} />
                </div>
            </div>
            <div id="container" className="carousel__content" >
                <div className="carousel__photos">
                    {
                        photos.map(photo=> (
                            <SingleCards key={photo.id} url={photo.urls.regular} id={photo.id} user={photo.user.name}/>
                        ))
                    }
                </div>
            </div>
            <div className="carousel__ctrl der">
                <div id="btnDer" className="carosudel__btn-container">
                    <FontAwesomeIcon className="icon"  icon={faAngleRight}/>
                </div>
            </div>
        </div>
    )
}

export default Carousel
