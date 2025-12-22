import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md'

function Cart() {

  const [cartItms, setItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  )

  // Delete item
  function deleteitm(index) {
    const updatedCart = cartItms.filter((_, i) => i !== index)
    setItems(updatedCart)
    localStorage.setItem("cart", JSON.stringify(updatedCart))
  }

  // Calculate total
  const total = cartItms.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className='d-flex flex-wrap justify-content-center'>

      {cartItms.map((c, i) => (
        <div
          key={i}
          className='d-flex border border-2 w-75 m-2 p-1 justify-content-around'
        >
          <div style={{ width: "200px" }} className='p-2'>
            <img
              src={c.image}
              height={100}
              width={100}
              className='object-fit-contain'
              alt={c.title}
            />
          </div>

          <div className='w-75 p-3 m-3'>
            <h4>{c.title}</h4>
            <p>Price: ₹{c.price}/-</p>
          </div>

          <div className='w-25 d-flex align-items-center justify-content-center'>
            <MdDelete
              size={30}
              color='red'
              style={{ cursor: "pointer" }}
              onClick={() => deleteitm(i)}
            />
          </div>
        </div>
      ))}

      <h2 className='w-75'>Total: ₹{Math.round(total)}/-</h2>
    </div>
  )
}

export default Cart
