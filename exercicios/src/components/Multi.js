import React from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'

export default function Comp(){
    return <Text style={Estilo.txtP}>Comp #Oficial</Text>
}

function Comp1(){
    return <Text style={Estilo.txtM}>Comp #01</Text>
}

export function Comp2(){
    return <Text style={Estilo.txtM}>Comp #02</Text>
}

export {Comp1}//, Comp2}