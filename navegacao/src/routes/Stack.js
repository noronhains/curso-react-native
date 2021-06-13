import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {View, Text, StyleSheet} from 'react-native'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import PassoStack from '../components/PassoStack'

const Stack = createStackNavigator()

export default props => {
    return(
        <Stack.Navigator initialRouteName='TelaA' screenOptions={{headerShown: true}}>
            <Stack.Screen name="TelaA" options={{title: 'Informações Iniciais'}}>
                {props => (
                    <PassoStack {...props} corFundo='#e53935' avancar='TelaB' >
                        <TelaA />
                    </PassoStack>
                )}
            </Stack.Screen>
            {/* <Stack.Screen name="TelaB" component={TelaB}> */}
            <Stack.Screen name="TelaB">
                {props => (
                    <PassoStack {...props} corFundo='#3b82c4' avancar='TelaC' 
                        avancarParams={{numero: parseInt(Math.random() * 100)}}  voltar >
                        <TelaB />
                    </PassoStack>
                )}
            </Stack.Screen>
            
            <Stack.Screen name="TelaC">
                {props => (
                    <PassoStack {...props} corFundo='#9932cd' avancar='TelaC' 
                        avancarParams={{numero: parseInt(Math.random() * 100)}} 
                        voltar >
                        <TelaC {...props} />
                    </PassoStack>
                )}
            </Stack.Screen>

            {/* <Stack.Screen name="TelaC" component={TelaC}/> */}
        </Stack.Navigator>        
    )
}