import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, } from "react-native";
import { withNavigation } from "react-navigation"
import Icon from "react-native-vector-icons/FontAwesome"
const MainContent = (props) => {
    return (
        <View>
            <ScrollView>
                <View>
                    <TouchableOpacity>
                        <View style={styles.container}>
                            <View style={{ width: "40%", backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
                                <Image resizeMethod="resize" resizeMode="contain" source={require("../../assests/images/1.png")} />
                            </View>
                            <View style={{ width: "60%", backgroundColor: "white" }}>
                                <View style={{ width: "100%", padding: 5, backgroundColor: "white", flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text>Export lady owned Volvo Xc60</Text>
                                    <Icon name="heart" size={20} color="red" style={{ paddingRight: 10 }} />
                                </View>
                                <View style={{ width: "70%", paddingLeft: 5, backgroundColor: "white" }}>
                                    <Text style={{ color: "grey", fontSize: 8 }}>User Cars for sale Xc60</Text>
                                    <Text style={{ color: "red", fontWeight: "bold", fontSize: 12 }}>$16.995</Text>
                                    <Text style={{ color: "grey", fontSize: 8, padding: 5 }}>1 Month ago</Text>
                                </View>
                                <View style={{ paddingLeft: 5, width: "100%", backgroundColor: "white", flexDirection: "row", justifyContent: "space-between" }} >
                                    <TouchableOpacity style={{ width: "45%", backgroundColor: "orange", justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ color: "white" }}>Sponsered</Text>
                                    </TouchableOpacity>
                                    <View style={{ width: "25%", borderRightWidth: 1, borderRightColor: "grey", alignItems: "center" }}>
                                        <Text style={{ color: "grey", fontSize: 8 }}>71,616</Text>
                                        <Text style={{ color: "grey", fontSize: 8 }}>miles</Text>
                                    </View>
                                    <View style={{ width: "25%", alignItems: "center" }}>
                                        <Text style={{ color: "grey", fontSize: 8 }}>2013</Text>
                                        <Text style={{ color: "grey", fontSize: 8 }}>Model</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>



    );
};
export default withNavigation(MainContent);

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: "100%",
        backgroundColor: "grey",
        flexDirection: "row",
    },
    Image: {
        height: "100%",
        width: "100%"
    }
});
