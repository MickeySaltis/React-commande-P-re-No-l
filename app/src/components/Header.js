import '../styles/header.css'
import logo from '../assets/pereNoel.jpg'
import ItsTime from './ItsTime'

/**
 * En tête 
 * Header
 * @returns 
 */

function Header(){
    const title = 'La maison du père Noël'

    return (
        <div className='mpn-header'>
            <img src={logo} alt={title} className='mpn-logo' />
            <h1>{title}</h1>
            <ItsTime />
        </div>
        
    )
}

// Syntaxe pour ne pas utiliser les accolades au moment de l'import
// Syntax for not using braces at import time
export default Header;