import { AppRegistry, TabBarIOS, View } from 'react-native';
import React, { Component } from 'react';
import { DrawerNavigator, TabNavigator } from 'react-navigation';
import Home from './Home';
import Search from './Search';
import User from './User';
import Alerts from './Alerts';
import Mail from './Mail';

 const myTab = TabNavigator({
	Home: { screen: Home },
	Search: { screen: Search },
	Alerts: { screen: Alerts },
	
	Mail: { screen: Mail },

},
{

	tabBarOptions: {
		activeTintColor: 'blue',
		inactiveTintColor: 'black',
		labelStyle: {
			fontSize: 10,
			padding: 2,
		}
	}

	});

 const App = DrawerNavigator({

Home: { screen: myTab },
User: { screen: User },

},

{
	drawerWidth: 300,
	contentComponent: User,
	drawerOpenRoute: 'DrawerOpen',
	drawerCloseRoute: 'DrawerClose',
	drawerToggleRoute: 'DrawerToggle',

});

AppRegistry.registerComponent('Awesome', () => App);
