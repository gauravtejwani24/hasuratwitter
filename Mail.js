import { View, Text, Image } from 'react-native';
import React, { Component } from 'react';

class Mail extends Component {


	static navigationOptions = {
		tabBarLabel: 'Mail',
		tabBarIcon: ({ tintColor }) => (
			<Image
			source={require('./icons8-secured-letter-35.png')}
			style={{ height: 25, width: 25, tintColor: tintColor }}
			/>
			)
	}
	render() {
	return (
		<View style={styles.containerStyles}>
		<Text style={styles.textstyles}> Mails will be received here </Text>
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

export default Mail;
