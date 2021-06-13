import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import TextoCentral from '../components/TextoCentral'

export default props => {
    const params = props.route.params || {numero: 0}
    return(
        <TextoCentral corFundo='#9932cd'>Tela C - {params.numero}</TextoCentral>
    )
}