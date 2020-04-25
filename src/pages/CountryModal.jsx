import React, { useState, useEffect } from 'react';
import {
	ScrollView,
	View,
	Image,
	Text,
	StyleSheet,
	FlatList,
} from 'react-native';
import ToolbarAndroid from '@react-native-community/toolbar-android';
import { ListItem } from 'react-native-elements';
import { Colors } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Countries from '../assets/raw/countries.json';

export default function CountryModal(props) {
	// useEffect(() => {
	// 	console.log(props);
	// }, [props]);
	const { setCountry, toggleModalVisible } = props;
	const [selected, setSelected] = useState(props.selected);

	const keyExtractor = (item) => item.isoAlpha2.toString();

	const renderItem = ({ item }) => {
		return (
			<ListItem
				onPress={() => {
					setSelected(item.name);
					toggleModalVisible(false);
					setCountry(item.name);
				}}
				title={item.name}
				leftIcon={
					<View style={styles.leftIconContainer}>
						<Image
							style={styles.leftIcon}
							source={{
								uri: `data:image/png;base64,${item.flag}`,
							}}
						/>
					</View>
				}
				rightElement={
					<View style={styles.rightContainer}>
						<Text>{item.countryCode}</Text>
						{selected === item.name ? (
							<Icon
								name="check"
								style={styles.marginStart}
								color={Colors.tealGreenLight}
							/>
						) : (
							<View
								style={[styles.marginStart, styles.emptyView]}
							/>
						)}
					</View>
				}
			/>
		);
	};
	return (
		<FlatList
			keyExtractor={keyExtractor}
			data={Countries}
			renderItem={renderItem}
			ListHeaderComponent={
				<ToolbarAndroid
					title={'Choose a Country'}
					titleColor={Colors.tealGreenLight}
				/>
			}
		/>
	);
}

const styles = StyleSheet.create({
	leftIconContainer: {
		width: 30,
		height: 30,
		alignItems: 'center',
		justifyContent: 'center',
	},
	leftIcon: {
		width: 30,
		height: 30,
		resizeMode: 'contain',
	},
	rightContainer: {
		flexDirection: 'row',
	},
	marginStart: {
		marginStart: 20,
	},
	emptyView: {
		width: 12,
	},
});
