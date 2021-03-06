import React, {Component} from 'react'
import {View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, Platform, Alert} from 'react-native'
import todayImage from '../../assets/imgs/today.jpg'
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
import 'moment/locale/pt-br'
import AsyncStorage from '@react-native-community/async-storage'

import commonStyles from '../commonStyles'
import Task from '../components/Task'
import AddTask from './AddTask'

const initialState = {		
	showDoneTasks: true,
	visibleTasks: [],
	showAddTaskModal: false,
	tasks: []
}

export default class TaskList extends Component {

	state = {...initialState}
	
	componentDidMount = async () => {		
		const stateString = await AsyncStorage.getItem('taskState')
		const state = JSON.parse(stateString) || initialState
		this.setState(state, this.filterTasks)
	}

	filterTasks = async () => {
		let visibleTasks = null

		if(this.state.showDoneTasks) {
			visibleTasks = [...this.state.tasks]
		}else{
			const pending = task => task.doneAt === null
			visibleTasks = this.state.tasks.filter(pending)
		}

		this.setState({visibleTasks})
		AsyncStorage.setItem('taskState', JSON.stringify(this.state))
	}

	toggleFilter = () => {
		this.setState({showDoneTasks: !this.state.showDoneTasks}, this.filterTasks)
	}

	toggleTask = taskId => {
		const tasks = [...this.state.tasks]
		tasks.forEach(task => {
			if(task.id === taskId){
				task.doneAt = task.doneAt ? null : new Date()
			}
		})

		this.setState({tasks: tasks}, this.filterTasks) // ou apenas tasks já que tem o mesmo nome
	}

	addTask = (newTask) => {
		if(!newTask.desc || !newTask.desc.trim()){
			Alert.alert('Dados inválidos', 'Descrição não informada!')
			return
		}

		const tasks = [...this.state.tasks]
		tasks.push({
			id: Math.random(),
			desc: newTask.desc,
			estimateAt: newTask.date,
			doneAt: null
		})

		this.setState({tasks, showAddTaskModal: false}, this.filterTasks)
	}

	deleteTask = id => {
		const tasks = this.state.tasks.filter(task => task.id !== id)
		this.setState({tasks}, this.filterTasks)
	}

	render(){
		const today = moment().locale('pt-br').format('ddd, D [de] MMMM [de] YYYY')
		return(
			<View style={styles.container}>
				<AddTask isVisible={this.state.showAddTaskModal} onCancel={() => this.setState({showAddTaskModal: false})} onSave={this.addTask} />
				<ImageBackground style={styles.background} source={todayImage}>
					<View style={styles.iconBar}>
						<TouchableOpacity onPress={this.toggleFilter}>
							<Icon name={this.state.showDoneTasks ? 'eye' : 'eye-slash'} size={25} color={commonStyles.colors.secondary} />
						</TouchableOpacity>
					</View>
					<View style={styles.titleBar}>
						<Text style={styles.title}>Hoje</Text>
						<Text style={styles.subTitle}>{today}</Text>
					</View>
				</ImageBackground>
				<View style={styles.taskList}>
					<FlatList 
						data={this.state.visibleTasks} 
						keyExtractor={item => `${item.id}`} 
						renderItem={({item}) => <Task {...item} onToggleTask={this.toggleTask} onDelete={this.deleteTask} />} 
					/>
				</View>
				<TouchableOpacity style={styles.addButton} onPress={() => this.setState({showAddTaskModal: true})} activeOpacity={0.7}>
					<Icon name='plus' size={20} color={commonStyles.colors.secondary} />
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	background: {
		flex: 3,

	},
	taskList: {
		flex: 7,
	},
	titleBar: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	title: {
		fontSize: 50,
		fontFamily: commonStyles.fontFamily,
		color: commonStyles.colors.secondary,
		marginLeft: 20,
		marginBottom: 20,
	},
	subTitle: {
		fontFamily: commonStyles.fontFamily,
		color: commonStyles.colors.secondary,
		fontSize: 20,
		marginLeft: 20,
		marginBottom: 30,
	},
	iconBar: {
		flexDirection: 'row',
		marginHorizontal: 20,
		justifyContent: 'flex-end',
		marginTop: Platform.OS === 'ios' ? 30 : 10
	},
	addButton: {
		position: 'absolute',
		right: 30,
		bottom: 30,
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: commonStyles.colors.today,
		justifyContent: 'center',
		alignItems: 'center',
	}
})