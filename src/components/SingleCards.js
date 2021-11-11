import React from 'react'

const SingleCards = ({url}) => {


    return (
        <div className="singlecard__container">
            <img src={url} className="singlecard__image"/>
        </div>
    )
}

export default SingleCards
