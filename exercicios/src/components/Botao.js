import React from 'react'
import {Button} from 'react-native'
import estilo from './estilo'

export default () => {

    function executar(){
        console.warn('Exec #01!!!')
    }

    return(
        <>
            <Button 
                style={estilo.botao}
                title='Executar #01!' 
                onPress={executar} 
            />
            <Button 
                style={estilo.botao}
                title='Executar #02!' 
                onPress={function(){
                    console.warn('Exec #02!!!')
                }} 
            />
            <Button 
                style={estilo.botao}
                title='Executar #03!' 
                onPress={() => console.warn('Exec #03!!!')} 
            />
        </>
    )
}