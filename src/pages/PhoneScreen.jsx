import React, { useEffect, useState } from 'react';
import {
	View,
	TouchableOpacity,
	StyleSheet,
	BackHandler,
	Text,
	Image,
} from 'react-native';
import { Colors, Fonts } from '../constants';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Modal from 'react-native-modal';
import CountryModal from './CountryModal';

export default function PhoneScreen({ navigation }) {
	const backAction = () => {
		return true;
	};
	useEffect(() => {
		BackHandler.addEventListener('hardwareBackPress', backAction);

		return () =>
			BackHandler.removeEventListener('hardwareBackPress', backAction);
	}, []);

	const [modalVisible, toggleModalVisible] = useState(false);
	const [country, setCountry] = useState('United States');

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
			<TouchableOpacity
				styleName="container-new"
				style={styles.countryContainer}
				onPress={() => toggleModalVisible(!modalVisible)}>
				<Text style={styles.country}>{country}</Text>
				<View style={styles.caretIcon}>
					<Icon
						name="caret-down"
						style={{ color: Colors.tealGreenLight }}
					/>
				</View>
			</TouchableOpacity>
			<Modal
				style={StyleSheet.absoluteFill}
				isVisible={modalVisible}
				backdropColor={Colors.white}
				hardwareAccelerated={true}
				onDismiss={() => toggleModalVisible(false)}
				onBackButtonPress={() => toggleModalVisible(false)}
				useNativeDriver={true}
				hideModalContentWhileAnimating={true}>
				<CountryModal
					selected={country}
					setCountry={setCountry}
					toggleModalVisible={toggleModalVisible}
				/>
			</Modal>
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
