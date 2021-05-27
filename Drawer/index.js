// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity, Image, PermissionsAndroid, SafeAreaView, StyleSheet, StatusBar } from 'react-native';

import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import s from './style'
import { Button } from 'react-native-elements/dist/buttons/Button';
import color from 'color';



import LoginScreen from '../Screens/login'
import JokesScreen from '../Screens/jokes'
import WiFiScreen from '../Screens/wifi'

const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      {
        title: "Cool Photo App Camera Permission",
        message:
          "Cool Photo App needs access to your camera " +
          "so you can take awesome pictures.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      } 
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera");
    } else {
      console.log("Camera permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

function Menu(props){
    return(
        <View style={s.container}>
            <View style={s.bgContainer}>
                <TouchableOpacity>
                    <View style={s.userContainer}>
                        <Image
                            style= {s.userImagen}
                            source={ require('./logo-brainapps.png')}
                        />
                        <View>
                            <Image
                                style = {s.camaraIcon}
                                source={ require('./photo-camera.png')}
                            />
                        </View>
                    </View>
                    <View style={s.userNombre}>
                        <Text style={s.userTitulo}>BrainApps</Text>
                        <Text style={s.userSubTitulo}>Ver Perfil</Text>
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   header: {
//     flexDirection: 'row',
//     padding: 10
//   },
//   titleText: {
//     flex: 1,
//     fontSize: 22,
//     fontWeight: 'bold',
//     textAlign: 'center'
//   },
//   headerButton: {
//     textAlign: 'center',
//     justifyContent: 'center',
//     fontSize: 18
//   },
//   item: {
//     backgroundColor: 'orange',
//     padding: 20
//   },
//   itemText: {
//     fontSize: 16,
//     fontWeight: '500'
//   }
// });

export default App;