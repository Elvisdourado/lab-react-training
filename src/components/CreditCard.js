
import React from 'react'

const CreditCard = ({ type, number, expirationMonth,
     expirationYear,bank,owner,bgColor,color}) => {
        return (
            <div className='credit'>
                <div >
                    <div>
                    <img className='cardLogo' src='../img/visa.png' alt='Visa Logo' />
                    </div>
                    <div>
                    {type} {number} {expirationMonth},
     {expirationYear},{bank},{owner},{bgColor},{color}
                    </div>
              
                </div>
            </div>
        )
       


     }

     export default CreditCard