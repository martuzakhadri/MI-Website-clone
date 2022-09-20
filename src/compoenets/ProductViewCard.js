import React from 'react'
import '../styles/productViewCard.css'
const ProductViewCard = ({image,index,name,price,review}) => {
  return (
    <div className='productReviewCard'>
    <img  src={image} alt={ `${index} review`}/>
    <h5> {review}</h5>
    <span>{name}</span>
    <b>{price}</b>
    </div>
  )
}

export default ProductViewCard