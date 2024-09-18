import React, { useEffect, useState } from 'react'

const Product = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => console.log(data));
  }, []);

  return (
    <div>
      
    </div>
  )
}

export default Product
