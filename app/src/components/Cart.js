import {useState, useEffect} from 'react'
import '../styles/cart.css'

/**
 * Panier
 * Basket
 * @param {*} param0 
 * @returns 
 */
function Cart({cart, updateCart}) {

    /**
     * Variable montant total du panier
     * Variable total amount of the basket
     */
    const total = cart.reduce(
        (acc, toyType)=> acc + toyType.amount * toyType.price, 0
    )
    /**
     * Variable status visibilité du panier
     * Variable status visibility of the basket
     */
    const [isOpen, setIsOpen] = useState(false)

    /**
     * Valeur de l'onglet change à chaque modification du total du panier
     * Tab value changes each time the basket total is modified
     */
    useEffect(()=> {
        document.title = `Commande au PN: ${total}€`
    }, [total])

    return isOpen ? (

        <div className="panier">
            <button className="mpn-cart-toggle-button" onClick={() => setIsOpen(false)}>
                Fermer le panier
            </button>
            {cart.length > 0 ? (

                <div>
                    <h2>Panier</h2>
                    <ul>
                            {cart.map(({name, price, amount}, index)=>(
                                <div className="mpn-margin-bottom" key={`${name}-${index}`}>
                                    <span className="mpn-bold">{name}</span> {price}€ x {amount}
                                </div>
                            ))}
                        </ul>
                        <h3>Total: {total}€</h3>
                        <button className="mpn-cart-clean-button" onClick={()=> updateCart([])}>
                            Vider le panier
                        </button>
                </div>

            ) : (

                    <div className="npm-margin-top">
                    Votre panier est vide.
                </div>

            )}   
        </div>

    ) : (

        <div className='mpn-cart-closed'>
            <button className='mpn-cart-toggle-button' onClick={() => setIsOpen(true)}>
                🧺 Ouvrir le panier
            </button>
        </div>
    )
}

// Syntaxe pour ne pas utiliser les accolades au moment de l'import
// Syntax for not using braces at import time
export default Cart