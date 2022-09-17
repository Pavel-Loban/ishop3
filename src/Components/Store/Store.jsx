import React from 'react'
import { useState } from 'react';
import './store.scss'
import Product from '../Product/Product'
import { useEffect } from 'react';
import axios from 'axios';

const Store = () => {
  const [products, setProducts]  = useState ([]);


  const baseUrl = 'http://localhost:3001/data';



  useEffect(() => {
    axios.get(baseUrl).then((res) => {
      setProducts(res.data)
      // console.log(res.data)
    })
  },[])


  return (

    <div className={'products'} >

        <div className={'products'}>
          {products.map(item =>
            <Product setProducts={setProducts} item={item} key={item.id} products={products}  />
            )}
        </div>
    </div>
  )
}

export default Store
