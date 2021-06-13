import React from 'react'
import {View, StyleSheet} from 'react-native'

export default props => {
    const lado = 50
    return(
        <View style={{
            height: props.lado,
            width: props.lado,
            backgroundColor: props.color || '#000'
        }}>
            
        </View>
    )
}

const style = StyleSheet.create({

})