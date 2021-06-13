import React from 'react'
import {View, Text, Button} from 'react-native'

export default props => {
    return(
        <View style={{flex:1, backgroundColor: props.corFundo}}>
            <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
                {props.voltar ? 
                    <Button title='Voltar' 
                        onPress={() => {
                            props.navigation.goBack()
                        }}/>
                :
                    false
                }
                {props.avancar ? 
                    <Button title='Avançar' 
                        onPress={() => {
                            props.navigation.push(
                                props.avancar,
                                props.avancarParams
                            )
                        }}/>
                    :
                    false
                }
            </View>
            <View style={{flex: 1}}>
                {props.children}
            </View>
        </View>
    )
}