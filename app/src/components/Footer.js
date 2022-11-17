import {useState} from 'react'
import '../styles/footer.css'

/**
 * Pied de page 
 * Footer
 * @returns 
 */

function Footer(){
    const[inputValue, setInputValue] = useState('')

    function handleInput(e){
        setInputValue(e.target.value)
    }

    /**
     * Message d'erreur en cas de contion non remplie
     * Error message if condition not met
     */
    function handleBlur(){
        if(!inputValue.includes('@')){
            alert('Attention, il n\'y a pas le @, ce n\'est donc pas une adresse mail valide')
        }
        // if (!inputValue.includes('.')) {
        //     alert('Attention, il n\'y a pas le ".", ce n\'est donc pas une adresse mail valide')
        // }
    }

    return (
        <footer className="mpn-footer">
            <div className="mpn-footer-elem">
                Pour les enfants sage.
            </div>
            <div className="mpn-footer-elem">
                Laissez-nous votre adresse email:
            </div>
            <input 
                placeholder="Entrez votre email"
                onChange={handleInput}
                value={inputValue}
                onBlur={handleBlur}
            />
        </footer>
    )
}

// Syntaxe pour ne pas utiliser les accolades au moment de l'import
// Syntax for not using braces at import time
export default Footer