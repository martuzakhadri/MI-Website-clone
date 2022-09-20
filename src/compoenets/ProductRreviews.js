import React from 'react'
import '../styles/productReviews.css'
import ProductViewCard from '../compoenets/ProductViewCard'

const ProductRreviews = ({ProductRreviews}) => {
  return (
    <div className='ProductRreviews'>
    
    {
        ProductRreviews.map(( item,index)=>(
<ProductViewCard  price={item.price} name={item.name} 
image={item.image} review={item.review} index={index} key={item.image}/>

        ))


    }
    </div>
  )
}

export default ProductRreviews