import React, { Component } from 'react'
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { withNavigation } from "react-navigation"
import Header from "./Header"
class Expiredads extends Component {
    static navigationOptions = {
        // headerTitle instead of title
        headerTitle: () => <Header />,
    };
    render() {
        return (
            <View>
                <ScrollView>
                    <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20, padding: 10, borderBottomWidth: 1, borderBottomColor: "lightgrey", borderTopWidth: 1, borderTopColor: "lightgrey" }}>Expired Ads</Text>
                    <View style={{ height: "100%", width: "100%", backgroundColor: "#F4F4F4", padding: 5 }}>
                        <TouchableOpacity>
                            <View style={{ marginTop: 10, padding: 10, height: 100, width: "100%", backgroundColor: "white", flexDirection: "row", opacity: 0.5 }}>
                                <View style={{ height: 80, width: "25%", backgroundColor: "white" }}>
                                    <Image style={{ height: "100%", width: "100%" }} source={require("../../assests/images/bimage.png")} />
                                </View>
                                <View style={{ width: "75%", backgroundColor: "white", padding: 5 }}>
                                    <Text style={{ fontWeight: "bold", fontSize: 13 }}>Export lady owned Volvo..</Text>
                                    <Text style={{ color: "grey", fontSize: 10, }}>User car for sale</Text>
                                    <View style={{ flexDirection: "row", justifyContent: "flex-end", marginTop: -20 }}>
                                        <TouchableOpacity>
                                            <Image style={{ height: 25, width: 25 }} source={require("../../assests/images/delRed.png")} />

                                        </TouchableOpacity>

                                    </View>
                                    <View style={{ width: "100%", backgroundColor: "white", flexDirection: "row", justifyContent: "space-between" }}>
                                        <Text style={{ color: "grey", fontSize: 10, }}>13/March/2019</Text>
                                        <Text style={{ color: "grey", fontSize: 10, paddingRight: 100 }}>71,619 Views</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={{ marginTop: 10, padding: 10, height: 100, width: "100%", backgroundColor: "white", flexDirection: "row", opacity: 0.5 }}>
                                <View style={{ height: 80, width: "25%", backgroundColor: "white" }}>
                                    <Image style={{ height: "100%", width: "100%" }} source={require("../../assests/images/bimage.png")} />
                                </View>
                                <View style={{ width: "75%", backgroundColor: "white", padding: 5 }}>
                                    <Text style={{ fontWeight: "bold", fontSize: 13 }}>Export lady owned Volvo..</Text>
                                    <Text style={{ color: "grey", fontSize: 10, }}>User car for sale</Text>
                                    <View style={{ flexDirection: "row", justifyContent: "flex-end", marginTop: -20 }}>
                                        <TouchableOpacity>
                                            <Image style={{ height: 25, width: 25 }} source={require("../../assests/images/delRed.png")} />

                                        </TouchableOpacity>

                                    </View>
                                    <View style={{ width: "100%", backgroundColor: "white", flexDirection: "row", justifyContent: "space-between" }}>
                                        <Text style={{ color: "grey", fontSize: 10, }}>13/March/2019</Text>
                                        <Text style={{ color: "grey", fontSize: 10, paddingRight: 100 }}>71,619 Views</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View >
        )
    }
}
export default withNavigation(Expiredads)
