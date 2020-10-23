import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import useTheme from "./ThemeProvider";

interface ITheme {
    Container: ViewStyle,
    Text: TextStyle
}

const DarkTheme = StyleSheet.create<ITheme>({
    Container: {
        backgroundColor: "black"
    },
    Text: {
        color: "white"
    }
})

const LightTheme = StyleSheet.create<ITheme>({
    Container: {
        backgroundColor: "white"
    },
    Text: {
        color: 'black'
    }
})

const useMainTheme = () => {
    const { theme } = useTheme()

    if (theme === 'dark') return DarkTheme

    return LightTheme
}

export default useMainTheme