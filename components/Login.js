import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	Alert
} from 'react-native'

export default class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: ''
		}
	}

	onLogin() {
		const { username, password } = this.state

		Alert.alert('Xin Chào Nguyen vinh', `${username} + ${password}`)
	}

	render() {
		const { username, password } = this.state
		return (
			<KeyboardAvoidingView style={styles.background}>
				<View style={styles.header}>
					<Image style={styles.imgLogo}
						source={{
							uri:
								'https://cdn.pixabay.com/photo/2013/01/29/22/06/facebook-76658_960_720.png'
						}}
					/>
				</View>
				<View style={styles.content}>
					<TextInput style={styles.inpEmail}
						value={username}
						onChangeText={username => this.setState({ username })}
						placeholder={'Số điện thoại hoặc email'}
					/>
					<TextInput style={styles.inpEmail}
						value={password}
						onChangeText={password => this.setState({ password })}
						placeholder={'Mật khẩu'}
						secureTextEntry
					/>
					<TouchableOpacity style={styles.btnRegistration} onPress={this.onLogin.bind(this)} activeOpacity={0.6}>
						<Text style={styles.textButton}>Đăng Nhập</Text>
					</TouchableOpacity>
					<Text style={styles.txtForgotPassword}>
						Quên mật khẩu?
					</Text>
					<Text style={styles.txtComeBack}>
						Quay lại
					</Text>
				</View>
				<TouchableOpacity style={styles.btnSigin}>
					<Text style={styles.txtCreateAccount}>Tạo tài khoản mới?</Text>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		)
	}
}

const styles = StyleSheet.create({
	background: {
		backgroundColor: 'white',
		flex: 3,
		flexDirection: 'column'
	},
	header: {
		flex: 1.2,
		backgroundColor: '#3b5998',
		justifyContent: 'center',
		alignItems: 'center'
	},
	content: {
		backgroundColor: '#FFFFFF',
		flex: 2,
		alignItems: 'center',
		flexDirection: 'column'
	},
	footer: {
		position: 'absolute',
		backgroundColor: '#FFFFFF',
		justifyContent: 'center',
		alignItems: 'center'
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
	inpPass: {
		marginLeft: 10
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
		alignItems: 'center'
	},
	btnSigin: {
		backgroundColor: '#EEEEEE',
		height: 40,
		borderColor: '#223b73',
		borderWidth: 1,
		width: 350,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		bottom: 20,
		alignSelf: 'center'
	},
	txtForgotPassword: {
		fontSize: 18,
		color: '#1A1AF2',
		marginTop: 10,
	},
	txtComeBack: {
		fontSize: 18,
		color: '#1A1AF2',
		marginTop: 10,
	},
	textButton: {
		fontSize: 18,
		color: '#FFFFFF'
	},
	txtCreateAccount: {
		fontSize: 18,
		color: '#1A1AF2',
	}
})
