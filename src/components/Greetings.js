import React from 'react'

const Greetings = ({lang, children}) => {
    if (lang === "de"){
        return (
            <div className='IdCard'>
            Hallo {children}
            </div>
        )
    } else if (lang === "fr" ){
        return (
            <div className='IdCard'>
            Bonjour {children}
            </div>
        ) 
    }

}

export default Greetings