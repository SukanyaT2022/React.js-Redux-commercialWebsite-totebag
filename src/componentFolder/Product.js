import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Product = () => {
  const data = useSelector((state) => state.products);
  const products, setProducts = useState([]);
  useEffect(()=>{
    setProducts(data.value)
  },[data])

  return (
    <div>
      <h1>Product component</h1>
      {products && products.map((item)=>(
          <div>
            <div>Title: {item.title}</div>
            <div>Description: {item.description}</div>
            <div>price: {item.price}</div>
            <div>price: {item.images[0]}</div>
          </div>
        )
      )}
    </div>
  )
}

export default Product
