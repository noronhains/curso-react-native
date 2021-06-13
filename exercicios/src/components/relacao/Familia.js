import React from 'react'
import {View, Text} from 'react-native'
import Estilo from '../estilo'
import Filho from './Membro'

export default props => {
    return(
        <>
        <Text style={Estilo.txtG}>Família {props.nome}:</Text>
            {props.children}
        </>
    )
}