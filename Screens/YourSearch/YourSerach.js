import React, { Component } from 'react'
import { View, Text, TextInput, ScrollView } from 'react-native'
import Search from "../../Components/Home/SearchEngin"
import SearchPost from "../../Components/YourSearch/YouSearchPost"
export default class YourSerach extends Component {
    render() {
        return (
            <View>
                <ScrollView>
                    <Search />
                    <SearchPost />
                </ScrollView>
            </View>
        )
    }
}
