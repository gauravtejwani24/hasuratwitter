import { View } from 'react-native';
import React, { Component } from 'react';
import Header from './src/components/header';
import Body from './src/components/body';


class Home extends Component {

render() {
	return (
		<View style={{ flex: 1 }}>
		
	<Header />
	<Body />

	
	</View>
		);
}
}

export default Home;

