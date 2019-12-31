import React, { Component } from 'react';
import Header from '../Home/Header';
import { View, Text, TextInput, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from "react-native-vector-icons/AntDesign"
// import EditModal from "./EditProfile"
class HomeScreen extends Component {
  render() {
    return (
      <View>
          <Header/>
        <View style={styles.ProParent}>
          <Text style={styles.ProfileText}>Profile</Text>
        </View>
        <View style={{ height: hp("100%"), backgroundColor: "#F4F4F4", padding: 10 }} >
          <View style={{ height: hp("55%"), backgroundColor: "white", marginTop: "30%", marginBottom: "30%", position: "relative" }}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <View style={{ height: 150, width: 150, backgroundColor: "#F7F7F7", top: -90, borderRadius: 10, borderColor: "#ffff", borderWidth: 1, overflow: "hidden" }}>
                <TouchableOpacity>
                  <Image style={{ height: 150, width: 150 }} source={{ uri: "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" }} />

                </TouchableOpacity>
              </View>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center", marginTop: -70 }}>
              <Text style={{ fontSize: 13, fontFamily: "Poppins-Medium", color: "#db2025" }}>Welcome</Text>
              <Text style={{ fontFamily: "Poppins-Bold" }}>Muhammad Razi</Text>
            </View>
            <View style={{ height: hp("34%") }}>
              <ScrollView style={{ width: "100%", flex: 1, padding: 10 }} showsVerticalScrollIndicator={false} >
                <View style={{ width: "100%", flexDirection: "row", padding: 10 }}>
                  <View style={{ flexDirection: "row", width: "45%" }}>
                    <Icon style={{ paddingRight: 10 }} name="mobile1" size={20} color="red" />
                    <Text style={{ color: "grey", fontFamily: "Poppins-Light" }}>Mobile</Text>
                  </View>
                  <Text style={{ fontFamily: "Poppins-Medium" }}>03157003000</Text>
                </View>
                <View style={{ width: "100%", flexDirection: "row", padding: 10 }}>
                  <View style={{ flexDirection: "row", width: "45%" }}>
                    <Icon style={{ paddingRight: 10 }} name="mobile1" size={20} color="red" />
                    <Text style={{ color: "grey", fontFamily: "Poppins-Light" }}>Email Address</Text>
                  </View>
                  <Text style={{ fontFamily: "Poppins-Medium" }}>hellow@gmial.com</Text>
                </View>


              </ScrollView>
              <View style={{ paddingTop: 10 }}>
                <TouchableOpacity onPress={()=>this.OpenModal(true)} style={{ alignSelf: "center", padding: 3, backgroundColor: "#db2025", width: "40%", justifyContent: "center", alignItems: "center" }}>
                  <Text style={{ fontFamily: "Poppins-Medium", color: "white" }}>Edit Profile</Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>
        </View>
        {/* <EditModal  /> */}
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  ProParent: { borderWidth: 1, borderColor: "#F4F4F4", padding: 10 },
  ProfileText: { fontFamily: "Poppins-Bold", fontSize: 20, letterSpacing: 1 },
  grid: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    paddingLeft: 80,
    padding: 5
  },
  text: {
    width: '40%',
    color: 'grey',
    fontFamily: 'Poppins',
    fontSize: 12,
  },
  text2: {
    width: '50%',
    fontFamily: 'Poppins',
    color: '#333',
    letterSpacing: 1,
    fontSize: 12,
  },
})