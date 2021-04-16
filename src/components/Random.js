import React from 'react'


const Random = (props) => {
  return (
    <div className='IdCard'>Random value between {props.min} and {props.max} => 
    {(Math.floor(Math.random() * (props.max - props.min)) + props.min)}</div>
  )

}      
export default Random



// if (max == 6 && min == 1) {
//     return (
//         <div className='IdCard'>Random value between {min} and {max} => {(Math.floor(Math.random() * (max - min)) + min)}</div>
//     )               
//     } else 
// }