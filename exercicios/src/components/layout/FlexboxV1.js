import React from 'react'
import {View, StyleSheet} from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return(
        <View style= {style.FlexV1}>
            <Quadrado />
            <Quadrado color='#F00' />
            <Quadrado color='#0F0' />
            <Quadrado color='#00F' />
            <Quadrado color='#FFF' />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1: {
        flexGrow:1,
        justifyContent: 'space-evenly',
        backgroundColor: '#F0F'
    }
})