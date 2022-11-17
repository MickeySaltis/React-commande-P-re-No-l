const crushLabel ={
    1: 'petit',
    2: 'bon',
    3: 'gros',
}

/**
 * Prop sur les notes d'un jouet
 * Prop on a toy's notes
 * @param {*} param0 
 * @returns 
 */

function CareScale({scaleValue, careType}) {
    const scaleType = careType === 'note' ? '🎁' : '❣️'
    const range = [1, 2, 3]

    return (
        <div
            onClick={() =>
                alert(
                    `Ce jouet est un ${crushLabel[scaleValue]} ${careType === "note" ? "Succés !!!" : "coup de coeur !!!"}`
                )
            }
        >
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? (
                    <span key={rangeElem.toString()}> {scaleType} </span>
                ) : null
            )}
        </div>
    )
}

// Syntaxe pour ne pas utiliser les accolades au moment de l'import
// Syntax for not using braces at import time
export default CareScale