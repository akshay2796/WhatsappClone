import React from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	Alert,
	StyleSheet,
	StatusBar,
} from 'react-native';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Colors, Fonts } from '../constants';
import bootStyles from '../assets/styles/bootstrap.css';

export default function WelcomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<StatusBar
				animated
				backgroundColor={Colors.white}
				barStyle={'dark-content'}
			/>
			<Text style={styles.welcomeText}>Welcome to WhatsApp</Text>
			<Image
				source={require('../assets/images/welcome_page/welcome_icon.png')}
				style={styles.welcome}
			/>
			<View style={styles.agreementContainer}>
				<Text style={styles.agreementText}>
					Read our
					<Text
						style={[styles.agreementText, { color: Colors.blue }]}>
						{' '}
						Privacy Policy
					</Text>
					<Text style={styles.agreementText}>
						. Tap "Agree and continue" to accept the
					</Text>
					<Text
						style={[styles.agreementText, { color: Colors.blue }]}>
						{' '}
						Terms of Service
					</Text>
					.
				</Text>
			</View>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate('PhoneScreen')}>
				<Text style={styles.buttonText}>Agree and Continue</Text>
			</TouchableOpacity>
			<Image
				source={require('../assets/images/splash_facebook_logo.png')}
				style={styles.facebookLogo}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: Colors.white,
	},
	welcomeText: {
		marginTop: hp(10),
		fontSize: 28,
		color: Colors.primaryColor,
		fontFamily: Fonts.RobotoMedium,
		fontWeight: '300',
	},
	welcome: {
		marginTop: hp(10),
		height: hp(30),
		width: hp(30),
		borderRadius: hp(15),
	},
	agreementContainer: {
		marginTop: hp(10),
		marginHorizontal: wp(3),
		flexWrap: 'nowrap',
	},
	agreementText: {
		fontSize: 16,
		fontFamily: Fonts.Monstserrat,
		color: Colors.gray,
		textAlign: 'center',
	},
	button: {
		marginTop: hp(5),
		width: wp(60),
		height: hp(5),
		padding: 5,
		backgroundColor: Colors.lightGreen,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonText: {
		fontSize: 16,
		textAlign: 'center',
		textAlignVertical: 'center',
		color: Colors.white,
		textTransform: 'uppercase',
	},
	facebookLogo: {
		marginTop: hp(8),
		height: hp(5),
		aspectRatio: 354 / 118,
	},
});
