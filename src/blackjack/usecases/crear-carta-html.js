/**
 * @param {String} carta
 * @returns {HTMLImageElement} imagen de retorno
 */

export const crearCartaHTML = ( carta ) => {

    if ( !carta ) throw new Error ('La carta es un argumento obligatorio')

    const imgCarta = document.createElement('img');
        imgCarta.src = `/public/assets/cards/${ carta }.png`; //3H, JD
        imgCarta.classList.add('card');
    return imgCarta;
}