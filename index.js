import { AppRegistry, TabBarIOS } from 'react-native';
import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import Home from './Home';
import Search from './Search';
import User from './User';
import Alerts from './Alerts';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedTab: 'Home'
		};
	}

	render() {
		return ( 
				<TabBarIOS selectedTab={this.state.selectedTab} style={{ flex: 1 }}>
				<TabBarIOS.Item
				selected={this.state.selectedTab === 'Home'}
				title='Home'
				icon={require('./icons8-home-page-40.png')}
				onPress={() => {
					this.setState({
						selectedTab: 'Home'
					});
				}}>
				<Home />

				</TabBarIOS.Item>

				<TabBarIOS.Item
				selected={this.state.selectedTab === 'Search'}
				title='Search'
				icon={require('./icons8-find-user-male-35.png')}
				onPress={() => {
					this.setState({
						selectedTab: 'Search'
					});
				}}>
				<Search />
				</TabBarIOS.Item>


				<TabBarIOS.Item
				selected={this.state.selectedTab === 'Alerts'}
				title='Alerts'
				icon={require('./icons8-google-alerts-35.png')}
				onPress={() => {
					this.setState({
						selectedTab: 'Alerts'
					});
				}}>
				<Alerts />
				</TabBarIOS.Item>

				<TabBarIOS.Item
				selected={this.state.selectedTab === 'User'}
				title='User'
				icon={require('./icons8-user-male-35.png')}
				onPress={() => {
					this.setState({
						selectedTab: 'User'
					});
				}}>
				<User />
				</TabBarIOS.Item>

				</TabBarIOS>
			);
	}
}
 

AppRegistry.registerComponent('Awesome', () => App);
