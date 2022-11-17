/**
 * Condition de la date (Novembre / Décembre)
 * Date condition (November / December)
 * @returns 
 */

function ItsTime(){
    const currentMonth = new Date().getMonth()
    const isTime = currentMonth >= 10
    console.log(isTime, currentMonth);

    if(isTime){
        return <div>C'est le moment de faire ta lettre !!!</div>
    } else {
        return <div>Patiente un peu avant de faire ta lettre.</div>
    }
}

// Syntaxe pour ne pas utiliser les accolades au moment de l'import
// Syntax for not using braces at import time
export default ItsTime