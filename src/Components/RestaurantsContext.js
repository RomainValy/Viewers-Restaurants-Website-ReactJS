import React from 'react'

const Context = React.createContext({
    list: [],
    currentResto: null,
    apiKey: '',
    userPos : {},
    defaultCenter : {},
    getUserPosition : () => {},
    addResto : () =>  {console.log("addResto from Context")},
    setRestoList : () => {},
    setCurrentResto : () => {},
    addComment : () => {},
})

export default Context