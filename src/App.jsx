import React from 'react'
import Counter from './Counter'
import Counter2 from './Counter2'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>
          <Link to="/counter2">Counter2</Link>
        </div>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/counter2" element={<Counter2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App