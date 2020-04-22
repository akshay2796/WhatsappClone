import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
	createStackNavigator,
	CardStyleInterpolators,
} from '@react-navigation/stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

//Screens
import { WelcomeScreen, PhoneScreen } from '../pages';
import { Colors, Fonts } from '../constants';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

const options = {
	headerShown: false,
};

const config = {
	animation: 'spring',
	config: {
		stiffness: 1000,
		damping: 500,
		mass: 3,
		overshootClamping: true,
		restDisplacementThreshold: 0.01,
		restSpeedThreshold: 0.01,
	},
};

export default function Navigation() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					transitionSpec: {
						open: config,
						close: config,
					},
					cardStyleInterpolator:
						CardStyleInterpolators.forHorizontalIOS,
				}}>
				<Stack.Screen
					name="Welcome"
					component={WelcomeScreen}
					options={options}
				/>
				<Stack.Screen
					name="PhoneScreen"
					component={PhoneScreen}
					options={{
						headerTitle: 'Enter your phone number',
						headerTitleAlign: 'center',
						headerLeft: null,
						headerTitleStyle: {
							fontFamily: Fonts.RobotoMedium,
							color: Colors.tealGreenLight,
						},
						headerStyle: {
							elevation: 0,
							shadowOpacity: 0,
						},
						headerRight: () => (
							<TouchableOpacity style={{ marginHorizontal: 20 }}>
								<FontAwesomeIcon icon={faEllipsisV} />
							</TouchableOpacity>
						),
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
