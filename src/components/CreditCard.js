
import React from 'react'

const CreditCard = ({ type, number, expirationMonth,
    expirationYear, bank, owner, bgColor, color }) => {

    function slicer(number) {
        let slice = []
        return slice = number.slice(12,)
    }

    function slicerAcc(numero) {
        let acc = numero.keys
        return slicerAcc = acc.slice(5,)
    }
    
    


    return (
        <div >
            <div className='credit'>
                <div className='logoAlign'>
                    <img className='cardLogo' src='../img/visa.png' alt='Visa Logo' />
                </div>
                <div className="credNum">
                    ●●●● ●●●● ●●●● {slicer(number)}
                </div>
                <div className="credThirdLine"> 
                 
                    Expires {expirationMonth}, 
                    
     {expirationYear},{bank}
                </div>
                <div>
                    {owner},{bgColor},{color}
                </div>

            </div>
        </div>
    )



}

export default CreditCard