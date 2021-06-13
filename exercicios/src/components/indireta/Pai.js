import React, {useState} from 'react'
import {View, Text} from 'react-native'
import Estilo from '../estilo'
import Filho from './Filho'

export default props => {

    const [texto, setTexto] = useState('')
    const [num, setNum] = useState(0)

    function exibirValor(numero, inicio) {
        setNum(numero)
        setTexto(inicio)
    }

    return(
        <>
            <Text style={Estilo.txtG}>{texto}{num}</Text>
            <Filho 
                min={1}
                max={100}
                funcao={exibirValor}
            />
        </>
    )
}