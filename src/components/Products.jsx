import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

function Products() {
    const [data,setData]=useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(d => setData(d));
    }, []);
  return (
    <div>
        
        <div className='d-flex flex-wrap justify-content-center'>
        {
            data.map((p)=>{
                return (
                    
                        <ProductCard product={p}></ProductCard>                    
                )
            })
        }
        </div>
    </div>
  )
}

export default Products