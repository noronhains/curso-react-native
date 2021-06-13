import React from 'react'
import {View, StyleSheet} from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return(
        <View style= {style.FlexV3}>
            <Quadrado color='#000' lado={20}/>
            <Quadrado color='#F00' lado={30}/>
            <Quadrado color='#0F0' lado={40}/>
            <Quadrado color='#00F' lado={50}/>
            <Quadrado color='#FFF' lado={60}/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV3: {
        flexDirection: 'row',
        height: 350,
        width:'100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#F0F'
    }
})