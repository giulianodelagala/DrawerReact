import * as React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

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
            <View style={[s.body]}>
                <View style={s.jokeContainer}>
                    <Text style={s.jokeText} >
                    {!new_joke
                    ?"Loading..."
                    : "😁  " + (joke.value.joke).replace(/[&]quot;/g,"\"") + "  🤣"}             
                    </Text>
                </View>
            </View>
            <View style={s.bottom}>
                <TouchableOpacity style={{alignContent:'center'}}
                    onPress= { () => {
                        setNew(false);
                        fetchJoke();
                    }}
                    >
                    <Text style={s.bottomButton}>
                        One more Joke!
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
          
    );
  }
  