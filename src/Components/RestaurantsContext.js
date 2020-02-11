import React from 'react'

const Context = React.createContext({
    list: [],
    currentResto: null,
    addResto : () =>  {},
    setCurrentResto : () => {},
    addComment : () => {}
})

export default Context