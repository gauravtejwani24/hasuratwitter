import { View, TextInput } from 'react-native';
import React from 'react';

const Search = () => {
	return (
		<View style={styles.containerStyles}>
		<TextInput style={styles.textstyles} placeholder='Search Twitter' />

        </View>

		);	
};
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
