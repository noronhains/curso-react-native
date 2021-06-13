import React, { useContext } from 'react'
import { Alert, FlatList, View} from 'react-native'
import { Avatar, Icon, ListItem, Button } from 'react-native-elements'
import UsersContext from '../context/UsersContext'

//import users from '../data/users'

export default props => {

    const {state, dispatch} = useContext(UsersContext)

    function confirmUserDelete(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
          {
            text: 'Sim',
            onPress() {
              dispatch({
                    type: 'deleteUser',
                    payload: user, //user.id
              })
            },
          },
          {
            text: 'Não',
          },
        ]);
      }

    function getUserItem({item: user}){
        return (
            <ListItem
                key={user.id}
                bottomDivider
                onPress={() => props.navigation.navigate('UserForm', user)}>
                <Avatar source={{uri: user.avatarUrl}} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Title>{user.email}</ListItem.Title>
                </ListItem.Content>
                <Button
                    type="clear"
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    icon={<Icon name="edit" size={15} color="orange" />}
                />
    
                <Button
                    type="clear"
                    onPress={() => confirmUserDelete(user)}
                    icon={<Icon name="delete" size={15} color="red" />}
                />
            </ListItem>
        )
    }
    return(
        <View>
            <FlatList 
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}