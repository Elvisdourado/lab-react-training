import React from 'react';

const IdCard = ({
    lastName,
    firstName,
    gender,
    height,
    birth,
    picture
}) => {
    return (
        <div className='IdCard'>
            <div>
                <img className="IdCardImage" src={picture} alt={picture} />
            </div>
            <div className="StrongList">
            <h3>Full name: {firstName} {lastName}</h3>
            <h3>Gender: {gender}</h3>
            <h3>Height: {height} cms</h3>
            <h3>Date of birth: {birth}</h3>
            </div>
        </div>
        
    )
}

export default IdCard;