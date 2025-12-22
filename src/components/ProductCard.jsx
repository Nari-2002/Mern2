import React from 'react'

function ProductCard(props) {
   function addTocart(product){
    
    const cart=localStorage.getItem("cart")
    const cartitems= JSON.parse(cart)||[]
    cartitems.push(product)
    localStorage.setItem("cart",JSON.stringify(cartitems))
   }

  return (
    <div className='border border-2 m-2 d-flex flex-column align-items-center p-2' style={{width:"300px"}}>
        <h4 title={props.product.title}>{props.product.title.slice(0,15)}</h4>
        <img src={props.product.image} height={"100px"} width={"100px"} className='object-fit-contain'></img>
        <p>price : &#8377; {props.product.price} /-</p>
        <p>Rating : {"⭐".repeat(Math.round(props.product.rating.rate))}</p>
        <button className='btn btn-primary' onClick={()=>addTocart(props.product)}>Add to cart</button>
    </div>
  )
}

export default ProductCard