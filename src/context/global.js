import { createContext } from "react"

export const GlobalContext = createContext({
    appRef: undefined,
    darkTheme: true,
    setDarkTheme: () => {},
    modal: false,
    toggleModal: () => {},
    drawer: false,
    toggleDrawer: () => {},
    alert: undefined,
    setAlert: () => {},
})
