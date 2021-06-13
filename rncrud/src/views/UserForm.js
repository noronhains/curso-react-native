import React, {useContext, useState} from 'react'
import {Button, StyleSheet, Text, TextInput, View} from 'react-native'
import UsersContext from '../context/UsersContext'

export default ({route, navigation}) => {
    // console.warn(Object.keys(props))
    // console.warn(Object.keys(props.route.params))
    const [user, setUser] = useState(route.params ? route.params : {})
    const {dispatch} = useContext(UsersContext)
    return(
        <View style={styles.form}>
            <Text>Nome</Text>
            <TextInput 
                onChangeText={name => setUser({...user, name})} 
                placeholder='Informe o nome'
                value={user.name}
                style={styles.input}
            />

            <Text>E-mail</Text>
            <TextInput 
                onChangeText={email => setUser({...user, email})} 
                placeholder='Informe o e-mail'
                value={user.email}
                style={styles.input}
            />

            <Text>URL avatar</Text>
            <TextInput 
                onChangeText={avatarUrl => setUser({...user, avatarUrl})} 
                placeholder='Informe a URL do avatar'
                value={user.avatarUrl}
                style={styles.input}
            />

            <Button 
                title='Salvar' 
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user
                    })
                    navigation.goBack()
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        padding: 12,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
    },
})