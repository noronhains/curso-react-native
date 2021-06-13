import React, {Fragment} from 'react'
import { Text, View } from 'react-native'

import Estilo from './estilo'

export default props => {
    return(
        // <View> 
        // <Fragment> 
        <>
            <Text style={Estilo.txtG}>{props.principal}</Text>
            <Text style={Estilo.txtM}>{props.secundario}</Text>
        </>
        //</Fragment>
        // </View>
    )
}