import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const [cartProducts, setCartProducts] = useState([0])

  function handleAmount(n) {
    setCartProducts(n);
  }

  return (
    <div className="App">
      <Navbar
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
        showPreview={showPreview}
        setShowPreview={setShowPreview}
      />
      <Home 
        count={count}
        setCount={setCount}
        handleAmount={handleAmount}
        setCartProducts={setCartProducts}
        setShowPreview={setShowPreview}
      />
    </div>
  )
}

export default App
