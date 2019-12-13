import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default class Sliders extends Component {
    render() {
        return (
            <View style={styles.slide}>
                <TouchableOpacity style={styles.Slidepost}>
                    <Image style={styles.img} resizeMode='stretch' source={require("../../assests/NewAssets/600.png")} />
                    <Text style={styles.text}>660cc cars</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Slidepost}>
                    <Image style={styles.img} resizeMode='stretch' source={require("../../assests/NewAssets/1000.png")} />
                    <Text style={styles.text}>1000cc cars</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Slidepost}>
                    <Image style={styles.img} resizeMode='stretch' source={require("../../assests/NewAssets/1800.png")} />
                    <Text style={styles.text}>1800cc cars</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Slidepost}>
                    <Image style={styles.img} resizeMode='stretch' source={require("../../assests/NewAssets/japness.png")} />
                    <Text style={styles.text}>Japanese cars</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    slide: {
        justifyContent: "space-between",
        flexDirection: "row",
        width: "100%",
        padding:10,
        marginTop:20
    },
    Slidepost: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    text: {
        fontFamily: "Poppins",
        fontSize: 11,
        color: "#c7c7c7"
    },
    img: {
        marginBottom: 10,
        width: 50,
        height: 22,
    }
})
