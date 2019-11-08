import React from "react"
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { View, Text } from "react-native"
import Drawer from "./Drawernavigation"
import Brand from "../Screens/Brandscreen/Brandscreen"
import Serach from "../Components/Home/SearchComponent"
import Details from "../Components/YourSearch/CarDetails"
import Header from "../Components/Home/Header"
import Notification from "../Screens/Notification/Notification"
import NotifyH from "../Components/Notification/NotificationHeader"
const Appcontainer = createStackNavigator({
    Drawer: {
        screen: Drawer,
        navigationOptions: ({ navigation }) => ({
            header: <Header navigation={navigation} />
        })
    },

    Details: {
        screen: Details
    },
    Notification: {
        screen: Notification,
    }
},
    {
        initialRouteName: "Drawer"
    }
)
export default createAppContainer(Appcontainer)
