import React from 'react'
import {View, StyleSheet} from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return(
        <View style= {style.FlexV4}>
            <View style={style.V0}/>
            <View style={style.V1}/>
            <View style={style.V2}/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV4: {
        flexGrow: 1,
        width:100,
        backgroundColor: '#F0F'
    },
    V0: {
        backgroundColor: '#0F0',
        flexGrow: 1
    },
    V1: {
        backgroundColor: '#F00',  
        flexGrow: 3
    },
    V2: {
        backgroundColor: '#00F',
        flexGrow: 1    
    }
})