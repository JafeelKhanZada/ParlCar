import React from "react"
import { createBottomTabNavigator } from "react-navigation-tabs"
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from "../Screens/Homescreen/HomeScreen"
import YourSerach from "../Screens/YourSearch/YourSerach"
import Favourate from "../Screens/Favouratscreen/Favouratscreen"

export default Tabnavigator = createBottomTabNavigator({
    Home: {
        screen: Home
    },
    YourSerach: {
        screen: YourSerach
    },
    Favourite: {
        screen: Favourate
    },
},
    {
        tabBarOptions: {
            tabStyle: {
                backgroundColor: "red"
            },
            activeTintColor: 'tomato',
            inactiveTintColor: 'white',
        },
    }
)