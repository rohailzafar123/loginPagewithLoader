import React, { Component } from 'react'
import { Text, View, DrawerLayoutAndroid } from 'react-native'
import HomeScreen from './screens/HomeScreen'
import SettingScreen from './screens/SettingScreen'
import { createDrawerNavigator, } from 'react-navigation-drawer';
const Newdrawer = createDrawerNavigator(
  
  {

    user: HomeScreen,
    SettingScreen: SettingScreen,

 
},
{

}
);
// export default myNewDrawer(Newdrawer);


export default class slide extends Component {
        render() {
        return (
        <View>
            <Newdrawer />
        </View>
        );
    }
}
