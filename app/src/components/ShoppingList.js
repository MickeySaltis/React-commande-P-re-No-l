import { useState } from 'react'
import {toysList} from '../datas/toysList'
import ToyItem from './ToyItem'
import Category from './Category'
import '../styles/shoppingList.css'


/**
 * Liste de shopping
 * Shopping list
 * @param {*} param0 
 * @returns 
 */
function ShoppingList({cart, updateCart}) {

    /**
    *** Category
    ** Retrieve the different categories from the toy list (without duplicates) + filter
    ** Récupérer les différentes catégories de la liste des jouets (sans doublons) + filtre
    **/ 
    const [activeCategory, setActiveCategory] = useState('')

    const categorys = toysList.reduce(
        (array, toy) =>
            array.includes(toy.category) ? array : array.concat(toy.category),
        []
    )

    /**
     * Ajoute la cible dans le panier (nouvelle entré au panier ou mise à jour du panier)
     * Adds the target to the cart (new entry in the cart or update of the cart)
     * @param {*} name 
     * @param {*} price 
     */
    function addToCart(name, price){
        const currentToySaved = cart.find((toy)=> toy.name === name)
        if(currentToySaved){
            const cartFilteredCurrentToys = cart.filter((toy)=> toy.name !== name)

            updateCart([
                ...cartFilteredCurrentToys,
                {name, price, amount: currentToySaved.amount + 1}
            ])
        } else {
            updateCart([
                ...cart,
                {name, price, amount: 1}
            ])
        }
    }

    return (
        <div className="mpn-shopping-list">

            {/* List of toy categories */}
            {/* Liste des catégories de jouet */}
            <Category
                categorys={categorys}
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
            />

            {/* List of toys with ToyItem.js */}
            {/* Liste des jouets avec ToysItem.js*/}
            <ul className="mpn-toy-list">
                {toysList.map(({id, cover, name, note, coeur, isBestSale, isSpecialOffer, price, category}) => !activeCategory || activeCategory === category ? 
                    (
                        <div className="mpn-margin-bottom" key={id}>
                            <ToyItem
                                id={id}
                                cover={cover}
                                name={name}
                                note={note}
                                coeur={coeur}
                                isBestSale={isBestSale}
                                isSpecialOffer={isSpecialOffer}
                                price={price}
                            />
                            <div className="mpn-center">
                                <button onClick={() => addToCart(name, price)}>
                                    Ajouter
                                </button>
                            </div>
                        </div>
                    ) : null 
                )}
            </ul>
        </div>
    )
}

// Syntaxe pour ne pas utiliser les accolades au moment de l'import
// Syntax for not using braces at import time
export default ShoppingList