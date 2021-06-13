import React from 'react'
import {Text} from 'react-native'

import Estilo from './estilo'

// export default props => {
export default ({min, max}) => {
    // const {min, max} = props
    return(
        <Text style={Estilo.txtPrimeiro}>
            O valor aleatório entre {min} e {max} é de {Math.floor(Math.random() * (max - min + 1) + min)}
        </Text>
    )
}
