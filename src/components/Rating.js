import React from 'react'

const Rating = (children) => {
    const ratingValue = Number(children).toFixed();

    let stars = '';
    for(let i = 0; i < 5; i++) {
        stars += i < ratingValue ? '★' : '☆';
    } 

    return (
        <div className='Rating'>
            <p>{stars}</p>
        </div>
    )
}





// const Rating = ({children}) => {
//     if ({children} === 0) {
//         return (
//             <div>☆☆☆☆☆</div>
//         )
//     } else if ({children} <= 1.49) {
//             return (
//                 <div>★☆☆☆☆</div>
//             )
//     } else if ({children} >= 1.50 && {children} <= 2.99) {
//         return (
//             <div>★★☆☆☆</div>
//         )
// } else if ({children} >= 3 && {children} <= 3.99) {
//     return (
//         <div>★★★☆☆</div>
//     )
// } else if ({children} >= 4 && {children} <= 4.99) {
//     return (
//         <div>★★★★☆</div>
//     )
        
//     } else 
//     return (
//         <div>★★★★★</div>
//     )
//     }

    export default Rating
