// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity, Image, PermissionsAndroid } from 'react-native';

import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import s from './style'

import LoginScreen from '../Screens/login'
import JokesScreen from '../Screens/jokes'
import WiFiScreen from '../Screens/wifi'

const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "DrawerApp GPS Location Permission",
        message:
          "DrawerApp needs access to your cellphone GPS",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      } 
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the WiFi/GPS");
    } else {
      console.log("GPS permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

function Menu(props){
  return(
    <View style={s.container}>
      <View style={s.bgContainer}>
        <TouchableOpacity
        onPress= {()=> props.navigation.navigate('Home')}>
          <View style={s.userContainer}>
              <Image
                  style= {s.userImagen}
                  source={ require('./logo.png')}
              />
              <View>
                  <Image
                      style = {s.camaraIcon}
                      source={ require('./photo-camera.png')}
                  />
              </View>
          </View>
          <View style={s.userName}>
              <Text style={s.userTitle}>Drawer Evaluation</Text>
              <Text style={s.userSubTitle}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
      <DrawerItemList {...props}/>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function App() {
  React.useEffect(() => {
    requestLocationPermission();
  }, []);
  return (
    <NavigationContainer>
        <Drawer.Navigator drawerContent={(props)=> <Menu {...props}/>}>
            <Drawer.Screen name="Home" component={LoginScreen} />
            <Drawer.Screen name="WiFi" component={WiFiScreen} />
            <Drawer.Screen name="Jokes" component={JokesScreen} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;