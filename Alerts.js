import { View, Text, Image } from 'react-native';
import React, { Component } from 'react';

class Alerts extends Component {


	static navigationOptions = {
		tabBarLabel: 'Alerts',
		tabBarIcon: ({ tintColor }) => (
			<Image
			source={require('./icons8-google-alerts-35.png')}
			style={{ height: 25, width: 25, tintColor: tintColor }}
			/>
			)
	}
	render() {
	return (
		<View style={styles.containerStyles}>
		<Text style={styles.textstyles}> Page under Construction </Text>
		</View>

		);
}

}

const styles = {
	containerStyles: {
		justifyContent: 'center',
		alignItems: 'center',
		margin: 40,
		height: 70
	},
	textstyles: {
		fontSize: 20
	}
};

export default Alerts;
