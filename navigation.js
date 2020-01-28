import { createAppContainer } from 'react-navigation';
import { myNewDrawer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createDrawerNavigator } from 'react-navigation-drawer';
import MyApp from "./App"
import Drawer from "./drawer"


const AppNavigator = createStackNavigator(
  
  
  {

    Home: MyApp,
    SayHello: Drawer,

 
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