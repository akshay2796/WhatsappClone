import React, { useEffect } from 'react';
import { View, StyleSheet, BackHandler, Text } from 'react-native';
import { Colors, Fonts } from '../constants';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function PhoneScreen() {
	const backAction = () => {
		return true;
	};
	useEffect(() => {
		BackHandler.addEventListener('hardwareBackPress', backAction);

		return () =>
			BackHandler.removeEventListener('hardwareBackPress', backAction);
	}, []);
	return (
		<View style={styles.container}>
			<View style={styles.smsTextContainer}>
				<Text style={styles.text}>
					WhatsApp will send an SMS message to verify your phone
					number.{' '}
					<Text style={{ color: Colors.blue }}>
						What's my number?
					</Text>
				</Text>
			</View>
			<TouchableOpacity style={styles.countryContainer}>
				<Text style={styles.country}>United States</Text>
				<View style={styles.caretIcon}>
					<FontAwesomeIcon
						icon={faCaretDown}
						style={{ color: Colors.tealGreenLight }}
					/>
				</View>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: Colors.white,
	},
	smsTextContainer: {
		marginTop: hp(2),
		marginHorizontal: hp(2),
	},
	text: {
		fontFamily: Fonts.RobotoMedium,
		color: Colors.black,
		fontSize: 16,
		fontWeight: 'normal',
		textAlign: 'center',
		lineHeight: 25,
	},
	countryContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignContent: 'center',
		marginTop: hp(5),
		width: wp(70),
		paddingBottom: 10,
		borderBottomColor: Colors.tealGreenLight,
		borderBottomWidth: 2,
	},
	country: {
		fontFamily: Fonts.RobotoMedium,
		fontSize: 20,
		textAlign: 'center',
	},
	caretIcon: {
		height: '100%',
		position: 'absolute',
		right: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
