import { View, Image, Button } from 'react-native';
import React, { Component } from 'react';
import Header from './src/components/header';
import Body from './src/components/body';


class Home extends Component {
	static navigationOptions = {
		tabBarLabel: 'Home',
		tabBarIcon: ({ tintColor }) => (
			<Image
			source={require('./icons8-home-page-40.png')}
			style={{ height: 25, width: 25, tintColor: tintColor }}
			/>
			)
	}

render() {
	return (
		<View style={{ flex: 1 }}>
		
	<Header />
	<View style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
		<Button 
		onPress={() => this.props.navigation.navigate('DrawerOpen')}
		title="☰"
		/>
		</View>
	<Body />

	
	</View>
		);
}
}

export default Home;

