
import React from 'react'

const CreditCard = ({ type, number, expirationMonth,
    expirationYear, bank, owner, bgColor, color }) => {

    function slicer(number) {
        let slice = []
        return slice = number.slice(12,)
    }
     
    return (
        <div>
            <div className='credit' style={{backgroundColor: bgColor, color: color}}>
                <div className='logoAlign'>
                    <img className='cardLogo' src='../img/visa.png' alt='Visa Logo' />
                </div>
                <div className="credNum">
                    ●●●● ●●●● ●●●● {slicer(number)}
                </div>
                <div className="credThirdLine"> 
                 
                    Expires {expirationMonth}/                     
     {expirationYear.toString().slice(2)} {bank}
                </div>
                <div>
                {owner}               
                </div>

            </div>
        </div>
    )



}

export default CreditCard