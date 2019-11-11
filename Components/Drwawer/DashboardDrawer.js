import React, { Component } from 'react'
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Thumbnail, Icon } from "native-base"
export default class DrawerComponent extends Component {
    render() {
        let Drawer = [
            {
                label: "Dashboard",
                Icon: "../../assests/images/dashboard.png",
                Add: "Dashboard"

            },
            {
                label: "Add New",
                Icon: "../../assests/images/addNew.png",
                Add: "AddNew"
            },
            {
                label: "My Ads",
                Icon: "../../assests/images/myAd.png"

            },
            {
                label: "Balance",
                Icon: "../../assests/images/balance.png"

            },
            {
                label: "Notification",
                Icon: "../../assests/images/notificationWhite.png"

            },
            {
                label: "Feedback",
                Icon: "../../assests/images/feedback.png"

            },
            {
                label: "profile",
                // Icon: "../../assests/images/aprofile.png"

            }

        ]
        return (
            <View>
                <View>
                    <View style={{ justifyContent: "center", padding: 10, alignItems: "center", height: 130, width: "100%", backgroundColor: "#222222" }}>
                        <Thumbnail style={{ borderWidth: 2, borderColor: "white" }} large source={require("../../assests/images/showroom.png")} />
                        <Text style={{ fontSize: 20, color: "white", padding: 5 }}>SHOW ROOM USER</Text>
                    </View>
                    <View style={{ height: "100%", width: "100%", backgroundColor: "#222222" }}>
                        {Drawer.map((res, i) => {
                            return (
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate(res.Add) }}>
                                    <View style={{ flexDirection: "row", width: "100%", padding: 10 }} key={i}>
                                        <View style={{ width: "25%" }}>
                                            <Image source={require("../../assests/images/feedback.png")} style={{ height: 38, width: 45 }} />
                                        </View>
                                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>{res.label}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                        <View style={{ height: 100, width: "100%", backgroundColor: "#222222" }}>
                            <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", paddingTop: 30 }}>
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
