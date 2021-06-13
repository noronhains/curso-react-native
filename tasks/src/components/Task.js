import React from 'react'
import {View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import commonStyles from '../commonStyles'
import Icon from 'react-native-vector-icons/FontAwesome'

import moment from 'moment'
import 'moment/locale/pt-br'

export default props => {

	const doneOrNotStyle = props.doneAt != null ? {textDecorationLine: 'line-through'} : {}
	const date = props.doneAt ? props.doneAt : props.estimateAt
	const formattedDate = moment(date).locale('pt-br').format(props.doneAt ? 'ddd, DD [de] MMMM [de] YYYY [às] HH:mm:ss' : 'ddd, DD [de] MMMM [de] YYYY')

	const getRigthContent = () => {
		return (
			<TouchableOpacity style={styles.rigth} onPress={() => props.onDelete && props.onDelete(props.id)}>
				<Icon name='trash' size={30} color='#FFF' />
			</TouchableOpacity>
		)
	}

	const getLeftContent = () => {
		return (
			<View style={styles.left}>
				<Icon name='trash' size={20} color='#FFF' style={styles.excludeIcon} />
				<Text style={styles.excludeText}>Excluir</Text>
			</View>
		)
	}

	return(
		<Swipeable 
			renderRightActions={getRigthContent} 
			renderLeftActions={getLeftContent} 
			onSwipeableLeftOpen={() => props.onDelete && props.onDelete(props.id)}
		>
			<View style={styles.container}>
				<TouchableWithoutFeedback onPress={() => props.onToggleTask(props.id)}>
					<View style={styles.checkContainer}>
						{getCheckView(props.doneAt)}
					</View>
				</TouchableWithoutFeedback>
				<View>
					<Text style={[styles.desc, doneOrNotStyle]} >{props.desc}</Text>
					<Text style={styles.date}>{formattedDate}</Text>
				</View>
			</View>
		</Swipeable>
	)
}

function getCheckView(doneAt){
	if(doneAt != null){
		return (
			<View style={styles.done}>
				<Icon name='check' size={20} color='#FFF' />
			</View>
		)
	}else{
		return (
			<View style={styles.pending}></View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		borderColor: '#AAA',
		borderBottomWidth: 1,
		alignItems: 'center',
		paddingVertical: 10,
		backgroundColor: '#FFF'
	},
	checkContainer: {
		width: '20%',
		alignItems: 'center',
		justifyContent: 'center'
	},
	pending: {
		height: 25,
		width: 25,
		borderRadius: 13,
		borderWidth: 1,
		borderColor: '#555'
	},
	done: {
		height: 25,
		width: 25,
		borderRadius: 13,
		backgroundColor: '#4D7031',
		alignItems: 'center',
		justifyContent: 'center',
	},
	desc: {
		fontFamily: commonStyles.fontFamily,
		color: commonStyles.colors.mainText,
		fontSize: 15,
	},
	date: {
		fontFamily: commonStyles.fontFamily,
		color: commonStyles.colors.subText
	},
	rigth: {
		backgroundColor: 'red',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
		paddingHorizontal: 20,
	},
	left: {
		backgroundColor: 'red',
		flexDirection: 'row',
		alignItems: 'center',
		flex: 1
	},
	excludeText: {
		fontFamily: commonStyles.fontFamily,
		color: '#FFF',
		fontSize: 20,
		margin: 10,
	},
	excludeIcon: {
		marginLeft: 10,
	}
})