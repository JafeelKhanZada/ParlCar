import React, { Component } from 'react'
import { Modal, Text, TouchableHighlight, View, Alert, Image, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome"
import { Thumbnail } from "native-base"
import { ScrollView } from 'react-native-gesture-handler';
export default class Model extends Component {
    render() {
        return (

            <Modal
                animationType="none"
                transparent={true}
                visible={this.props.modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <View style={{ position: "absolute", height: "100%", width: "100%", opacity: 0.5, backgroundColor: "black" }}></View>
                <View style={{ marginTop: 150 }}>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <View style={{ height: 390, width: "80%", backgroundColor: "white", }}>
                            <View style={{ width: "100%", backgroundColor: "white", height: 25, padding: 5 }}>
                                <TouchableHighlight onPress={() => {
                                    this.props.setModalVisible(!this.props.modalVisible);
                                }}>
                                    <Icon name="close" size={20} />

                                </TouchableHighlight>
                            </View>
                            <View style={{ height: 130, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
                                <Thumbnail large source={require("../../assests/images/showroom.png")} />
                                <Text style={{ fontSize: 20 }}>showroom Name</Text>
                            </View>
                            <View>
                                <View style={{ height: 30, backgroundColor: "black", padding: 8, }}>
                                    <Text style={{ color: "#fff", fontWeight: "bold" }}>Phone: +92 315-700-3000</Text>
                                </View>
                                <View style={{ height: 30, backgroundColor: "black", padding: 8, marginTop: 4 }}>
                                    <Text style={{ color: "#fff", fontWeight: "bold" }}>Address: 253-E Street-1 Dubai</Text>
                                </View>
                            </View>
                            <View style={{ height: 100, backgroundColor: "white" }}>
                                <ScrollView>
                                    <Text style={{ fontWeight: "bold", fontSize: 15, padding: 5 }}>Detail</Text>
                                    <Text style={{ padding: 5 }}>nchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop pu</Text>
                                </ScrollView>
                            </View>
                            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 5 }}>
                                <TouchableOpacity style={{ padding: 10, backgroundColor: "red" }}>
                                    <Text style={{ color: "#fff", fontWeight: "bold" }}>View Showroom</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* <TouchableHighlight
                            onPress={() => {
                                this.props.setModalVisible(!this.props.modalVisible);
                            }}>
                            <Text>Hide Modal</Text>
                        </TouchableHighlight> */}
                    </View>
                </View>
            </Modal>


        )
    }
}
