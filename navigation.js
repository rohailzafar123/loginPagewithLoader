import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MyApp from "./App"
import Hello from "./hello"
const AppNavigator = createStackNavigator(
  
  
  {

    Home: MyApp,
    SayHello: Hello,

 
},
 {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
      header: null,
      headerForceInset: {top: 'never', bottom: 'never'},
    },
  },



);

export default createAppContainer(AppNavigator);