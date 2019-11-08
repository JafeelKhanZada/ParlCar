
import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { withNavigation } from "react-navigation"

const Navbutton = (props) => {
    console.log(props);

    return (
        <View>
            <View style={styles.button}>
                <View style={{ flex: 1 }}>
                    <Button color={props.navigation.state.routeName === "Brand" ? "red" : "grey"} title="BRAND" onPress={() => props.navigation.navigate("Brand")} />
                </View>
                <View style={{ flex: 1 }}>
                    <Button title="show Room" onPress={() => { props.navigation.navigate("Home") }} color={props.navigation.state.routeName === "Home" ? "red" : "grey"} />
                </View>
            </View>
        </View>
    );
};
export default withNavigation(Navbutton);

const styles = StyleSheet.create({
    button: {
        width: "100%",
        flexDirection: "row",
        marginBottom: 15
    }
});
