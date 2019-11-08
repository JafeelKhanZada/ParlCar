import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from "react-native"
import { withNavigation } from "react-navigation"

import { Container, Header, Content, Item, Input, Icon, View, Text } from 'native-base';
import SearchComponent from './SearchComponent';
class SearchEngin extends Component {
    state = {
        Visible: false
    }
    Visibel = (v) => {
        this.setState({
            Visible: v
        })
    }
    render() {
        return this.state.Visible === false ? (
            <View>
                <Item>
                    <TouchableOpacity style={{ flexDirection: "row", padding: 5 }} onPress={() => this.Visibel(true)} >
                        <Icon active name='search' />
                        <Text>Start searching for Used Cars</Text>
                    </TouchableOpacity>

                </Item>
            </View>
        ) : (
                <SearchComponent Visibel={this.Visibel} />
            )
    }
}
export default withNavigation(SearchEngin)
const Styles = StyleSheet.create({
    Input: {
        height: 40
    }
})