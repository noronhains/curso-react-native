import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {View, Text, StyleSheet} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Material from 'react-native-vector-icons/MaterialCommunityIcons'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'


const Tab = createBottomTabNavigator()

export default props => {
    return(
        <Tab.Navigator 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    

                switch (route.name) {
                    case 'TelaA':
                        iconName = focused
                        ? 'rocket-launch'
                        : 'rocket';
                        break;

                    case 'TelaB':
                        iconName = focused
                        ? 'atom-variant'
                        : 'atom';
                        break;

                    case 'TelaC':
                        iconName = focused ? 'run-fast' : 'run';
                        break;
                            
                    default:
                        break;
                }   
                
                return <Material name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'red',
                inactiveTintColor: 'blue',
                labelStyle: {fontSize: 15},
                showLabel: true,
        }} initialRouteName='TelaB'>
            <Tab.Screen name='TelaA' options={{title: 'Inicial'}} component={TelaA} />
            <Tab.Screen name='TelaB' options={{title: 'Meio'}} component={TelaB} />
            <Tab.Screen name='TelaC' options={{title: 'Final'}} component={TelaC} />
        </Tab.Navigator>
    )
}