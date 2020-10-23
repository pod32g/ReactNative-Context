import { StyleSheet } from "react-native";
import useMainTheme from "../../Context/Theme/Themes";


const useStyles = () => {
    const BaseTheme = useMainTheme()

    return StyleSheet.create({
        container: {
            flexDirection: "column",
            height: "100%",
            alignContent: "center",
            justifyContent: "center",
            ...BaseTheme.Container
        },
        textContainer: {
            flexDirection: "row",
            alignSelf: "center",
            justifyContent: "center",
            width: "50%",
            textAlign: "center",
            ...BaseTheme.Text
        },
        text1: {
            textAlign: "center"
        },
        text2: {
            backgroundColor: "blue",
            textAlign: "center"
        },
        button: {
            position: "absolute",
            bottom: "10%",
            justifyContent: "space-evenly",
            alignSelf: "center",
            width: "100%",
            flexDirection: "row"
        }
    })
}

export default useStyles