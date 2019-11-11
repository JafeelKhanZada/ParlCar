import React, { Component } from 'react'
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome"
import { Picker } from "react-native"
export default class AddNewAdds extends Component {
    state = {
        language: "No minimum",
    }
    render() {
        return (
            <View>
                <View style={{ justifyContent: "center", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "lightgrey", borderTopWidth: 1, borderTopColor: "lightgrey" }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20, padding: 10, }}>Add New</Text>
                </View>
                <View style={{ height: "100%", width: "100%" }}>
                    <View style={{ flex: 0.2, flexDirection: "row", justifyContent: "space-evenly", padding: 5 }}>
                        <TouchableOpacity>
                            <View style={{ width: 80, height: 80, backgroundColor: "lightgrey", justifyContent: "center", alignItems: "center" }}>
                                <Icon name="plus" size={20} color="red" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ width: 80, height: 80, backgroundColor: "lightgrey", justifyContent: "center", alignItems: "center" }}>
                                <Icon name="plus" size={20} color="red" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ width: 80, height: 80, backgroundColor: "lightgrey", justifyContent: "center", alignItems: "center" }}>
                                <Icon name="plus" size={20} color="red" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ width: 80, height: 80, backgroundColor: "lightgrey", justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ color: "grey" }}>More</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 2, padding: 15 }}>

                        <View style={{ width: "100%", borderWidth: 1, borderColor: "lightgrey", marginTop: 5 }}>
                            <Picker

                                selectedValue={this.state.language}
                                style={{ height: 30, width: "100%", color: "lightgrey" }}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({ language: itemValue })
                                }>
                                <Picker.Item label="City" value="City" />
                                <Picker.Item label="JavaScript" value="js" />
                            </Picker>
                        </View>
                        <ScrollView>
                            <View style={{ height: 30, borderWidth: 1, borderColor: "lightgrey", marginTop: 10 }}>
                                <TextInput placeholder="SHOWROOM NAME" style={{ padding: 2, fontSize: 13 }} />
                            </View>
                            <View style={{ height: 30, borderWidth: 1, borderColor: "lightgrey", marginTop: 10 }}>
                                <TextInput placeholder="CAR BRAND" style={{ padding: 2, fontSize: 13 }} />
                            </View>
                            <View style={{ height: 30, borderWidth: 1, borderColor: "lightgrey", marginTop: 10 }}>
                                <TextInput placeholder="MODEL" style={{ padding: 2, fontSize: 13 }} />
                            </View>
                            <View style={{ height: 30, borderWidth: 1, borderColor: "lightgrey", marginTop: 10 }}>
                                <TextInput placeholder="CAR ORIGIN" style={{ padding: 2, fontSize: 13 }} />
                            </View>
                            <View style={{ height: 30, borderWidth: 1, borderColor: "lightgrey", marginTop: 10 }}>
                                <TextInput placeholder="YEAR" style={{ padding: 2, fontSize: 13 }} />
                            </View>
                            <View style={{ height: 30, borderWidth: 1, borderColor: "lightgrey", marginTop: 10 }}>
                                <TextInput placeholder="KILOMETERS" style={{ padding: 2, fontSize: 13 }} />
                            </View>
                            <View style={{ height: 30, borderWidth: 1, borderColor: "lightgrey", marginTop: 10 }}>
                                <TextInput placeholder="WARRANTY" style={{ padding: 2, fontSize: 13 }} />
                            </View>
                            <View style={{ height: 30, borderWidth: 1, borderColor: "lightgrey", marginTop: 10 }}>
                                <TextInput placeholder="COLOR" style={{ padding: 2, fontSize: 13 }} />
                            </View>
                            <View style={{ height: 30, borderWidth: 1, borderColor: "lightgrey", marginTop: 10 }}>
                                <TextInput placeholder="TRANSMISSION" style={{ padding: 2, fontSize: 13 }} />
                            </View>
                            <View style={{ height: 30, borderWidth: 1, borderColor: "lightgrey", marginTop: 10 }}>
                                <TextInput placeholder="BODY TYPE" style={{ padding: 2, fontSize: 13 }} />
                            </View>
                            <View style={{ height: 30, borderWidth: 1, borderColor: "lightgrey", marginTop: 10 }}>
                                <TextInput placeholder="FUEL TYPE" style={{ padding: 2, fontSize: 13 }} />
                            </View>
                            <View style={{ height: 30, borderWidth: 1, borderColor: "lightgrey", marginTop: 10 }}>
                                <TextInput placeholder="ENGINE SIZE" style={{ padding: 2, fontSize: 13 }} />
                            </View>
                            <View style={{ height: 30, borderWidth: 1, borderColor: "lightgrey", marginTop: 10 }}>
                                <TextInput placeholder="NOTES" style={{ padding: 2, fontSize: 13 }} />
                            </View>
                            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 10 }}>
                                <TouchableOpacity style={{ width: 100, padding: 5, backgroundColor: "red", justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ color: "white" }}>Save</Text>
                                </TouchableOpacity>

                            </View>
                        </ScrollView>
                    </View>


                </View>
            </View >
        )
    }
}
