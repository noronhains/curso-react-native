import React from 'react'
import {View, StyleSheet} from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return(
        <View style= {style.FlexV2}>
            <Quadrado />
            <Quadrado color='#F00' />
            <Quadrado color='#0F0' />
            <Quadrado color='#00F' />
            <Quadrado color='#FFF' />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV2: {
        flex:1,
        width:'100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F0F'
    }
})