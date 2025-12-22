import React from 'react'
import Products from './components/Products'
import Cart from './components/Cart'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
// Link

function App() {
  return (
    <BrowserRouter>
     <div className='d-flex justify-content-center px-5'>
            <Link to={"/"} className='text-center m-3'>Products</Link>
            <Link to={"/cart"} className='m-3'>Cart</Link>
        </div>
     <Routes>
      <Route path="/" element={<Products></Products>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App