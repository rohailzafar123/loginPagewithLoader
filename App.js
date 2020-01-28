import React from 'react';
import { View, Text ,StyleSheet,Image,StatusBar,TouchableOpacity, Alert,ActivityIndicator, } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { TextInput,  } from 'react-native-gesture-handler';
// import ActivityIndicatorExample from './activity.js'
class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {text: ''};
  }
  inputValueGet = () =>{
    const { TextInputValue } = this.state;
    Alert.alert( TextInputValue );
  }
  state = { animating: true }  
  closeActivityIndicator = () => setTimeout(() => this.setState({  
      animating: false }), 6000)  
  componentDidMount = () => this.closeActivityIndicator()  
  render() {
    const animating = this.state.animating 
    return (
      <View style={styles.main}>
      <StatusBar backgroundColor="white" barStyle="dark-content"></StatusBar>
        <View style={styles.view1}>
        <Image
            style={styles.image}
            source={require('./user.png')}
        />
        </View> 
        <Text style={styles.userName}>
            User Name
          </Text>
          <Text style={styles.data}>
            Get the User Name Here
          </Text>
        <View style={styles.inputView}>
        <TextInput
            placeholderTextColor="white"
            placeholder='User Name'
            onChangeText={TextInputValue => this.setState({TextInputValue})}
            style={styles.textInput}
          />
        </View>
        <View style={styles.view2}>  
        <TouchableOpacity 
            style={styles.next}
            onPress={this.TextInputValue}
            >
              <Text style={styles.tex1}>
                Next
              </Text>
              <ActivityIndicator  animating = {animating} size="large" color="#6A63D5" />
        </TouchableOpacity>
        <View style={styles.andicator}>
              {/* <ActivityIndicator animating={this.state.showLoader} size="small" color="#00ff00" /> */}
        </View>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
    main:{
      backgroundColor : "#6A63D5" ,
      flex: 1,
    },
    andicator:{
      // position: 'absolute', 
      // top: 0, 
      // bottom: 0, 
      // right: 0, 
      // left: 0, 
      margin:5,
    },
    userName:{
      alignContent: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: "white",
      fontSize: 30,
      fontWeight: 'bold',
      // marginTop: '20%',
    },
    data:{
      alignContent: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: "white",
      fontWeight: 'bold',
      margin:2,

    },
    textInput:{
      backgroundColor: '#5552AE',
      width: "80%",
      borderRadius: 30,
      marginTop: 10,
      paddingLeft: 20,
      color: "white",

    },
    inputView:{
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',

    },
    image:{
      width:100,
      height:100,
    },
    view1:{
      justifyContent:"center",
      alignItems:'center',
      marginTop:'30%',

    },
    next:{
    margin:10,
    borderRadius:30,
    backgroundColor:'white',
    width:300,
    height:50,
    justifyContent: 'space-evenly',
    textAlign:'center',
    alignItems:'center',
    marginTop:20,
    flexDirection:"row",
    },
    tex1:{
    color:"#6A63D5",
    fontSize:18,
    fontWeight:'bold',
      
    },
    view2:{
      alignItems: 'center',
    },
});
// () => this.props.navigation.navigate('SayHello')
export default HomeScreen;