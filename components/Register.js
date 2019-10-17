import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	Alert
} from 'react-native'
import DatePicker from 'react-native-datepicker'
import moment from "moment";
export default class Register extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: '',
			// date1: "2016-05-15",
			// currentDate: new Date(),
			// markedDate: moment(new Date()).format("YYYY-MM-DD")
		}

	}

	onLogin() {
		const { username, password } = this.state

		Alert.alert('Xin Chào', `${username} + ${password}`)
	}

	render() {
		const { username, password } = this.state
		const today = this.state.currentDate
		const day = moment(today).format("LT")
		const date = moment(today).format("L")
		return (
			<ScrollView>
				<KeyboardAvoidingView style={styles.background}>
					<View style={styles.content}>
						
						<Text style={styles.day}>{day}</Text>
						<Text style={styles.small}>{date}</Text>
						
						<TextInput style={styles.inpEmail}
							value={username}
							onChangeText={username => this.setState({ username })}
							placeholder={'Số điện thoại hoặc email'}
						/>
						<TextInput style={styles.inpEmail}
							value={password}
							onChangeText={password => this.setState({ password })}
							placeholder={'Mật khẩu '}
							secureTextEntry
						/>
						<TextInput style={styles.inpEmail}
							value={password}
							onChangeText={password => this.setState({ password })}
							placeholder={'Nhập lại mật khẩu '}
							secureTextEntry
						/>
						{/* <DatePicker
							style={styles.datePicker}
							date={this.state.date}
							mode="date"
							placeholder="select date"
							format="YYYY-MM-DD"
							minDate="2016-01-01"
							maxDate="2016-12-01"
							confirmBtnText="Confirm"
							cancelBtnText="Cancel"
							customStyles={{
								dateIcon: {
									position: 'absolute',
									left: 0,
									top: 4,
									marginLeft: 0
								},
								dateInput: {
									marginLeft: 36
								}
								// ... You can check the source to find the other keys.
							}}
							onDateChange={(date) => { this.setState({ date: date }) }}
						/> */}
						<DatePicker style ={styles.datePicker}
							selected={this.state.startDate}
							onChange={this.handleChange}
							showTimeSelect
							timeFormat="HH:mm"
							timeIntervals={15}
							dateFormat="MMMM d, yyyy h:mm aa"
							timeCaption="time"
						/>
						<TouchableOpacity style={styles.btnRegistration} onPress={this.onLogin.bind(this)} activeOpacity={0.6}>
							<Text style={styles.textButton}>Đăng Nhập</Text>
						</TouchableOpacity>
					</View>
					
				</KeyboardAvoidingView>
			</ScrollView>
		)
	}
}
const styles = StyleSheet.create({
	background: {
		backgroundColor: 'white',
		flex: 3,
		flexDirection: 'column'
	},
	// header :{
	// 	backgroundColor: 'white',
	// 	flex: 1,
	// 	marginLeft :250
	// },

	content: {
		backgroundColor: '#FFFFFF',
		flex: 2,
		alignItems: 'center',
		flexDirection: 'column'
	},

	imgLogo: {
		width: 280,
		height: 65,
		margin: 40,
		alignContent: 'center'
	},
	inpEmail: {
		width: 350,
		height: 40,
		padding: 10,
		borderWidth: 1,
		borderColor: '#223b73',
		// marginBottom: 10,
		marginTop: 20,
		borderRadius: 3
	},

	btnRegistration: {
		backgroundColor: '#223b73',
		height: 40,
		borderColor: '#223b73',
		borderWidth: 1,
		width: 350,
		marginTop: 25,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',

	},
	textButton: {
		fontSize: 18,
		color: '#FFFFFF'
	},

	datePicker: {
		marginRight:200,
		marginTop: 20,
		borderRadius: 3
	},
	day:{
		top :8,
		marginLeft:280,
		fontSize: 12,
		color: "#1C1A1A",
		textAlign:"right"
	   },
	   
	small:{
		top :8,
		marginLeft:280,
		fontSize: 12,
		color: "#1C1A1A"
	   }
})

