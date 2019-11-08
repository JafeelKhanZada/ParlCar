import React, { Component } from 'react'
import { Modal, Text, TouchableHighlight, View, Alert, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
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

                            <View>
                                <View style={{ justifyContent: "center", alignItems: "center" }} >
                                    <Text style={{ fontWeight: "bold", fontSize: 23 }}>Register</Text>
                                    <Text>TEST DRIVE</Text>
                                </View>
                                <Form style={{ padding: 15, }} >
                                    <Item floatingLabel>
                                        <Label style={{ padding: 5 }}>Name</Label>
                                        <Input />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label style={{ padding: 5 }}>Number</Label>
                                        <Input />
                                    </Item>
                                </Form>
                                <View style={{ justifyContent: "center", alignItems: "center", }}>
                                    <Text style={{ fontSize: 15, fontWeight: "bold", color: "grey" }}>OR</Text>
                                    <TouchableOpacity style={{ width: 250, marginTop: 20, flexDirection: "row", padding: 5, backgroundColor: "lightblue" }}>
                                        <Icon name="facebook" size={20} color="white" />
                                        <Text style={{ paddingLeft: 30, color: "white" }}>Register with facebook</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ width: 140, marginTop: 20, flexDirection: "row", padding: 5, backgroundColor: "red", justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ color: "white" }}>Register</Text>
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
