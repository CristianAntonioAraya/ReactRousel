import React from 'react'

const SingleCards = ({url, user}) => {


    return (
        <div className="singlecard__container">
            <img src={url} className="singlecard__image" />
            <div className="singlecard__info">
                <div className="singlecard__info">
                    <p>By:</p>
                    <p>{user}</p>
                    </div>
            </div>
        </div>
    )
}

export default SingleCards
