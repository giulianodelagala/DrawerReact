import * as React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

export default function LoginScreen(props) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:20}}>Home Screen</Text>
        {/* <TouchableOpacity
          style= {{marginTop:20,
              width:200,
              height:50,
              backgroundColor:'#ff5204',
              padding: 10,
              alignItems: 'center',
              borderRadius: 5
          }}
          onPress= {()=> props.navigation.navigate('Perfil')} >
            <Text style={{color: '#fff', fontSize: 20}}>Ir a Perfil</Text>
        </TouchableOpacity> */}
      </View>
    );
  }