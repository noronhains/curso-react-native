import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import PassoStack from '../components/PassoStack'
import TextoCentral from '../components/TextoCentral'

export default props => {
    return(
        <View style={{flex: 1}}>
            <TextoCentral corFundo='#e53935'>Tela A</TextoCentral>
        </View>
    )
}