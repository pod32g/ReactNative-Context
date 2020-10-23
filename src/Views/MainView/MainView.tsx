import React, { FunctionComponent, useState } from 'react'
import { Text, View, Alert, Button } from 'react-native'
import useTheme from '../../Context/Theme/ThemeProvider'
import useStyles from './MainView.styles'

export const MainView: FunctionComponent = () => {

    const [texts, changeText] = useState<{
        text: string,
        button: string
    }>({
        text: "Lights on",
        button: 'Turn lights off'
    })
    const { theme, changeTheme } = useTheme()
    const MainViewStyle = useStyles()

    const switchLights = () => {
        if (theme === 'light') {
            changeText({
                text: "Lights off",
                button: 'Turn lights on'
            })
            changeTheme('dark')
        }
        else {
            changeText({
                text: "Lights on",
                button: 'Turn lights off'
            })
            changeTheme('light')
        }
    }

    return (
        <View style={MainViewStyle.container}>
            <Text style={MainViewStyle.textContainer}>
                <Text style={MainViewStyle.text1}>
                    {texts.text}
                </Text>
            </Text>

            <View style={MainViewStyle.button}>
                <Button title={texts.button} color="red" onPress={() => switchLights()} />
            </View>
        </View>
    )
}