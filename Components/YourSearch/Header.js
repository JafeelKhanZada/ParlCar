import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, } from "react-native";
import Antdesign from "react-native-vector-icons/AntDesign"
export default class Header extends Component {
    render() {
        return (
            <View>
                <View style={{ width: "100%", flexDirection: "row" }}>
                    <View style={{ marginLeft: 100, width: "50%", justifyContent: "center" }}>
                        <Image style={{ height: 50, width: 90 }} source={require("../../assests/images/logo.png")} />
                    </View>
                    <View style={{ width: "25%", justifyContent: "center" }}>
                        <Antdesign name="sharealt" size={35} />
                    </View>
                </View>
            </View>
        )
    }
}
