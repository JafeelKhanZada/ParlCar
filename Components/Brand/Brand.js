import React, { Component } from 'react'
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native'
export default class Showroom extends Component {
    state = {
        modalVisible: false,
    }
    visiblemodel = (visible) => {
        this.setState({ modalVisible: visible });
    }
    render() {
        return (
            <View>
                <View style={style.Showroom}>
                    <Text style={{ fontWeight: "bold", marginLeft: 20, }}>Brand</Text>
                    <Text style={{ color: "red", marginRight: 10 }}>View All</Text>
                </View>
                <View style={{ paddingRight: 20, paddingLeft: 20 }}>
                    <View style={style.Names}>
                        <TouchableOpacity style={style.Image}>
                            <Image style={{ height: "100%", borderWidth: 1, width: "100%" }} resizeMethod="resize" resizeMode="contain" source={require("../../assests/images/1.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.Image}>
                            <Image style={{ height: "100%", borderWidth: 1, width: "100%" }} resizeMethod="resize" resizeMode="contain" source={require("../../assests/images/2.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.Image}>
                            <Image style={{ height: "100%", borderWidth: 1, width: "100%" }} resizeMethod="resize" resizeMode="contain" source={require("../../assests/images/3.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.Image}>
                            <Image style={{ height: "100%", borderWidth: 1, width: "100%" }} resizeMethod="resize" resizeMode="contain" source={require("../../assests/images/1.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.Image}>
                            <Image style={{ height: "100%", borderWidth: 1, width: "100%" }} resizeMethod="resize" resizeMode="contain" source={require("../../assests/images/2.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.Image}>
                            <Image style={{ height: "100%", borderWidth: 1, width: "100%" }} resizeMethod="resize" resizeMode="contain" source={require("../../assests/images/3.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.Image}>
                            <Image style={{ height: "100%", borderWidth: 1, width: "100%" }} resizeMethod="resize" resizeMode="contain" source={require("../../assests/images/1.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.Image}>
                            <Image style={{ height: "100%", borderWidth: 1, width: "100%" }} resizeMethod="resize" resizeMode="contain" source={require("../../assests/images/2.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.Image}>
                            <Image style={{ height: "100%", borderWidth: 1, width: "100%" }} resizeMethod="resize" resizeMode="contain" source={require("../../assests/images/3.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.Image}>
                            <Image style={{ height: "100%", borderWidth: 1, width: "100%" }} resizeMethod="resize" resizeMode="contain" source={require("../../assests/images/1.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.Image}>
                            <Image style={{ height: "100%", borderWidth: 1, width: "100%" }} resizeMethod="resize" resizeMode="contain" source={require("../../assests/images/2.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.Image}>
                            <Image style={{ height: "100%", borderWidth: 1, width: "100%" }} resizeMethod="resize" resizeMode="contain" source={require("../../assests/images/3.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.Image}>
                            <Image style={{ height: "100%", borderWidth: 1, width: "100%" }} resizeMethod="resize" resizeMode="contain" source={require("../../assests/images/3.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.Image}>
                            <Image style={{ height: "100%", borderWidth: 1, width: "100%" }} resizeMethod="resize" resizeMode="contain" source={require("../../assests/images/1.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.Image}>
                            <Image style={{ height: "100%", borderWidth: 1, width: "100%" }} resizeMethod="resize" resizeMode="contain" source={require("../../assests/images/2.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.Image}>
                            <Image style={{ height: "100%", borderWidth: 1, width: "100%" }} resizeMethod="resize" resizeMode="contain" source={require("../../assests/images/3.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.Image}>
                            <Image style={{ height: "100%", borderWidth: 1, width: "100%" }} resizeMethod="resize" resizeMode="contain" source={require("../../assests/images/3.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.Image}>
                            <Image style={{ height: "100%", borderWidth: 1, width: "100%" }} resizeMethod="resize" resizeMode="contain" source={require("../../assests/images/1.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.Image}>
                            <Image style={{ height: "100%", borderWidth: 1, width: "100%" }} resizeMethod="resize" resizeMode="contain" source={require("../../assests/images/2.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.Image}>
                            <Image style={{ height: "100%", borderWidth: 1, width: "100%" }} resizeMethod="resize" resizeMode="contain" source={require("../../assests/images/3.png")} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        )
    }
}

const style = StyleSheet.create({
    Showroom: {
        paddingTop: 12,
        backgroundColor: "#f4f4f4",
        marginTop: 10,
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    Names: {
        marginTop: 10,
        justifyContent: "space-evenly",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    Image: {
        padding: 5,
        height: 55,
        width: "25%"
    }
})