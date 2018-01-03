import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Header extends Component {
	
render() {
 
	return (
		
		<View style={styles.viewStyles}>
		
		<Text style={styles.textStyles}>Twitter</Text>
		</View>
		);
}

}
		
	
const styles = {

	viewStyles: {
		backgroundColor: '#0000ff',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		padding: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 }


	},
	textStyles: {
		fontSize: 20
	}
	

};

export default Header;

