import { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import '../styles/layout.css'

/**
 * Page application
 * Application page
 * @returns 
 */

function App() {

  /**
   * Variable local du panier
   * Basket local variable
   */
  const saveCart = localStorage.getItem('cart')

  /**
   * Variable Panier 
   * Variable Basket
   */
  const [cart, updateCart] = useState(saveCart ? JSON.parse(saveCart) : [])

  /**
   * Enregistre dans le local à chaque modification du panier
   * Saves in the local each time the basket is modified
   */
  useEffect(()=> {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <div>
      <Header />

      <div className='mpn-layout-inner'>
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>

      <Footer />
    </div>
  )
}

// Syntaxe pour ne pas utiliser les accolades au moment de l'import
// Syntax for not using braces at import time
export default App;
