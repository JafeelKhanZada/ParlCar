import React, { Component } from 'react'
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native'
import Image1 from "../../assests/images/dashboard.png"
import Image2 from "../../assests/images/addNew.png"
import Image3 from "../../assests/images/myAd.png"
import Image4 from "../../assests/images/balance.png"
import Image5 from "../../assests/images/notificationWhite.png"
import Image6 from "../../assests/images/feedback.png"
import { Thumbnail } from "native-base"
export default class DrawerComponent extends Component {
    render() {
        let Drawer = [
            {
                label: "Dashboard",
                Icon: Image1,
                Add: "Dashboard"

            },
            {
                label: "Add New",
                Icon: Image2,
                Add: "AddNew"
            },
            {
                label: "My Ads",
                Icon: Image3,
                Add: "Dashboard"
            },
            {
                label: "Balance",
                Icon: Image4,
                Add: "Dashboard"
            },
            {
                label: "Notification",
                Icon: Image5,
                Add: "Dashboard"
            },
            {
                label: "Feedback",
                Icon: Image6,
                Add: "Dashboard"
            },
            {
                label: "profile",
                Icon: Image6,
                Add: "Drawer"
                // Icon: Image7

            }

        ]
        return (
            <View>
                <View>
                    <View style={{ justifyContent: "center", padding: 10, alignItems: "center", height: 130, width: "100%", backgroundColor: "#222222" }}>
                        <Thumbnail style={{ borderWidth: 2, borderColor: "white" }} large source={require("../../assests/images/showroom.png")} />
                        <Text style={{ fontSize: 15, color: "white", padding: 5 }}>SHOW ROOM USER</Text>
                    </View>
                    <View style={{ height: "100%", width: "100%", backgroundColor: "#222222" }}>
                        {Drawer.map((res, i) => {
                            return (
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate(res.Add) }} key={i}>
                                    <View style={{ flexDirection: "row", width: "100%", padding: 10 }} key={i}>
                                        <View style={{ width: "25%" }}>
                                            <Image resizeMethod="auto" resizeMode="center" source={res.Icon} style={{ height: 38, width: 45 }} />
                                        </View>
                                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 12, padding: 10 }}>{res.label}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                        <View style={{ height: 100, width: "100%", backgroundColor: "#222222" }}>
                            <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", paddingTop: 10 }}>
                                <Image source={require("../../assests/images/logOut.png")} style={{ height: 40, width: 40 }} />
                                <Text style={{ color: "white", fontWeight: "bold" }}>Logout</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View >
        )
    }
}
