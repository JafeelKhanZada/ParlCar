import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"
import MaterialIcon from "react-native-vector-icons/MaterialIcons"
import Header from "./Header"
import RegisterModal from "./RegisterModal"
import Callmodel from "./Callmodel"
import { Footer } from "native-base"
import { SliderBox } from "react-native-image-slider-box"
export default class CarDetails extends Component {
    state = {
        color: "black"
    }
    static navigationOptions = {
        // headerTitle instead of title
        headerTitle: () => <Header />,
    };

    state = {
        modalVisible: false,
        modalVisible1: false,
        images: [
            'https://source.unsplash.com/1024x768/?nature',
            'https://source.unsplash.com/1024x768/?water',
            'https://source.unsplash.com/1024x768/?girl',
            'https://source.unsplash.com/1024x768/?tree'
        ]
    }
    visiblemodel = (visible) => {
        this.setState({ modalVisible: visible });
    }
    visiblemodel1 = (visible) => {
        this.setState({ modalVisible1: visible });
    }
    Changecolor = () => {
        this.setState({
            color: "red"
        })
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ width: "100%" }}>
                    <SliderBox
                        images={this.state.images}
                        // sliderBoxHeight={200}
                        dotColor="red"
                        inactiveDotColor="white"
                        dotStyle={{
                            width: 10,
                            height: 10,
                            borderRadius: 15,
                            // marginHorizontal: 10,
                            padding: 0,
                            marginBottom: 35
                        }}
                    />
                    <View style={{ flexDirection: "row", justifyContent: "space-between", position: "absolute", top: 160, width: "100%", }}>
                        <View style={{ height: "100%", position: "absolute", width: "100%", backgroundColor: "black", opacity: 0.5, }}>
                        </View>
                        <Text style={{ fontSize: 15, color: "white", paddingLeft: 10 }}>Export lady owned Volvo XC60</Text>
                        <TouchableOpacity onPress={this.Changecolor}>
                            <View style={{ marginRight: 8, position: "relative", top: -20, height: 40, width: 40, backgroundColor: "white", borderRadius: 100, justifyContent: "center", alignItems: "center" }}>
                                <Icon name="heart" size={20} color={this.state.color} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ width: "100%", flex: 1 }}>
                    <ScrollView>
                        <View style={{ flexDirection: "row", width: "100%", padding: 10, borderBottomWidth: 1, borderBottomColor: "grey" }}>
                            <Text style={{ width: "35%", color: "grey" }}>City</Text>
                            <Text style={{ width: "75%" }}>Lahore</Text>
                        </View>
                        <View style={{ flexDirection: "row", width: "100%", padding: 10, borderBottomWidth: 1, borderBottomColor: "grey" }}>
                            <Text style={{ width: "35%", color: "grey" }}>Source</Text>
                            <Text style={{ width: "75%" }}>XYZ Showroom</Text>
                        </View>
                        <View style={{ flexDirection: "row", width: "100%", padding: 10, borderBottomWidth: 1, borderBottomColor: "grey" }}>
                            <Text style={{ width: "35%", color: "grey" }}>Price</Text>
                            <Text style={{ width: "75%" }}>$154.22</Text>
                        </View>
                        <View style={{ flexDirection: "row", width: "100%", padding: 10, borderBottomWidth: 1, borderBottomColor: "grey" }}>
                            <Text style={{ width: "35%", color: "grey" }}>Car Brand</Text>
                            <Text style={{ width: "75%" }}>Bmw</Text>
                        </View>
                        <View style={{ flexDirection: "row", width: "100%", padding: 10, borderBottomWidth: 1, borderBottomColor: "grey" }}>
                            <Text style={{ width: "35%", color: "grey" }}>City</Text>
                            <Text style={{ width: "75%" }}>Lahore</Text>
                        </View>
                        <View style={{ flexDirection: "row", width: "100%", padding: 10, borderBottomWidth: 1, borderBottomColor: "grey" }}>
                            <Text style={{ width: "35%", color: "grey" }}>City</Text>
                            <Text style={{ width: "75%" }}>Lahore</Text>
                        </View>
                        <View style={{ flexDirection: "row", width: "100%", padding: 10, borderBottomWidth: 1, borderBottomColor: "grey" }}>
                            <Text style={{ width: "35%", color: "grey" }}>City</Text>
                            <Text style={{ width: "75%" }}>Lahore</Text>
                        </View>
                        <View style={{ flexDirection: "row", width: "100%", padding: 10, borderBottomWidth: 1, borderBottomColor: "grey" }}>
                            <Text style={{ width: "35%", color: "grey" }}>City</Text>
                            <Text style={{ width: "75%" }}>Lahore</Text>
                        </View>
                        <View style={{ flexDirection: "row", width: "100%", padding: 10, borderBottomWidth: 1, borderBottomColor: "grey" }}>
                            <Text style={{ width: "35%", color: "grey" }}>City</Text>
                            <Text style={{ width: "75%" }}>Lahore</Text>
                        </View>


                    </ScrollView>
                </View>
                <Footer style={{ backgroundColor: "white" }}>
                    <View style={{ flexDirection: "row", width: "100%" }}>
                        <TouchableOpacity style={{ width: "50%" }} onPress={() => this.visiblemodel1(true)}>
                            <View style={{ width: "100%", height: "100%", backgroundColor: "red", justifyContent: "center", alignItems: "center" }}>
                                <MaterialIcon name="phone" size={15} color="white" />
                                <Text style={{ color: "white" }}>call</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{ width: "1%" }}></View>
                        <TouchableOpacity style={{ width: "50%" }} onPress={() => this.visiblemodel(true)}>
                            <View style={{ width: "100%", height: "100%", backgroundColor: "red", justifyContent: "center", alignItems: "center" }}>
                                <MaterialIcon name="drive-eta" size={15} color="white" />
                                <Text style={{ color: "white" }}>Test Drive</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Footer>
                <Callmodel modalVisible={this.state.modalVisible1} setModalVisible={this.visiblemodel1} />
                <RegisterModal modalVisible={this.state.modalVisible} setModalVisible={this.visiblemodel} />
            </View >
        )
    }
}
