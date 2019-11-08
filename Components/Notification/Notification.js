import React, { Component } from 'react'
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { withNavigation } from "react-navigation"
class Notification extends Component {
    render() {
        return (
            <View>
                <Text style={{ fontWeight: "bold", fontSize: 20, padding: 10, borderBottomWidth: 1, borderBottomColor: "lightgrey", borderTopWidth: 1, borderTopColor: "lightgrey" }}>Notification</Text>
                <View style={{ height: 500, width: "100%", backgroundColor: "lightgrey", padding: 10, flexDirection: "column" }}>
                    <ScrollView>
                        <View style={{ height: 100, width: "100%", backgroundColor: "white", padding: 10, marginTop: 10 }}>
                            <Text style={{ color: "tomato", fontSize: 15, fontWeight: "bold" }}>What's new</Text>
                            <Text style={{ fontSize: 20, fontWeight: "300" }}>TX, Mercedes</Text>
                            <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                                <View style={{ width: "40%" }}>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", padding: 5, backgroundColor: "red" }}>
                                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 12 }}>+99 new adds</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={{ fontWeight: "bold", fontSize: 12, color: "grey" }}>
                                    21 Hours ago
                            </Text>
                            </View>
                        </View>
                        <View style={{ height: 100, width: "100%", backgroundColor: "white", padding: 10, marginTop: 10 }}>
                            <Text style={{ color: "tomato", fontSize: 15, fontWeight: "bold" }}>What's new</Text>
                            <Text style={{ fontSize: 20, fontWeight: "300" }}>TX, Mercedes</Text>
                            <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                                <View style={{ width: "40%" }}>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", padding: 5, backgroundColor: "red" }}>
                                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 12 }}>+99 new adds</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={{ fontWeight: "bold", fontSize: 12, color: "grey" }}>
                                    21 Hours ago
                            </Text>
                            </View>
                        </View>
                        <View style={{ height: 100, width: "100%", backgroundColor: "white", padding: 10, marginTop: 10 }}>
                            <Text style={{ color: "tomato", fontSize: 15, fontWeight: "bold" }}>What's new</Text>
                            <Text style={{ fontSize: 20, fontWeight: "300" }}>TX, Mercedes</Text>
                            <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                                <View style={{ width: "40%" }}>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", padding: 5, backgroundColor: "red" }}>
                                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 12 }}>+99 new adds</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={{ fontWeight: "bold", fontSize: 12, color: "grey" }}>
                                    21 Hours ago
                            </Text>
                            </View>
                        </View>

                    </ScrollView>
                </View>
            </View>
        )
    }
}
export default withNavigation(Notification)
