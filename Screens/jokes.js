import * as React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Button} from 'react-native';

import s from './style_screens'

export default function JokesScreen() {
    const [joke, setJoke] = React.useState();
    const [new_joke, setNew] = React.useState(false);
    const fetchJoke = async () => {
      const response = await fetch('http://api.icndb.com/jokes/random')
        // console.log(response.status)
        const responseJSON = await response.json()
        setJoke(responseJSON)
        setNew(true);
    };
    React.useEffect( () => {
      fetchJoke();
    }, []);
    return (
        <View style={s.container}>
            <View style={s.header}> 
                <Text style={s.titleText}>Jokes</Text>
            </View>
            <View style={s.body}>
                <Text style={s.itemText} >
                {!new_joke?"Loading...":joke.value.joke}             
                </Text>
            </View>
            <View style={s.bottom}>
                <View style={ {color:'black', backgroundColor: 'orange'}}>
                <Button
                    onPress = {() => {
                        setNew(false);
                        fetchJoke();
                    }}
                    title={"One more Joke!"}
                />
            </View>
            </View>
        </View>
          
    );
  }
  