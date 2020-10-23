import React, { createContext, FunctionComponent, useContext, useState } from 'react'

type theme = "dark" | "light"

interface IThemeContext {
    theme: theme,
    changeTheme: React.Dispatch<React.SetStateAction<theme>>
}

const ThemeContext = createContext<IThemeContext>({
    theme: "light",
    changeTheme: () => undefined
})

const ThemeProvider: FunctionComponent = ({ children }) => {

    const [theme, changeTheme] = useState<theme>("light")

    return (
        <ThemeContext.Provider value={{ theme, changeTheme: changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

const useTheme = () => {
    const context = useContext(ThemeContext)

    if (context === undefined) throw new Error("Cannot use the hook useTheme without a ThemeProvider")

    return context
}

export default useTheme;
export { ThemeProvider, ThemeContext };