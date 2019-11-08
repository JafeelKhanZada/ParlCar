import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
export default class Tabss extends Component {
    render() {
        return (
            <View  >
                <View style={{ flexDirection: "row", justifyContent: "space-evenly", }}>
                    <TouchableOpacity>
                        <Text style={{ color: "red", borderBottomColor: "red", borderBottomWidth: 1, padding: 5 }}>Category</Text>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ padding: 5, color: "grey" }}>Make</Text>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ padding: 5, color: "grey" }}>Model</Text>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ padding: 5, color: "grey" }}>Cities</Text>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ padding: 5, color: "grey" }}>Body type</Text>

                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

