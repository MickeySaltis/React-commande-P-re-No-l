import CareScale from './CareScale'
import '../styles/toyItem.css'


/**
 * Evénement au clic
 * Event at the click
 */
function handleClick(toyName) {
    alert(`Tu veux ajouter 1 ${toyName} dans ta liste au père Noël ? Très bon choix !!!`)
}

/**
 * Elément jouet
 * Toys item
 * @param {*} param0 
 * @returns 
 */
function ToyItem({ id, cover, name, note, coeur, isBestSale, isSpecialOffer, price }){
    return (
        <li key={id} className='mpn-toy-item' onClick={()=> handleClick}>
            <span className='mpn-toy-item-price'>{price}€</span>
            <img className='mpn-toy-item-cover' src={cover} alt={`${name} cover`} />
            {isBestSale && <span> 🔥 </span>}
            {/* {isBestSale ? <span> 🔥 </span> : null} */}
            {name} 
            {isSpecialOffer && <div className='mpn-sales'>Soldes</div>}
            <div>
                <CareScale careType='note' scaleValue={note} />
                <CareScale careType='coeur' scaleValue={coeur} />
            </div>
        </li>
    )
}

// Syntaxe pour ne pas utiliser les accolades au moment de l'import
// Syntax for not using braces at import time
export default ToyItem