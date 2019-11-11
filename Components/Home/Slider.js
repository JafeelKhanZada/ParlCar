import React, { Component } from 'react'
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Image, } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome"
export default class Sliders extends Component {
    render() {
        return (
            <View style={{ position: "relative", zIndex: -1 }}>
                <View style={{ marginTop: 20 }}>
                    <ScrollView horizontal indicatorStyle="white" >
                        <View style={styles.slide}>
                            <View style={styles.Slidepost}>
                                <Icon name="car" size={23} color="grey" />
                                <Text style={{ color: "grey" }}>660cc cars</Text>

                            </View>
                            <View style={styles.Slidepost}>
                                <Icon name="car" size={23} color="grey" />
                                <Text style={{ color: "grey" }}>660cc cars</Text>

                            </View>
                            <View style={styles.Slidepost}>
                                <Icon name="car" size={23} color="grey" />
                                <Text style={{ color: "grey" }}>660cc cars</Text>

                            </View>
                            <View style={styles.Slidepost}>
                                <Icon name="car" size={23} color="grey" />
                                <Text style={{ color: "grey" }}>660cc cars</Text>

                            </View>
                            <View style={styles.Slidepost}>
                                <Icon name="car" size={23} color="grey" />
                                <Text style={{ color: "grey" }}>660cc cars</Text>

                            </View>
                            <View style={styles.Slidepost}>
                                <Icon name="car" size={23} color="grey" />
                                <Text style={{ color: "grey" }}>660cc cars</Text>

                            </View>
                            <View style={styles.Slidepost}>
                                <Icon name="car" size={23} color="grey" />
                                <Text style={{ color: "grey" }}>660cc cars</Text>

                            </View>

                        </View>


                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    slide: {
        justifyContent: "space-evenly",
        flexDirection: "row"
    },
    Slidepost: {
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
        width: 100,
        backgroundColor: "white"
    }
})
