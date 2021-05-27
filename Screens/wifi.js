import * as React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView} from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { ScrollView } from 'react-native-gesture-handler';
import WifiManager from "react-native-wifi-reborn";

import s from './style_screens'

const ExpandableComponent = ({item}) => {
    // const [layoutHeight, setLayoutHeight] = React.useState(0);
    // <View style={{height: layoutHeight, overflow: 'hidden'}} />
    return (
        <View style={{flex:1}}>
            <TouchableOpacity style={s.item}>
                <Text style={s.itemText}>
                SSID: {item.SSID}
                </Text>
                <Text style={s.itemDetailText}>level: {item.level}, frequency: {item.frequency} </Text>
            </TouchableOpacity>           
            <Divider style={{height:2}}></Divider>
        </View>
    );
}

export default function WiFiScreen() {
    //const [multiSelect, setMultiSelect] = React.useState(false);
    const [ssid, setSsid] = React.useState([]);
    const initWifi = async () => {
      try {
        const wifi_list = await WifiManager.loadWifiList();
        setSsid(wifi_list);
        console.log(ssid);
      } catch (error) {
        setSsid([]); //error.message
        console.log('Cannot get current SSID!', {error});
      }  
    }
  
    React.useEffect(() => {
      initWifi();
    }, []);
   
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={s.container}>
            <View style={s.header}>
                <Text style={s.titleText}>
                WiFi List
                </Text>
                
            </View>
            <View style={s.body}>
                <ScrollView style={{width:'90%',
                 alignContent:'center'}}>
                    {ssid!= []?
                    ssid.map( (item, key) => (
                        <ExpandableComponent
                        key = {item.SSID}
                        item = {item}
                        />
                    )):"Error"
                    }
                </ScrollView>
            </View>
            <View style={s.bottom}>
                <TouchableOpacity
                    onPress= { () => {
                        //setMultiSelect(!multiSelect)
                        initWifi()
                    }}
                    >
                    <Text style={s.bottomButton}>
                        Rescan
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
      </SafeAreaView>  
    );
  }
  