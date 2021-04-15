import React from 'react'

const max = 6
const min = 1
const Random = ({min, max}) => {
  return (
    <div className='IdCard'>Random value between {min} and {max} => {(Math.floor(Math.random() * (max - min)) + min)}</div>
  )

}

        

export default Random



// if (max == 6 && min == 1) {
//     return (
//         <div className='IdCard'>Random value between {min} and {max} => {(Math.floor(Math.random() * (max - min)) + min)}</div>
//     )               
//     } else 
// }