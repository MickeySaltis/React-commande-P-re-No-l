import '../styles/category.css'

/**
 * Catégorie de jouets (filtre)
 * Toy category (filter)
 * @param {*} param0 
 * @returns 
 */
function Category({ setActiveCategory, categorys, activeCategory }) {
    return (
        <div className='mpn-category'>
            <h3>Catégorie de jouet</h3>
            <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className='mpn-category-select'
            >
                <option value=''>---</option>
                {categorys.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
            <button className='mpn-category-button' onClick={() => setActiveCategory('')}>Réinitialiser</button>
        </div>
    )
}

// Syntaxe pour ne pas utiliser les accolades au moment de l'import
// Syntax for not using braces at import time
export default Category