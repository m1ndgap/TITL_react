import React, { useReducer } from "react"
import { reducer, initialState } from "../PopupReducer/PopupReducer"

export const PopupContext = React.createContext({
    state: initialState,
    dispatch: () => null
})

export const PopupProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <PopupContext.Provider value={[ state, dispatch ]}>
            { children }
        </PopupContext.Provider>
    )
}
