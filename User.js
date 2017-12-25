import React from 'react';
import {
  Text,
  View, Image
} from 'react-native';

const User = () => {

	
    return (
      <View style={styles.container}>
        
		<Image
            source={require('./beard.png')}
           
            style={{ height: 80, width: 80, borderRadius: 40 }}
          />
            <Text style={{ fontWeight: 'bold', margin: 10 }}>       
          XYZ 
            </Text>
		<Text style={{ margin: 10 }}> @abcd</Text>
		<View style={{ flexDirection: 'row', backgroundColor: 'white' }}>
	
  <Text style={{ fontWeight: 'bold', margin: 10 }}> 690</Text>
   <Text style={{ margin: 10 }}>Following</Text>
  
  <Text style={{ fontWeight: 'bold', margin: 10 }}> 653 </Text>
   <Text style={{ margin: 10 }}>Followers </Text>
        </View>
     <Text style={{ fontWeight: 'bold', margin: 10 }}>👤 &nbsp;Profile </Text>  
	 <Text style={{ fontWeight: 'bold', margin: 10 }}>▤ &nbsp;Lists </Text>  
	 <Text style={{ fontWeight: 'bold', margin: 10 }}>⚡️ &nbsp;Moments</Text>  
	 <Text style={{ fontWeight: 'bold', margin: 10 }}>❏ &nbsp;Highlights </Text>
          <Text />
          <Text /> 
           <Text style={{ fontWeight: 'bold', margin: 10 }}>Settings and privacy </Text>
		   <Text /> 
		   <Text style={{ fontWeight: 'bold', margin: 10 }}>Help centre </Text>
        		   
      </View>
    );

};

const styles = {
  container: {
    flex: 1,
   margin: 10,
    backgroundColor: 'white',
  },
 
 
};
	
export default User;