import React, { Component } from 'react'
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Thumbnail, Icon } from "native-base"
import Image1 from "../../assests/images/dashboard.png"
import Image2 from "../../assests/images/addNew.png"
import Image3 from "../../assests/images/myAd.png"
import Image4 from "../../assests/images/myAd.png"
import Image5 from "../../assests/images/notificationWhite.png"
import Image6 from "../../assests/images/feedback.png"
// import Image7 from "../../assests/images/aprofile.png"
import ProfileImg from "../../assests/images/profile.jpeg"
import { withNavigation } from "react-navigation"
class ProfileComponent extends Component {
    render() {
        let Drawer = [
            {
                label: "Search cars",
                Icon: Image1,
                Search: "Brand"
            },
            {
                label: "Sell a car",
                Icon: Image2,
                Search: "DashboardDrawer"
            },
            {
                label: "Bank Icons",
                Icon: Image3

            },
            {
                label: "Inshurance Quotes",
                Icon: Image4

            },
            {
                label: "Recovery Number",
                Icon: Image5

            },
            {
                label: "Service work shops",
                Icon: Image6

            },
            {
                label: "Feedback",
                Icon: Image6

            }

        ]
        return (
            <View>
                <View>
                    <View style={{ justifyContent: "center", padding: 10, alignItems: "center", height: 130, width: "100%", backgroundColor: "#222222" }}>
                        <Image style={{ borderWidth: 2, borderColor: "white", height: 100, width: 200 }} source={ProfileImg} alt="fdkmb" />
                    </View>
                    <View style={{ height: "100%", width: "100%", backgroundColor: "#222222" }}>
                        {Drawer.map((res, i) => {
                            return (
                                <TouchableOpacity onPress={() => this.props.navigation.navigate(res.Search)} key={i}>
                                    <View style={{ flexDirection: "row", width: "100%", padding: 10 }} >
                                        <View style={{ width: "25%" }}>
                                            <Image resizeMethod="resize" resizeMode="contain" source={res.Icon} style={{ height: 38, width: 45 }} />
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

export default withNavigation(ProfileComponent)