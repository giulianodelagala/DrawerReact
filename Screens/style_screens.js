export default {
  //Containers
    container: {
      flex: 6
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        flexDirection: 'column',
      padding: 0
    },
    body: {
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    bottom: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'        
    },
  //Login
    loginInput: {
      borderBottomColor: '#000',
      borderBottomWidth: 1,
      width: 300,
      color: 'gray',
      padding: 0,
      marginBottom: 10
    },
  // Screens
    titleText: {
      flex: 2,
      fontSize: 24,
      color: '#274472',
      //backgroundColor: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 30,
      letterSpacing:1,
      textDecorationLine:'underline'     
    },
    bottomButton: {
        backgroundColor: '#274472',
        color: '#FFF',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 18,
      borderRadius: 10,
      height: 40,
      width: 200,
      padding: 5
    },
    //WiFi
    item: {
      backgroundColor: '#c3e0e5',
      padding: 5,
      borderBottom: "10px solid lightgray",
      width: '100%',
      borderRadius: 5
    },
    itemText: {
        color: '#41729f',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      
    },
    itemDetailText:{
      textAlign: 'center'
    },

    //Jokes Screen
    jokeContainer: {
      backgroundColor: '#c3e0e5',
      width: '80%',
      borderRadius: 10,
      borderWidth:5,
      borderColor: '#a537fd',
      padding:30
    },

    jokeText: {
      color: '#41729f',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0.5
    //textShadowColor: '#000',
    //textShadowOffset: {width:10, height:10}
  }
  };