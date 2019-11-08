import React from 'react'
import { createDrawerNavigator } from "react-navigation-drawer"
import Brand from "../Screens/Brandscreen/Brandscreen"
import Home from "../Screens/Homescreen/HomeScreen"
import Tab from "./BottomTabNavigator"
export default Drawer = createDrawerNavigator({
    Home: {
        screen: Tab
    },
    Brand: {
        screen: Brand
    },

},
    {
        initialRouteName: "Home"
    }
)