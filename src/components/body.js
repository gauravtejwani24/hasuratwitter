import React from 'react';
import { ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const Body = () => {
return (
<ScrollView>

<Card>
	<CardSection>
		<View style={styles.viewStyle}>
		<Image 
		source={require('./images/dp.jpg')}
		style={styles.logoStyle} 
		/>
		</View>

		<View style={styles.headerStyle}>
		<Text style={styles.textStyles}>MS DHONI</Text>
		<Text style={styles.textStylesb}>World cup 2011 finishing shot :)</Text>

		</View>

	</CardSection>
	<CardSection>

	<Image 
	style={styles.imageStyle}
	source={require('./images/ms.jpg')}
	/>


	</CardSection>

	<CardSection>

	<View style={styles.viewbuttonstyle}>
	<TouchableOpacity style={styles.buttonstyle}>
	<Image
	style={{ height: 24, width: 24 }}
	source={require('./images/like.png')}
	/>


	</TouchableOpacity>

	<TouchableOpacity style={styles.buttonstyle}>
	<Image
	style={{ height: 24, width: 24 }}
	source={require('./images/comment.png')}

	/>
	</TouchableOpacity>
	</View>	

	</CardSection>	
</Card>

<Card>

	<CardSection>
		<View style={styles.viewStyle}>
		<Image 
		source={require('./images/conor.jpg')}
		style={styles.logoStyle} 
		/>
		</View>

		<View style={styles.headerStyle}>
		<Text style={styles.textStyles}>Conor MCGregor</Text>
		<Text style={styles.textStylesb}>Fight with Mayweather :)</Text>

		</View>

	</CardSection>
	<CardSection>

	<Image 
	style={styles.imageStyle}
	source={require('./images/fight.jpg')}
	/>


	</CardSection>

	<CardSection>

	<View style={styles.viewbuttonstyle}>
	<TouchableOpacity style={styles.buttonstyle}>
	<Image
	style={{ height: 24, width: 24 }}
	source={require('./images/like.png')}
	/>


	</TouchableOpacity>

	<TouchableOpacity style={styles.buttonstyle}>
	<Image
	style={{ height: 24, width: 24 }}
	source={require('./images/comment.png')}

	/>
	</TouchableOpacity>
	</View>	

	</CardSection>
	
 </Card>
   
</ScrollView>


);
        };

const styles = {
	viewStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10,
		marginTop: 5,
		marginBottom: 5
	},

	logoStyle: {
		height: 30,
		width: 30,
		borderRadius: 15,
		
	},

	headerStyle:
	{
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	textStyles:
	{
		fontSize: 15,
		
	},

	textStylesb: {
		fontSize: 10,
		color: '#808080'
	},

	imageStyle: {
		height: 250,
		flex: 1,
		
		width: null
	},
	viewbuttonstyle: {
		justifyContent: 'space-around',
		flexDirection: 'row'

	},
	buttonstyle:
	{
		margin: 5,
		height: 20,
		backgroundColor: 'white',
		width: 20

	}

};

export default Body;
