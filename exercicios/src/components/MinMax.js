import React from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'

//export default () => <Text style={Estilo.txtG}>O valor X é maior que o valor Y!</Text>
export default (props) => {
    return(
        <Text style={Estilo.txtG}>
            O valor {props.max} é maior que o valor {props.min}!
        </Text>
    )
}