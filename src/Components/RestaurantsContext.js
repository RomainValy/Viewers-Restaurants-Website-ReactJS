import React from 'react'
/**
 * @namespace Context
 * @extend React.createContext
 * @type {object} 
 * @constructor
 * @property {array} restoList contient la liste des restaurants et leurs données actuelles
 * @property {object} currentResto restaurant actuellement cible des écouteurs d'evenement 'click'
 * @property {string} apiKey
 * @property {object} userPos prend ma geolocalisation de l'utilisateur si il l'accorde.
 * @property {object} defaultCenter retourne un objet contenant les coordonnées sur lesquelles la carte devrra se centrer par défaut.
 * @property {object} filterValue valueres générée par Components\Filter.js
 * @property {object} google Google global object
 * @property {object} map retourne l'objet map instancié par Components/Map2/MapContainer.js
 * @property {method} setMap initialise l'objet map
 * @property {method} setFilterValue modifie la valeure de filterValue
 * @property {method} getUserPosition 
 * @property {method} addResto 
 * @property {method} setRestoList refond la liste des restaurant
 * @property {method} setCurrentResto selectionne le bon objet en fonction de son nom
 * @property {method} addComment ajoute un commentaire
 * 
 */
const Context = React.createContext({
    restoList: [],
    currentResto: null,
    apiKey: '',
    userPos : {},
    defaultCenter : {},
    filterValue : {},
    google : null,
    map: null,
    setMap : () => {},
    setFilterValue : () => {},
    getUserPosition : () => {},
    addResto : () =>  {("addResto from Context")},
    setRestoList : () => {},
    setCurrentResto : () => {},
    addComment : () => {},
})

export default Context