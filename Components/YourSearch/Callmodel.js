import React, { Component } from 'react'
import { Modal, Text, TouchableHighlight, View, Alert, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome"
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
                <View style={{ marginTop: 300 }}>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <View style={{ height: 150, width: "80%", backgroundColor: "white", }}>
                            <View style={{ width: "100%", backgroundColor: "white", height: 25, padding: 5 }}>
                                <TouchableHighlight onPress={() => {
                                    this.props.setModalVisible(!this.props.modalVisible);
                                }}>
                                    <Icon name="close" size={20} />

                                </TouchableHighlight>
                            </View>

                            <View>
                                <View style={{ justifyContent: "center", alignItems: "center" }} >
                                    <Text style={{ fontWeight: "bold", fontSize: 23 }}>Razi nazam</Text>
                                    <View style={{ width: "100%", height: 30, backgroundColor: "black", justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ color: "white" }}>+9215 700 300</Text>
                                    </View>
                                    <TouchableOpacity style={{ width: 140, marginTop: 10, flexDirection: "row", padding: 5, backgroundColor: "red", justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ color: "white" }}>Call</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                    </View>
                </View>
            </Modal>


        )
    }
}
