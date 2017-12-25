import { View, Text } from 'react-native';
import React from 'react';

const Alerts = () => {
	return (
		<View style={styles.containerStyles}>
		<Text style={styles.textstyles}> Page under Construction </Text>
		</View>

		);

};

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
