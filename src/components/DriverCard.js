import React from 'react';
import '../App.css';
import Rating from '../components/Rating'
//import Rating from '../components/Rating';


const DriverCard = (props) => {
    return (
        <div>
            <div className="DriverCard">
                <div>
                    <img style={{marginLeft: 20}} src={props.img} alt='teste' />
                </div>
                <div className='driveId'>
                    <div style={{fontSize: 30}}>{props.name}</div>
                    <Rating children>{props.rating}</Rating>                   
                    <div style={{fontSize: 20}}> {props.car.model} {props.car.licensePlate} </div>
                </div>
            </div>

            <div>

            </div>


        </div>
    )


}

export default DriverCard

