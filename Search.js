import { View, TextInput, Image } from 'react-native';
import React, { Component } from 'react';

class Search extends Component {

	static navigationOptions = {
		tabBarLabel: 'Search',
		tabBarIcon: ({ tintColor }) => (
			<Image
			source={require('./icons8-find-user-male-35.png')}
			style={{ height: 25, width: 25, tintColor: tintColor }}
			/>
			)
	}

	render() {
	return (
		<View style={styles.containerStyles}>
		<TextInput style={styles.textstyles} placeholder='Search Twitter' />

        </View>

		);	
	}	
}

 const styles = {
	containerStyles: {
		flex: 1,
		height: 70,
		width: null,
		margin: 20,
		padding: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		marginTop: 20
		
	},
	textstyles: {
		height: 40
	}


};
export default Search;
