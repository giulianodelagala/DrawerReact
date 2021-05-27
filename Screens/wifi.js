import * as React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import WifiManager from "react-native-wifi-reborn";

import s from './style_screens'

const ExpandableComponent = ({item}) => {
    const [layoutHeight, setLayoutHeight] = React.useState(0);
    return (
        <View>
        <TouchableOpacity style={s.item}>
            <Text style={s.itemText}>
            {item.SSID}
            </Text>
        </TouchableOpacity>
        <View
            style={{height: layoutHeight, overflow: 'hidden'}}
        />
        </View>
    );
}

export default function WiFiScreen() {
    const [multiSelect, setMultiSelect] = React.useState(false);
    const [ssid, setSsid] = React.useState([]);
    const initWifi = async () => {
      try {
        const wifi_list = await WifiManager.loadWifiList();
        setSsid(wifi_list);
        console.log(ssid);
      } catch (error) {
        setSsid('Cannot get current SSID!' + error.message);
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
                <ScrollView>
                    {
                    ssid.map( (item, key) => (
                        <ExpandableComponent
                        key = {item.SSID}
                        item = {item}
                        />
                    ))
                    }
                </ScrollView>
            </View>
            <View style={s.bottom}>
                <TouchableOpacity
                    onPress= { () => {
                        setMultiSelect(!multiSelect)
                        initWifi()
                    }}
                    >
                    <Text style={s.bottomButton}>
                        { multiSelect ?'Less details':'More details'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
      </SafeAreaView>  
    );
  }
  