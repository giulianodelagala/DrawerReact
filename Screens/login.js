import * as React from 'react';
import { View, Text, TextInput , TouchableOpacity, Image, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import s from './style_screens'

export default function LoginScreen(props) {
    return (
      <View style={s.container}>
        <View style={s.header}>
        <Text style={s.titleText}>Login</Text>
        </View>
        <View style={s.body}>
          <View>
            <Image 
            source={{uri:'https://www.pinclipart.com/picdir/middle/164-1640717_free-user-icon-flat-189024-download-user-icon.png',}}
            style={{width:100, height:100 ,resizeMode:'stretch', marginBottom:20}}
            />
          </View>
          <View style={{flexDirection:'row'}}>
            <Icon name="user" android="md-user" size={18} color="#000" style={{paddingRight:10}}/>
            <Text style={{fontWeight:'bold'}}>
              Username
            </Text>
          </View>
          <TextInput style={[s.loginInput, {marginBottom:40}]}
            placeholder= "Type your username"
          />
          <View style={{flexDirection:'row'}}>
            <Icon name="lock" android="md-lock" size={18} color="#000" style={{paddingRight:10}}/>
            <Text style={{fontWeight:'bold'}}>
              Password
            </Text>    
          </View>
            <TextInput
              style={s.loginInput}
              placeholder="Type your password"
            />      
          <TouchableOpacity>
              <Text style={{color: '#000', fontSize: 12}}>Forgot your password?</Text>
          </TouchableOpacity>
          

        </View>
        <View style={s.bottom}>
          <TouchableOpacity  >
              <Text style= {s.bottomButton}>
                LOGIN
              </Text>
          </TouchableOpacity>
        </View>
      </View>
      
    );
  }