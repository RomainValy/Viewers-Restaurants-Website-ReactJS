import React from 'react'

const Context = React.createContext({
    list: [],
    currentResto: null,
    apiKey: '',
    userPos : {},
    getUserPosition : () => {},
    addResto : () =>  {},
    setCurrentResto : () => {},
    addComment : () => {}
})

export default Context