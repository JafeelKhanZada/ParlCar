import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Search from "../../Components/Home/SearchEngin"
import Showroom from "../../Components/Home/Brand-Showroom"
import SLider from "../../Components/Home/Slider"
import Tabs from "../../Components/Home/Tabs"
import Brand from "../../Components/Brand/Brand"
import { ScrollView } from 'react-native-gesture-handler'
export default class Brandscreen extends Component {
    render() {
        return (
            <View>
                <ScrollView>

                    <Search />
                    <Showroom />
                    <Tabs />
                    <SLider />
                    <Brand />
                </ScrollView>
            </View>
        )
    }
}
