import React, { Component } from 'react'
import { Picker } from "react-native"
import { TouchableOpacity } from "react-native"
import { Container, Header, Content, Item, Input, Icon, View, Text } from 'native-base';

export default class SearchComponent extends Component {
    state = {
        language: "No minimum",
        language1: "No minimum",
        language2: "No minimum",
        language3: "No minimum",
        language4: "No minimum",
        language5: "No minimum",
    }
    render() {
        return (
            <View style={{ top: 25, position: "absolute", opacity: 0.99, backgroundColor: "white", width: "100%", zIndex: 100, padding: 10 }}>
                <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                    <TouchableOpacity onPress={() => this.props.Visibel(false)}>
                        <Icon active name='close' />
                    </TouchableOpacity>

                </View>
                <Item>
                    <Icon active name='search' />
                    <Input placeholder="Newyourk Los Angeles" />
                    <Icon active name='location' />

                </Item>
                <Item>
                    <Icon active name='search' />
                    <Input placeholder="Newyourk Los Angeles" />

                </Item>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <View style={{ width: "100%", flexDirection: "row" }}>
                        <Picker

                            selectedValue={this.state.language}
                            style={{ height: 50, width: "45%" }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ language: itemValue })
                            }>
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                        <Text style={{ width: "10%", textAlign: "center", paddingTop: 15, color: "red" }}>To</Text>
                        <Picker

                            selectedValue={this.state.language1}
                            style={{ height: 50, width: "45%" }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ language1: itemValue })
                            }>
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                    </View>
                    <View style={{ width: "100%", flexDirection: "row" }}>
                        <Picker

                            selectedValue={this.state.language2}
                            style={{ height: 50, width: "45%" }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ language2: itemValue })
                            }>
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                        <Text style={{ width: "10%", textAlign: "center", paddingTop: 15, color: "red" }}>To</Text>
                        <Picker

                            selectedValue={this.state.language13}
                            style={{ height: 50, width: "45%" }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ language3: itemValue })
                            }>
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                    </View>
                    <View style={{ width: "100%", flexDirection: "row" }}>
                        <Picker

                            selectedValue={this.state.language4}
                            style={{ height: 50, width: "45%" }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ language4: itemValue })
                            }>
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                        <Text style={{ width: "10%", textAlign: "center", paddingTop: 15, color: "red" }}>To</Text>
                        <Picker

                            selectedValue={this.state.language5}
                            style={{ height: 50, width: "45%" }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ language5: itemValue })
                            }>
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                    </View>
                    <TouchableOpacity style={{ width: "30%", padding: 5, backgroundColor: "red" }}>
                        <Text style={{ color: "#fff", fontWeight: "bold", textAlign: "center" }}>Search</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
